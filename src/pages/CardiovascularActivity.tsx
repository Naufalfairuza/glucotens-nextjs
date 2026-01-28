import { useState } from 'react'
import Footer from '../components/layout/Footer'
import Navbar from '../components/layout/Navbar'

const CardiovascularActivity = () => {
  const [formData, setFormData] = useState({
    activity: '',
    duration: '',
    description: '',
  })

  const [activities, setActivities] = useState([
    { activity: 'Lari pagi', duration: '30.00 Menit', description: 'Lari empat putaran lapangan' },
    { activity: 'Push Up', duration: '10.00 Menit', description: 'Melakukan setiap 2 menit' },
    { activity: 'Sit Up', duration: '10.00 Menit', description: '------------------------' },
  ])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form Data:', formData)
  }

  const handleDelete = (index: number) => {
    const newActivities = activities.filter((_, i) => i !== index)
    setActivities(newActivities)
  }

  return (
    <>
      <Navbar />
      <div style={{ paddingTop: '80px' }}>
        <div className="container mt-5">
          <div className="text-center">
            <h5 className="catatantekanandarah">
              Cardiovascular <span className="catatantekanandarah1">Activity</span>
            </h5>
          </div>
          <div className="d-flex align-items-start mt-5">
            <img src="/image/Cardiovascular.jpg" className="rounded float-start me-4" alt="" width="300" />
            <p className="data">
              Aktivitas kardiovaskular merujuk pada jenis olahraga yang mempengaruhi
              <br />
              Sistem kardiovaskular, terutama jantung dan pembuluh darah. Tujuan utama
              <br />
              dari aktivitas ini adalah untuk meningkatkan denyut jantung dan memperkuat
              <br />
              jantung. Contoh aktivitas kardiovaskular seperti jogging, berenang, senam aerobik dll.
            </p>
          </div>

          <div className="container mt-4">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">Activity</th>
                  <th scope="col">Duration</th>
                  <th scope="col">Description</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {activities.map((item, index) => (
                  <tr key={index}>
                    <td>{item.activity}</td>
                    <td>{item.duration}</td>
                    <td>{item.description}</td>
                    <td>
                      <button
                        className="btn btn-sm btn-danger"
                        onClick={() => handleDelete(index)}
                      >
                        x
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-3">
                <div className="forminput">
                  <label className="labelCardiovascular mb-2">Total Duration</label>
                  <input
                    style={{ height: '55px', borderRadius: '10px' }}
                    type="time"
                    className="form-control p-2"
                    placeholder="Masukkan durasi"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-5">
            <h5 className="catatantekanandarah">
              Trace Your <span className="catatantekanandarah1">Activity</span>
            </h5>
            <p className="data">
              Masukkan data kegiatan sehari-hari dalam olahraga <br />
              untuk memantau kondisi tubuh
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-4">
                  <div className="forminput mb-4">
                    <label className="labelCardiovascular mb-2">Activity</label>
                    <input
                      style={{ height: '55px', borderRadius: '10px' }}
                      type="text"
                      className="form-control p-2 w-60"
                      placeholder="Masukkan kegiatan olahraga"
                      value={formData.activity}
                      onChange={(e) => setFormData({ ...formData, activity: e.target.value })}
                    />
                  </div>
                  <div className="forminput">
                    <label className="labelCardiovascular mb-2">Duration</label>
                    <input
                      style={{ height: '55px', borderRadius: '10px' }}
                      type="time"
                      className="form-control p-2"
                      placeholder="Masukkan durasi"
                      value={formData.duration}
                      onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="forminput mb-4">
                    <label className="labelCardiovascular mb-2">Description</label>
                    <input
                      style={{ height: '55px', borderRadius: '10px' }}
                      type="text"
                      className="form-control p-2 w-60"
                      placeholder="Masukkan Detail Tertentu"
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    />
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-md-6 text-center">
                    <div className="d-flex justify-content-around mt-1">
                      <button className="btn py-4 px-4 jadwal-makan info" type="submit">
                        Save
                      </button>
                      <button className="btn py-4 px-4 jadwal-makan" type="button">
                        Edit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default CardiovascularActivity
