import { SignInButton, UserButton, useUser } from '@clerk/clerk-react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const { isSignedIn } = useUser()

  return (
    <nav className="navbar navbar-expand-lg navbar-white bg-white fixed-top shadow-sm">
      <div className="container">
        {/* Dropdown Menu - Left Side */}
        <div className="dropdown">
          <button
            className="btn dropdown-toggle border-0"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            style={{ padding: '8px 12px', fontSize: '20px' }}
          >
            <i className="fa fa-bars" aria-hidden="true"></i>
          </button>
          <ul className="dropdown-menu p-2 shadow" style={{ width: '270px' }}>
            <li className="px-3 py-2">
              <Link className="text-decoration-none" to="/">
                <span className="glucodrop">Gluco</span>
                <span className="tensdrop">Tens</span>
              </Link>
            </li>
            <li><hr className="dropdown-divider" /></li>
            <li><Link className="dropdown-item rounded" to="#">Community</Link></li>
            <li><Link className="dropdown-item rounded" to="#">Popular searchers</Link></li>
            <li><Link className="dropdown-item rounded" to="#">About Diseases</Link></li>
            <li><Link className="dropdown-item rounded" to="#">PGDM</Link></li>
            <li><Link className="dropdown-item rounded" to="#">Notebook</Link></li>
            <li><Link className="dropdown-item rounded" to="#">Product</Link></li>
          </ul>
        </div>

        {/* Logo - Center */}
        <Link className="navbar-brand mx-auto" to="/">
          <span className="gluco">Gluco</span>
          <span className="tens">Tens</span>
        </Link>

        {/* Right Side - Notification & Auth */}
        <div className="d-flex align-items-center gap-3">
          <div className="nav-link" style={{ cursor: 'pointer' }}>
            <i className="fas fa-bell fa-lg" style={{ color: '#FF9800' }}></i>
          </div>
          {isSignedIn ? (
            <UserButton afterSignOutUrl="/" />
          ) : (
            <SignInButton mode="redirect" redirectUrl="/sign-in">
              <button className="btn btn-primary btn-sm px-3">
                <i className="fas fa-user me-2"></i>
                Sign In
              </button>
            </SignInButton>
          )}
        </div>
      </div>
    </nav>
  )
}
