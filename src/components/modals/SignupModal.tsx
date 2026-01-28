import { useState } from 'react'

interface SignupModalProps {
  show: boolean
  onClose: () => void
}

const SignupModal = ({ show, onClose }: SignupModalProps) => {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  if (!show) return null

  return (
    <div
      className="modal fade show"
      style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }}
      tabIndex={-1}
      onClick={onClose}
    >
      <div className="modal-dialog modal-dialog-centered" onClick={(e) => e.stopPropagation()}>
        <div className="modal-content p-4" style={{ borderRadius: '20px' }}>
          <div className="modal-header d-flex justify-content-between">
            <div className="d-flex flex-column">
              <p style={{ color: '#00D1FFF5', fontWeight: 600, fontSize: '17px' }}>
                New to GlucoTens? Join now!
              </p>
              <h5
                className="modal-title"
                style={{ fontWeight: 700, fontSize: '28px', marginTop: '-13px' }}
              >
                Please Sign Up
              </h5>
            </div>
            <button
              type="button"
              className="btn-close mb-5"
              onClick={onClose}
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form>
              <div className="mb-4">
                <input
                  style={{ height: '60px', borderRadius: '15px' }}
                  type="text"
                  className="form-control"
                  placeholder="Email"
                />
              </div>
              <div className="mb-3 pt-2 pb-2 position-relative">
                <input
                  style={{ height: '60px', borderRadius: '15px' }}
                  type={showPassword ? 'text' : 'password'}
                  className="form-control"
                  placeholder="Password"
                />
                <i
                  className={`fa ${showPassword ? 'fa-eye' : 'fa-eye-slash'} position-absolute end-0 translate-middle-y me-4`}
                  style={{ cursor: 'pointer', marginTop: '-32px', fontSize: '20px' }}
                  onClick={() => setShowPassword(!showPassword)}
                ></i>
              </div>
              <div className="mb-3 pt-2 pb-2 position-relative">
                <input
                  style={{ height: '60px', borderRadius: '15px' }}
                  type={showConfirmPassword ? 'text' : 'password'}
                  className="form-control"
                  placeholder="Confirm Password"
                />
                <i
                  className={`fa ${showConfirmPassword ? 'fa-eye' : 'fa-eye-slash'} position-absolute end-0 translate-middle-y me-4`}
                  style={{ cursor: 'pointer', marginTop: '-32px', fontSize: '20px' }}
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                ></i>
              </div>
              <div className="d-flex">
                <button style={{ width: '130px', fontWeight: 700 }} type="submit" className="btn btn-primary">
                  Sign Up
                </button>
                <a className="mt-auto mb-auto ms-3" style={{ fontWeight: 500, fontSize: '16px' }}>
                  Already have an account?
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignupModal
