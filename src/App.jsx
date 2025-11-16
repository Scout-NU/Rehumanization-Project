import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import GetSupport from './pages/GetSupport.jsx'

function App() {
    const [count, setCount] = useState(0)

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/support" element={<GetSupport />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App