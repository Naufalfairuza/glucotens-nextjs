import { useState } from 'react'
import { BloodSugarRecord } from '../../pages/GulaDarah'

interface Props {
  onSubmit: (record: Omit<BloodSugarRecord, 'id' | 'timestamp'>) => void
}

export default function BloodSugarForm({ onSubmit }: Props) {
  const [value, setValue] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [beforeAfter, setBeforeAfter] = useState<'before' | 'after'>('before')
  const [mealTime, setMealTime] = useState<'breakfast' | 'lunch' | 'dinner'>('breakfast')

  const handleSubmit = () => {
    if (!value || !date || !time) {
      alert('Mohon lengkapi semua field!')
      return
    }

    onSubmit({
      value: parseFloat(value),
      date,
      time,
      beforeAfter,
      mealTime,
    })

    // Reset form
    setValue('')
    setDate('')
    setTime('')
    setBeforeAfter('before')
    setMealTime('breakfast')
  }

  return (
    <>
      <div className="text-center mt-5">
        <h5 className="fw-bold">
          Catat <span style={{ color: '#E6681A' }}>Gula Darah</span>
        </h5>
        <p className="data" style={{ fontWeight: 600, fontSize: '18px' }}>
          Masukkan data gula darah anda perhari untuk <br />
          memantau kondisi kadar gula dalam tubuh
        </p>
      </div>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <div className="mb-4">
              <label className="fw-bold mb-2">Kadar Gula Darah</label>
              <input
                style={{ height: '55px', borderRadius: '10px' }}
                type="number"
                className="form-control p-3"
                placeholder="mg/dl"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="fw-bold mb-2">Pukul</label>
              <input
                style={{ height: '55px', borderRadius: '10px' }}
                type="time"
                className="form-control p-3"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
            </div>
          </div>

          <div className="col-md-4">
            <div className="mb-4">
              <label className="fw-bold mb-2">Tanggal</label>
              <input
                style={{ height: '55px', borderRadius: '10px' }}
                type="date"
                className="form-control p-3"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="fw-bold mb-2">Detail Pengukuran</label>
              <div className="d-flex gap-3">
                <button
                  className={`btn flex-fill py-3 ${beforeAfter === 'before' ? 'btn-primary' : 'btn-outline-primary'}`}
                  onClick={() => setBeforeAfter('before')}
                  style={{ borderRadius: '10px', fontWeight: 600 }}
                >
                  Sebelum
                </button>
                <button
                  className={`btn flex-fill py-3 ${beforeAfter === 'after' ? 'btn-primary' : 'btn-outline-primary'}`}
                  onClick={() => setBeforeAfter('after')}
                  style={{ borderRadius: '10px', fontWeight: 600 }}
                >
                  Sesudah
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Meal Time Buttons */}
        <div className="row justify-content-center">
          <div className="col-md-6 text-center">
            <div className="d-flex justify-content-around mt-3 mb-4">
              <button
                className={`btn py-3 px-4 ${mealTime === 'breakfast' ? 'btn-info text-white' : 'btn-outline-secondary'}`}
                onClick={() => setMealTime('breakfast')}
                style={{ borderRadius: '10px', fontWeight: 600 }}
              >
                Makan <br /> Pagi
              </button>
              <button
                className={`btn py-3 px-4 ${mealTime === 'lunch' ? 'btn-info text-white' : 'btn-outline-secondary'}`}
                onClick={() => setMealTime('lunch')}
                style={{ borderRadius: '10px', fontWeight: 600 }}
              >
                Makan <br /> Siang
              </button>
              <button
                className={`btn py-3 px-4 ${mealTime === 'dinner' ? 'btn-info text-white' : 'btn-outline-secondary'}`}
                onClick={() => setMealTime('dinner')}
                style={{ borderRadius: '10px', fontWeight: 600 }}
              >
                Makan <br /> Malam
              </button>
            </div>
            <button
              className="btn btn-primary text-white mt-3 px-5 py-3"
              onClick={handleSubmit}
              style={{ borderRadius: '10px', fontWeight: 700, fontSize: '18px' }}
            >
              Simpan
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
