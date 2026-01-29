import { BloodSugarRecord } from '../../pages/GulaDarah'

interface Props {
  records: BloodSugarRecord[]
  onDelete: (id: string) => void
  onExport: () => void
}

export default function BloodSugarHistory({ records, onDelete, onExport }: Props) {
  if (records.length === 0) {
    return null
  }

  const getMealTimeLabel = (mealTime: string) => {
    switch (mealTime) {
      case 'breakfast': return 'Pagi'
      case 'lunch': return 'Siang'
      case 'dinner': return 'Malam'
      default: return mealTime
    }
  }

  const getBeforeAfterLabel = (beforeAfter: string) => {
    return beforeAfter === 'before' ? 'Sebelum' : 'Sesudah'
  }

  const formatDate = (dateString: string) => {
    const [year, month, day] = dateString.split('-')
    const date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day))
    return date.toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
  }

  return (
    <div className="mt-5 mb-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h4 className="fw-bold">Riwayat Pencatatan</h4>
        <button 
          className="btn btn-success"
          onClick={onExport}
          style={{ borderRadius: '8px', fontWeight: 600 }}
        >
          <i className="fas fa-download me-2"></i>
          Export CSV
        </button>
      </div>

      <div className="table-responsive">
        <table className="table table-hover shadow-sm" style={{ borderRadius: '10px', overflow: 'hidden' }}>
          <thead style={{ backgroundColor: '#6610f2', color: 'white' }}>
            <tr>
              <th scope="col" className="text-center">No</th>
              <th scope="col">Tanggal</th>
              <th scope="col" className="text-center">Waktu</th>
              <th scope="col" className="text-center">Kadar Gula Darah</th>
              <th scope="col" className="text-center">Detail</th>
              <th scope="col" className="text-center">Waktu Makan</th>
              <th scope="col" className="text-center">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {records.map((record, index) => (
              <tr key={record.id}>
                <td className="text-center">{index + 1}</td>
                <td>{formatDate(record.date)}</td>
                <td className="text-center">{record.time}</td>
                <td className="text-center">
                  <span className="badge bg-primary" style={{ fontSize: '14px' }}>
                    {record.value} mg/dl
                  </span>
                </td>
                <td className="text-center">
                  <span className={`badge ${record.beforeAfter === 'before' ? 'bg-info' : 'bg-warning'}`}>
                    {getBeforeAfterLabel(record.beforeAfter)}
                  </span>
                </td>
                <td className="text-center">
                  <span className="badge bg-secondary">
                    {getMealTimeLabel(record.mealTime)}
                  </span>
                </td>
                <td className="text-center">
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => {
                      if (window.confirm('Yakin ingin menghapus data ini?')) {
                        onDelete(record.id)
                      }
                    }}
                    style={{ borderRadius: '5px' }}
                  >
                    <i className="fas fa-trash"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="text-center mt-3">
        <small className="text-muted">
          Total {records.length} pencatatan
        </small>
      </div>
    </div>
  )
}
