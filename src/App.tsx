import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Welcome } from './pages/Welcome'
import { Dashboard } from './pages/Dashboard'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
