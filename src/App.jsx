import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import OurImpact from './pages/OurImpact.jsx'
import AboutUs from './pages/AboutUs.jsx'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/our-impact" element={<OurImpact />} />
                <Route path="/about-us" element={<AboutUs />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App