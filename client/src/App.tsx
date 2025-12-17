import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Scanner from './pages/Scanner.jsx'
import Home from './pages/Home.jsx'
import {Switch} from '@/components/ui/switch.jsx'
import { useEffect, useState } from 'react'
import { useTheme } from './components/ui/theme-provider.js'
import { Moon, Sun } from 'lucide-react'

function App() {
  const [enabled, setEnabled] = useState(false)
  const { setTheme } = useTheme()
 
  useEffect(() => {
    if (enabled){
      setTheme('dark')
    }
    else {
      setTheme('light')
    }
  }, [enabled])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/scanner" element={<Scanner/>} />
      </Routes>
      <div className='flex fixed right-0 transition-all gap-3 items-center bottom-0 m-7'>
        <Switch onCheckedChange={setEnabled} checked={enabled}/>
        { enabled 
        ? < Sun /> 
        : < Moon />
        }
      </div>
    </BrowserRouter>
  )
}

export default App
