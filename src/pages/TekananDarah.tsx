import { BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip } from 'chart.js'
import { useState } from 'react'
import { Bar } from 'react-chartjs-2'
import MealTimeButton from '../components/common/MealTimeButton'
import Footer from '../components/layout/Footer'
import Navbar from '../components/layout/Navbar'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const TekananDarah = () => {
  const [mealTime, setMealTime] = useState<'pagi' | 'siang' | 'malam' | null>(null)
  const [formData, setFormData] = useState({
    tekananDarah: '',
    tanggal: '',
    pukul: '',
    sebelum: '',
    sesudah: '',
  })

  const chartData = {
    labels: ['', '', '', '', '', ''],
    datasets: [
      {
        label: 'Nilai 1',
        backgroundColor: '#6cb9ad',
        borderWidth: 1,
        data: [3, 5, 4, 5, 6, 1],
      },
      {
        label: 'Nilai 2',
        backgroundColor: '#324ddd',
        borderWidth: 1,
        data: [4, 6, 6, 2, 4, 1],
      },
      {
        label: 'Nilai 3',
        backgroundColor: '#272a3e',
        borderWidth: 1,
        data: [2, 7, 6, 1, 2, 3],
      },
    ],
  }

  const chartOptions = {
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Jumlah Tekanan Darah',
          font: {
            size: 15,
          },
        },
      },
    },
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form Data:', formData, 'Meal Time:', mealTime)
  }

  return (
    <>
      <Navbar />
      <div style={{ paddingTop: '80px' }}>
        <div className="container mt-5">
          <div className="text-center">
            <h2>
              Grafik <span className="tekanandarah">Tekanan Darah</span>
            </h2>
          </div>
          <div style={{ width: '70%', marginLeft: '15%' }} className="my-5">
            <Bar data={chartData} options={chartOptions} />
          </div>
          <div className="card w-50 border-0 cardtekanandarah mb-4" style={{ marginLeft: '25%' }}>
            <div className="card-body row">
              <div className="col-md-5">
                <img src="/image/imgtekanandarah.png" width="203" alt="Tekanan Darah" />
              </div>
              <div className="col-md-7">
                <h5 className="normal mt-5">Rerata Tekanan Darah Anda : </h5>
                <p className="tekananday">120/80 mmHg per day</p>
                <p className="guladarah">Tekanan Darah Normal</p>
              </div>
            </div>
          </div>
          <div className="text-center mt-5">
            <h5 className="catatantekanandarah">
              Catat <span className="catatantekanandarah1"> Tekanan Darah</span>
            </h5>
            <p className="data">
              Masukkan data tekanan darah anda perhari untuk <br />
              memantau kondisi kadar tekanan dalam tubuh
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-4">
                  <div className="forminput mb-4">
                    <label className="labeltekanan mb-2">Tekanan Darah</label>
                    <input
                      style={{ height: '55px', borderRadius: '10px' }}
                      type="text"
                      className="form-control p-2 w-60"
                      placeholder="mmHg"
                      value={formData.tekananDarah}
                      onChange={(e) => setFormData({ ...formData, tekananDarah: e.target.value })}
                    />
                  </div>
                  <div className="forminput">
                    <label className="labeltekanan mb-2">Pukul</label>
                    <input
                      style={{ height: '55px', borderRadius: '10px' }}
                      type="time"
                      className="form-control p-2"
                      placeholder="hh/mm"
                      value={formData.pukul}
                      onChange={(e) => setFormData({ ...formData, pukul: e.target.value })}
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="forminput mb-4">
                    <label className="labeltekanan mb-2">Tanggal</label>
                    <input
                      style={{ height: '55px', borderRadius: '10px' }}
                      type="date"
                      className="form-control p-2"
                      placeholder="dd/mm/yyyy"
                      value={formData.tanggal}
                      onChange={(e) => setFormData({ ...formData, tanggal: e.target.value })}
                    />
                  </div>
                  <div className="forminput">
                    <label className="labeltekanan mb-2">Detail Pengukuran</label>
                    <div className="d-flex">
                      <input
                        type="text"
                        style={{ height: '55px', borderRadius: '10px' }}
                        className="form-control w-50 p-2 me-3"
                        placeholder="sebelum"
                        value={formData.sebelum}
                        onChange={(e) => setFormData({ ...formData, sebelum: e.target.value })}
                      />
                      <input
                        type="text"
                        style={{ height: '55px', borderRadius: '10px' }}
                        className="form-control w-50 p-2"
                        placeholder="sesudah"
                        value={formData.sesudah}
                        onChange={(e) => setFormData({ ...formData, sesudah: e.target.value })}
                      />
                    </div>
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-md-6 text-center">
                    <MealTimeButton selected={mealTime} onSelect={setMealTime} />
                    <button className="btn btn-simpan text-white mt-5 px-5" type="submit">
                      Simpan
                    </button>
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

export default TekananDarah
