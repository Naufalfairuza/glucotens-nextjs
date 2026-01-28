import Footer from '../components/layout/Footer'
import Navbar from '../components/layout/Navbar'

const Detail = () => {
  return (
    <>
      <Navbar />
      <div style={{ paddingTop: '80px', minHeight: '100vh' }}>
        <div className="container mt-5">
          <h1>Detail Page</h1>
          <p>Konten detail akan ditambahkan di sini.</p>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Detail
