import React from "react"
import Home from './Pages/Home'
import About from './Pages/About'
import Van from './Pages/Van'
import { Route, Routes } from "react-router-dom"
import Modestvan from "./Pages/Modestvan"
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import Notfound from "./Pages/Notfound"
import Sign from "./Pages/Sign"
import Host from "./Pages/Host"
import HostVan from "./Pages/HostVan"
import HostReview from "./Pages/HostReview"
import HostIncome from "./Pages/HostIncome"
import HostVanDetail from "./Pages/HostVanDetail"
import HostVanDetailPricing from "./Pages/HostVanDetailPricing"
import HostVanDetailPhoto from "./Pages/HostVanDetailPhoto"

function App() {

  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/van" element={<Van />} />
        <Route path="/van/modest" element={<Modestvan />} />
        <Route path="/login" element={<Sign />} />
        <Route path="/host" element={<Host />} />
        <Route path="/host/reviews" element={<HostReview />} />
        <Route path="/host/vans" element={<HostVan />} />
        <Route path="/host/income" element={<HostIncome />} />
        <Route path="/host/vans/123" element={<HostVanDetail />} />
        <Route path="/host/vans/123/pricing" element={<HostVanDetailPricing />} />
        <Route path="/host/vans/123/photo" element={<HostVanDetailPhoto />} />
        <Route path="*" element={< Notfound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App