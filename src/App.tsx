import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import OurImpact from "./pages/OurImpact.jsx";
import AboutUs from "./pages/AboutUs.jsx";

import OurTeam from "./pages/OurTeam/page.tsx";
import Home from "./pages/Home/page.tsx";
import PartnerWithUs from "./pages/PartnerWithUs/page.tsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/our-impact" element={<OurImpact />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/team" element={<OurTeam />} />
        <Route path="/partner" element={<PartnerWithUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
