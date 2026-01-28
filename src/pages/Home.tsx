cat > src/pages/Home.tsx << 'EOF'
import { Link } from 'react-router-dom'
import Footer from '../components/layout/Footer'
import Navbar from '../components/layout/Navbar'

const Home = () => {
  return (
    <>
      <Navbar />
      <div style={{ paddingTop: '80px' }}>
        {/* BMI Section */}
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-6">
              <img src="/image/image 1.jpg" alt="BMI" width="480" height="357" />
            </div>
            <div className="col-md-6">
              <h2 className="cek">
                Cek <span className="beratbadan">Berat Badan</span> Ideal mu
                <br />
                Sesuai <span className="beratbadan">Tinggi</span>
              </h2>
              <p className="bmi">
                BMI (Body Mass Index) adalah suatu indeks yang mengukur proporsi
                berat badan terhadap tinggi badan seseorang. Tujuannya adalah untuk
                mengevaluasi apakah seseorang memiliki berat badan yang sehat,
                kurang berat, atau berlebihan. BMI membantu dalam penilaian risiko
                kesehatan terkait dengan kesehatan yang dipengaruhi oleh gula dan
                tekanan darah
              </p>
              <Link to="/kalkulator-bmi" className="btn btn-detial px-5">
                Detail
              </Link>
            </div>
          </div>
        </div>

        {/* Our Tools Section */}
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-12 text-center mb-3 mt-5">
              <h2>Our Tools</h2>
            </div>
            <Link
              to="/gula-darah"
              className="col-md-2 offset-md-1 text-center text-decoration-none"
            >
              <img src="/image/tool1.jpg" alt="Tool 1" height="150px" />
              <div className="fw-bold text-dark">Gula Darah Tracking</div>
            </Link>
            <Link
              to="/tekanan-darah"
              className="col-md-2 text-center text-decoration-none"
            >
              <img src="/image/tool2.jpg" alt="Tool 2" height="150px" />
              <div className="fw-bold text-dark">Blood Pressure Tracking</div>
            </Link>
            <Link
              to="/cardiovascular-activity"
              className="col-md-2 text-center text-decoration-none"
            >
              <img src="/image/tool3.jpg" alt="Tool 3" height="150px" />
              <div className="fw-bold text-dark">Cardiovascular activity</div>
            </Link>
            <Link to="#" className="col-md-2 text-center text-decoration-none">
              <img src="/image/tool4.jpg" alt="Tool 4" height="150px" />
              <div className="fw-bold text-dark">MAP Calculator</div>
            </Link>
            <Link
              to="/kalkulator-kalori"
              className="col-md-2 text-center text-decoration-none"
            >
              <img src="/image/tool5.jpg" alt="Tool 5" height="150px" />
              <div className="fw-bold text-dark">Calori Calculator</div>
            </Link>
          </div>
        </div>

        {/* Latest News Section */}
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-12 text-center mb-3 mt-5">
              <h2 className="mb-5">Latest on Glucotens</h2>
            </div>
            <div className="col-md-3">
              <div className="card text-center pb-4 shadow" style={{ borderRadius: '10px' }}>
                <img src="/image/news 1.jpg" width="100%" alt="News 1" />
                <p style={{ minHeight: '80px' }} className="fw-bold mt-3">
                  Obesity scientist who popularised the Body Mass Index and waged
                  war on junk food – obituary
                </p>
                <Link
                  to="/detail"
                  style={{ width: '70%', marginLeft: '13%' }}
                  className="btn btn-outline w-75"
                >
                  Detail
                </Link>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card text-center pb-4 shadow" style={{ borderRadius: '10px' }}>
                <img src="/image/news 2.jpg" width="100%" alt="News 2" />
                <p style={{ minHeight: '80px' }} className="fw-bold mt-3">
                  Best Nutrition and Diet Tips
                </p>
                <Link
                  to="/detail-news-2"
                  style={{ width: '70%', marginLeft: '13%' }}
                  className="btn btn-outline w-75"
                >
                  Detail
                </Link>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card text-center pb-4 shadow" style={{ borderRadius: '10px' }}>
                <img src="/image/news 3.jpg" width="100%" alt="News 3" />
                <p style={{ minHeight: '80px' }} className="fw-bold mt-3">
                  What Is Subcutaneous Fat, and Is It Easy to Lose?
                </p>
                <Link
                  to="/detail-news-3"
                  style={{ width: '70%', marginLeft: '13%' }}
                  className="btn btn-outline w-75"
                >
                  Detail
                </Link>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card text-center pb-4 shadow" style={{ borderRadius: '10px' }}>
                <img src="/image/news 4.jpg" width="100%" alt="News 4" />
                <p style={{ minHeight: '80px' }} className="fw-bold mt-3">
                  Many kids that have obesity start in 5 years old in america
                </p>
                <Link
                  to="/detail-news-4"
                  style={{ width: '70%', marginLeft: '13%' }}
                  className="btn btn-outline w-75"
                >
                  Detail
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Medical Advisory Section */}
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-12 text-center mb-3 mt-5">
              <h2>Our Medical Advisory</h2>
              <p style={{ fontWeight: 600, fontSize: '20px' }}>
                Meet our medical advisors — highly respected experts who ensure
                <br />
                our content is complete and accurate
              </p>
            </div>
          </div>
          <div className="row justify-content-center" style={{ marginLeft: '20%', width: '70%' }}>
            <div className="col-md-6 row mt-5">
              <div className="col-md-12">
                <img
                  className="rounded-circle"
                  height="80"
                  width="80"
                  src="/image/dokter1.jpg"
                  alt="Doctor 1"
                />
                <label style={{ fontWeight: 700, marginLeft: '8px' }}>
                  Dr. Indah Purnamasari
                </label>
              </div>
              <div className="col-md-12 mt-5">
                <img
                  className="rounded-circle"
                  height="80"
                  width="80"
                  src="/image/dokter2.jpg"
                  alt="Doctor 2"
                />
                <label style={{ fontWeight: 700, marginLeft: '8px' }}>
                  Dr. Leonardo Hadinata
                </label>
              </div>
            </div>
            <div className="col-md-6 row mt-5">
              <div className="col-md-12">
                <img
                  className="rounded-circle"
                  height="80"
                  width="80"
                  src="/image/dokter3.jpg"
                  alt="Doctor 3"
                />
                <label style={{ fontWeight: 700, marginLeft: '8px' }}>
                  Dr. Elizabeth Estina Tanjung
                </label>
              </div>
              <div className="col-md-12 mt-5">
                <img
                  className="rounded-circle"
                  height="80"
                  width="80"
                  src="/image/dokter4.jpg"
                  alt="Doctor 4"
                />
                <label style={{ fontWeight: 700, marginLeft: '8px' }}>
                  Dr. Andrew Hutama
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Home
EOF
