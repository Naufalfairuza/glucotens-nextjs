import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="text-white mt-5">
      <div className="container-fluid p-0">
        <div className="row g-0">
          {/* Left Section - Purple Background */}
          <div className="col-md-4 footer1">
            <div className="mt-5 ms-5">
              <img src="/image/GlucoTens.png" alt="GlucoTens Logo" width="150" />
              <h4 className="help mt-3">
                Help you to maintain your body from diseases
              </h4>
              <div className="mt-5 d-flex align-items-center gap-3">
                <span style={{ fontSize: '16px', fontWeight: 500 }}>Follow us</span>
                <Link to="#" className="text-decoration-none">
                  <i className="bi bi-facebook icons fs-4" style={{ padding: '8px 12px' }}></i>
                </Link>
                <Link to="#" className="text-decoration-none">
                  <i className="bi bi-instagram icons fs-4" style={{ padding: '8px 12px' }}></i>
                </Link>
                <Link to="#" className="text-decoration-none">
                  <i className="bi bi-whatsapp icons fs-4" style={{ padding: '8px 12px' }}></i>
                </Link>
                <Link to="#" className="text-decoration-none">
                  <i className="bi bi-linkedin icons fs-4" style={{ padding: '8px 12px' }}></i>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Section - Darker Purple Background */}
          <div className="col-md-8 footer2 pb-5 pt-5">
            <div className="d-flex justify-content-around mt-5 pt-3 px-5">
              <div>
                <h4 className="mb-4" style={{ fontWeight: 700 }}>About us</h4>
                <p className="m-0 mb-2" style={{ cursor: 'pointer' }}>Perusahaan</p>
                <p className="m-0" style={{ cursor: 'pointer' }}>Blog</p>
              </div>
              <div>
                <h4 className="mb-4" style={{ fontWeight: 700 }}>Product</h4>
                <p className="m-0 mb-2" style={{ cursor: 'pointer' }}>Ringkasan</p>
                <p className="m-0" style={{ cursor: 'pointer' }}>Fitur</p>
              </div>
              <div>
                <h4 className="mb-4" style={{ fontWeight: 700 }}>Help</h4>
                <p className="m-0 mb-2" style={{ cursor: 'pointer' }}>Syarat dan Ketentuan</p>
                <p className="m-0 mb-2" style={{ cursor: 'pointer' }}>Kebijakan Privasi</p>
                <p className="m-0" style={{ cursor: 'pointer' }}>Kontak</p>
              </div>
            </div>
          </div>

          {/* Copyright Section */}
          <div className="col-md-12 copy text-center py-3">
            Copyright @2023 Glucotens All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  )
}
