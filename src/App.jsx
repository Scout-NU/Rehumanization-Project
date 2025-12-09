import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import OurImpact from './pages/OurImpact.jsx'
import Donation from './pages/Donation.jsx'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/our-impact" element={<OurImpact />} />
                <Route path="/make-a-donation" element={<Donation />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App