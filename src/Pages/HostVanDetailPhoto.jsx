import React from 'react'
import HostVanNavbar from '../Components/HostVanNavbar'
import HostNav from '../Components/HostNav'
import style from '../assets/Styles/page2.module.css'
import { Link } from 'react-router-dom'
import cardimg1 from '../assets/Images/card1.png'


const HostVanDetailPhoto = () => {
  return (
    <>
      <HostNav />
      <section className={style.hostVanDetail}>
        <p><Link to="/host/vans" style={{ textDecoration: '2px underline black', color: "#201F1D" }}> Back to all vans</Link></p>
        <div className={style.whiteSpaceHostVanDetail}>
          <div>
            <div><img src={cardimg1} alt="" /></div>
            <div>
              <button>Simple</button>
              <h1>Modest Explorer</h1>
              <p>$60/<span>day</span></p>
            </div>
          </div>
          <HostVanNavbar />
          <div>
            <img src={cardimg1} alt="" />
          </div>
        </div>
      </section>
    </>
  )
}

export default HostVanDetailPhoto