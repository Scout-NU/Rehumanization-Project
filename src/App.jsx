import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import OurImpact from './pages/OurImpact.jsx'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                 {/* Default page */}
                <Route path="/" element={<PartnerWithUs />} />

                <Route path="/our-impact" element={<OurImpact />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App