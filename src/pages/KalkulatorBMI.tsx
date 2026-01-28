import { useState } from 'react'
import GenderButton from '../components/common/GenderButton'
import Footer from '../components/layout/Footer'
import Navbar from '../components/layout/Navbar'

const KalkulatorBMI = () => {
  const [gender, setGender] = useState<'male' | 'female' | null>(null)
  const [formData, setFormData] = useState({
    usia: '',
    beratBadan: '',
    tinggiBadan: '',
  })
  const [bmiResult, setBmiResult] = useState<number | null>(null)

  const calculateBMI = () => {
    const berat = parseFloat(formData.beratBadan)
    const tinggi = parseFloat(formData.tinggiBadan) / 100

    if (berat && tinggi) {
      const bmi = berat / (tinggi * tinggi)
      setBmiResult(parseFloat(bmi.toFixed(2)))
    }
  }

  return (
    <>
      <Navbar />
      <div style={{ paddingTop: '80px' }}>
        <div className="container mt-5">
          <h2 className="mb-4">
            Kalkulator <span style={{ color: '#E6681A' }}>BMI</span>
          </h2>
          <h5 className="mb-4 mt-2">Data Kesehatan Dasar</h5>
          <GenderButton selected={gender} onSelect={setGender} />

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
            <div className="col-md-4 mt-3">
              <button
                style={{ backgroundColor: '#6610f2', color: 'white', width: '150px' }}
                className="btn"
                onClick={calculateBMI}
              >
                Hitung
              </button>
            </div>
          </div>
          <div
            className="card w-50 mt-5"
            style={{
              backgroundColor: '#F4F4FE',
              marginLeft: '25%',
              border: '2px solid #0000FF',
              borderRadius: '10px',
            }}
          >
            <div className="card-body row">
              <div className="col-md-6">
                <img src="/image/image 1.jpg" width="100%" alt="BMI" />
              </div>
              <div className="col-md-6 d-flex align-items-center justify-content-center text-center">
                <div>
                  <h5>Your BMI</h5>
                  <p style={{ fontSize: '32px', fontWeight: 'bold' }}>
                    {bmiResult !== null ? bmiResult : '-'}
                  </p>
                  <p>kg/m²</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default KalkulatorBMI
