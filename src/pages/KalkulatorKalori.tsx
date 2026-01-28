import { useState } from 'react'
import GenderButton from '../components/common/GenderButton'
import Footer from '../components/layout/Footer'
import Navbar from '../components/layout/Navbar'

const KalkulatorKalori = () => {
  const [gender, setGender] = useState<'male' | 'female' | null>(null)
  const [aktivitas, setAktivitas] = useState<'ringan' | 'sedang' | 'tinggi' | null>(null)
  const [stres, setStres] = useState<'ya' | 'tidak' | null>(null)
  const [formData, setFormData] = useState({
    usia: '',
    beratBadan: '',
    tinggiBadan: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form Data:', formData, gender, aktivitas, stres)
  }

  return (
    <>
      <Navbar />
      <div style={{ paddingTop: '80px' }}>
        <div className="container mt-5">
          <h2 className="mb-4">
            Kalkulator <span style={{ color: '#E6681A' }}>Kalori</span>
          </h2>
          <h5 className="mb-4 mt-2">Data Kesehatan Dasar</h5>
          <GenderButton selected={gender} onSelect={setGender} />

          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-4">
                <label style={{ fontWeight: 700 }} className="mb-2">
                  Usia (th)
                </label>
                <input
                  style={{ border: 'solid 1px black', height: '50px', borderRadius: '12px' }}
                  type="text"
                  className="form-control"
                  placeholder="Masukkan Usia"
                  value={formData.usia}
                  onChange={(e) => setFormData({ ...formData, usia: e.target.value })}
                />
              </div>
              <div className="col-md-4">
                <label style={{ fontWeight: 700 }} className="mb-2">
                  Berat Badan (kg)
                </label>
                <input
                  style={{ border: 'solid 1px black', height: '50px', borderRadius: '12px' }}
                  type="text"
                  className="form-control"
                  placeholder="Masukkan Berat Badan"
                  value={formData.beratBadan}
                  onChange={(e) => setFormData({ ...formData, beratBadan: e.target.value })}
                />
              </div>
              <div className="col-md-4">
                <label style={{ fontWeight: 700 }} className="mb-2">
                  Tinggi Badan (cm)
                </label>
                <input
                  style={{ border: 'solid 1px black', height: '50px', borderRadius: '12px' }}
                  type="text"
                  className="form-control"
                  placeholder="Masukkan Tinggi Badan"
                  value={formData.tinggiBadan}
                  onChange={(e) => setFormData({ ...formData, tinggiBadan: e.target.value })}
                />
              </div>
            </div>

            <div className="container mt-5">
              <h2>Seleksi Aktivitas Fisik</h2>
              <div className="mb-3">
                <div
                  className="form-check p-3"
                  style={{ border: '2px solid #6610f2', borderRadius: '10px' }}
                >
                  <input
                    type="radio"
                    className="form-check-input"
                    name="aktivitas"
                    checked={aktivitas === 'ringan'}
                    onChange={() => setAktivitas('ringan')}
                  />
                  <label className="form-check-label">Ringan</label>
                </div>
              </div>
              <div className="mb-3">
                <div
                  className="form-check p-3"
                  style={{ border: '2px solid #6610f2', borderRadius: '10px' }}
                >
                  <input
                    type="radio"
                    className="form-check-input"
                    name="aktivitas"
                    checked={aktivitas === 'sedang'}
                    onChange={() => setAktivitas('sedang')}
                  />
                  <label className="form-check-label">Sedang</label>
                </div>
              </div>
              <div className="mb-3">
                <div
                  className="form-check p-3"
                  style={{ border: '2px solid #6610f2', borderRadius: '10px' }}
                >
                  <input
                    type="radio"
                    className="form-check-input"
                    name="aktivitas"
                    checked={aktivitas === 'tinggi'}
                    onChange={() => setAktivitas('tinggi')}
                  />
                  <label className="form-check-label">Tinggi</label>
                </div>
              </div>

              <h2 className="mt-4">Seleksi Stres Metabolik</h2>
              <div className="mb-3">
                <div className="form-check">
                  <input
                    type="radio"
                    className="form-check-input"
                    name="stres"
                    checked={stres === 'ya'}
                    onChange={() => setStres('ya')}
                  />
                  <label className="form-check-label">Ya</label>
                </div>
              </div>
              <div className="mb-3">
                <div className="form-check">
                  <input
                    type="radio"
                    className="form-check-input"
                    name="stres"
                    checked={stres === 'tidak'}
                    onChange={() => setStres('tidak')}
                  />
                  <label className="form-check-label">Tidak</label>
                </div>
              </div>
            </div>

            <div className="col-md-4 mt-3">
              <button
                style={{ backgroundColor: '#6610f2', color: 'white', width: '150px' }}
                className="btn"
                type="submit"
              >
                Hitung
              </button>
            </div>
          </form>

          <div
            className="card w-50 mt-5"
            style={{
              backgroundColor: '#F4F4FE',
              marginLeft: '25%',
              border: '2px solid #0000FF',
              borderRadius: '10px',
            }}
          >
            <div className="card-body text-center">
              <h5>Kebutuhan Kalori Harian</h5>
              <p style={{ fontSize: '32px', fontWeight: 'bold' }}>-</p>
              <p>kalori/hari</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default KalkulatorKalori
