import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import OurImpact from './pages/OurImpact.jsx'
import AboutUs from './pages/AboutUs.jsx'
import OurTeam from './pages/OurTeam.jsx'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                 {/* Default page */}
                <Route path="/" element={<OurTeam />} />

                <Route path="/our-impact" element={<OurImpact />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/our-team" element={<OurTeam />} />
                
                 {/* Fallback */}
                <Route path="*" element={<OurTeam />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App