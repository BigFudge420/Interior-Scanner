import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Scanner from './pages/Scanner.jsx'

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/scanner" element={<Scanner/>} />
      </Routes>
      <h2>Interior Scanner</h2>
      <p>Navigate to '/login' for the Login page</p>
      <p>Navigate to '/dashboard' for the Dashboard page</p>
      <p>Navigate to '/scanner' for the Scanner page</p>
    </BrowserRouter>
  )
}

export default App
