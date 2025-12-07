import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import OurImpact from './pages/OurImpact.jsx'
import AboutUs from './pages/AboutUs.jsx'
import OurTeam from './pages/OurTeam.jsx'
import PartnerWithUs from './pages/PartnerWithUs.jsx'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                 {/* Default page */}
                <Route path="/" element={<PartnerWithUs />} />

                <Route path="/our-impact" element={<OurImpact />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/our-team" element={<OurTeam />} />
                <Route path="/partner-with-us" element={<PartnerWithUs />} />
                
                 {/* Fallback */}
                <Route path="*" element={<PartnerWithUs />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App