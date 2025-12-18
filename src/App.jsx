import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import OurImpact from './pages/OurImpact.jsx'
import Donation from './pages/Donation.jsx'
import PartnerWithUs from './pages/PartnerWithUs.jsx'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                 {/* Default page */}
                <Route path="/" element={<PartnerWithUs />} />

                <Route path="/our-impact" element={<OurImpact />} />
                <Route path="/make-a-donation" element={<Donation />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App