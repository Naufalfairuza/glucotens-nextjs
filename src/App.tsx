import { SignIn, SignUp, SignedIn, SignedOut } from '@clerk/clerk-react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

// Placeholder components untuk pages yang belum diconvert
const PlaceholderPage = ({ title }: { title: string }) => (
  <div style={{ padding: '100px 50px', textAlign: 'center' }}>
    <h1>{title}</h1>
    <p>Page coming soon...</p>
  </div>
)

// Protected Route Wrapper
function ProtectedRoute({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SignedIn>{children}</SignedIn>
      <SignedOut>
        <Navigate to="/sign-in" replace />
      </SignedOut>
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<PlaceholderPage title="Detail News 1" />} />
        <Route path="/detail-news-2" element={<PlaceholderPage title="Detail News 2" />} />
        <Route path="/detail-news-3" element={<PlaceholderPage title="Detail News 3" />} />
        <Route path="/detail-news-4" element={<PlaceholderPage title="Detail News 4" />} />
        
        {/* Auth routes */}
        <Route 
          path="/sign-in" 
          element={
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
              <SignIn routing="path" path="/sign-in" signUpUrl="/sign-up" />
            </div>
          } 
        />
        <Route 
          path="/sign-up" 
          element={
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
              <SignUp routing="path" path="/sign-up" signInUrl="/sign-in" />
            </div>
          } 
        />
        
        {/* Protected routes */}
        <Route 
          path="/gula-darah" 
          element={
            <ProtectedRoute>
              <PlaceholderPage title="Gula Darah Tracking" />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/tekanan-darah" 
          element={
            <ProtectedRoute>
              <PlaceholderPage title="Blood Pressure Tracking" />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/kalkulator-bmi" 
          element={
            <ProtectedRoute>
              <PlaceholderPage title="BMI Calculator" />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/kalkulator-kalori" 
          element={
            <ProtectedRoute>
              <PlaceholderPage title="Calorie Calculator" />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/cardiovascular-activity" 
          element={
            <ProtectedRoute>
              <PlaceholderPage title="Cardiovascular Activity" />
            </ProtectedRoute>
          } 
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
