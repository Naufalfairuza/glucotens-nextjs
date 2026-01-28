const Footer = () => {
  return (
    <footer className="text-white mt-5">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4 py footer1" style={{ marginBottom: '0px' }}>
            <div className="mt-5 ms-5">
              <img src="/image/GlucoTens.png" alt="GlucoTens Logo" width="150" />
              <h4 className="help mt-3">
                Help you to maintain your body from diseases
              </h4>
              <p className="mt-3 d-flex gap-4 mt-5">
                Follow us
                <a href="#" className="text-decoration-none">
                  <i className="bi bi-facebook icons fs-4" style={{ padding: '8px 12px' }}></i>
                </a>
                <a href="#" className="text-decoration-none">
                  <i className="bi bi-instagram icons fs-4" style={{ padding: '8px 12px' }}></i>
                </a>
                <a href="#" className="text-decoration-none">
                  <i className="bi bi-whatsapp icons fs-4" style={{ padding: '8px 12px' }}></i>
                </a>
                <a href="#" className="text-decoration-none">
                  <i className="bi bi-linkedin icons fs-4" style={{ padding: '8px 12px' }}></i>
                </a>
              </p>
            </div>
          </div>
          <div className="col-md-8 footer2 pb-5 pt-4">
            <div style={{ marginLeft: '30px' }} className="d-flex mt-5 pt-3">
              <div className="col-md-4">
                <h4>About us</h4>
                <p className="m-0">Perusahaan</p>
                <p className="m-0">Blog</p>
              </div>
              <div className="col-md-4">
                <h4>Product</h4>
                <p className="m-0">Ringkasan</p>
                <p className="m-0">Fitur</p>
              </div>
              <div className="col-md-4">
                <h4>Help</h4>
                <p className="m-0">Syarat dan Ketentuan</p>
                <p className="m-0">Kebijakan Privasi</p>
                <p className="m-0">Kontak</p>
              </div>
            </div>
          </div>
          <div className="copy col-md-12 text-center p-2">
            Copyright @2023 Glucotens All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
