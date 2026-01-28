cat > src/components/layout/Navbar.tsx << 'EOF'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [showProfileModal, setShowProfileModal] = useState(false)

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-white bg-white fixed-top shadow">
        <div className="container">
          <div style={{ width: '10%' }} className="navbar-collapse">
            <ul className="navbar-nav">
              <li className="nav-item">
                <div className="dropdown">
                  <a
                    className="btn btn-secondary"
                    href="#"
                    role="button"
                    id="dropdownMenuLink"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="fa fa-bars" aria-hidden="true"></i>
                  </a>

                  <ul
                    className="dropdown-menu p-2"
                    aria-labelledby="dropdownMenuLink"
                    style={{ width: '270px' }}
                  >
                    <li>
                      <Link className="titledrop" to="/">
                        <span className="glucodrop">Gluco</span>
                        <span className="tensdrop">Tens</span>
                      </Link>
                    </li>
                    <li><a className="dropdown-item" href="#">Community</a></li>
                    <li><a className="dropdown-item" href="#">Popular searchers</a></li>
                    <li><a className="dropdown-item" href="#">About Diseases</a></li>
                    <li><a className="dropdown-item" href="#">PGDM</a></li>
                    <li><a className="dropdown-item" href="#">Notebook</a></li>
                    <li><a className="dropdown-item" href="#">Product</a></li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>

          <Link className="titlenav" to="/">
            <span className="gluco">Gluco</span>
            <span className="tens">Tens</span>
          </Link>

          <div style={{ width: '30%' }} className="navbar-collapse">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <div className="nav-link">
                  <i className="fas fa-bell fa-lg me-3" style={{ color: 'orange' }}></i>
                </div>
              </li>
              <li className="nav-item">
                <a
                  href="#"
                  className="nav-link me-3"
                  onClick={(e) => {
                    e.preventDefault()
                    setShowProfileModal(true)
                  }}
                >
                  <i className="fas fa-user me-1"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Profile Modal */}
      {showProfileModal && (
        <div
          className="modal fade show"
          style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }}
          tabIndex={-1}
          onClick={() => setShowProfileModal(false)}
        >
          <div 
            className="modal-dialog modal-dialog-centered" 
            style={{ width: '300px' }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-content">
              <div className="d-flex align-items-center modal-header bg-primary">
                <div className="d-flex">
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAbFBMVEUAAAD////u7u7t7e3s7Oz09PT5+fn8/Pzx8fHp6enl5eXZ2dl3d3cEBATi4uLKysqIiIi/v79ubm5ISEiVlZUtLS07OzuOjo4mJiasrKw0NDRcXFxhYWFmZmahoaEcHBxRUVG2trYUFBR/f3/QL1cDAAAUtElEQVR4nO1dCZfqLBI1EJYYTYx7tDtt9P//x4FsVBGya/edc76aMzPNKw1cgaK4VJEV0UKl8LQISYuyV4pL51c66dDRWleUJK9Lqkhp+UmPlTUI8MlaJyodh7q6VOr8+nsEfrLWrVgpvJR/qcQnf3JVd4KvRdbAi1LTCUWh/jFpqau7xKGrSwx+sn4KByUaeC4d/h7z9VMp/B7Q+VBXgRFo1FS9SGtdOWqwDo/L6nFl50s0aqhrZNRj1j1qioKPxtAY3f8rGOHS/SYY+Ml/GoxwgpHFHPWqx5TzFJvG6WDQ99xg1NTV/zEGgCIDQPEkp9AAQB1BBkCGcZ5ll8tro+S1u2RZHoesakYxcy0Tw5GuabBumTEcqkShcaDAACBTh01f9afTLGJd8VctupIwf93Pt9P15+f53K4K2T6fPz/X0+38tcljDal4VI+lZfhvVlbo0JUlbZppIWbx09IsmrrgS9MJulj/mI7vFeMyyDfX1aBc9+m6/Nm1mB9aCwe1m0WzrF3A2pFOL5p4mPdNgQEPQDLps3w/jMPIdx4QwiTB3gFFU2eSB/AWMJ4CEsXZYwqSUs7HOGqmqstw/QGY9SwkpRyyOOjuGfnbYMJ88zMXipbnPg3fMsyKmVRb02qS1waA9hgA4lff4ws6BXTPMWEeRwagagsyDsbRcxmHFV8kHstf5+VQtNw2OfHgs1lXpS1dXUIegLXK1x3k1BUlkexPA2183s6Hh5LD+TY0FK9fKTfjqzFxeESRnpE4351RxfjRs
