import React from 'react'
import HostVanNavbar from '../Components/HostVanNavbar'
import HostNav from '../Components/HostNav'
import style from '../assets/Styles/page2.module.css'
import { Link } from 'react-router-dom'
import cardimg1 from '../assets/Images/card1.png'


const HostVanDetail = () => {
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
            <p><b>Name:</b> Modest Explorer</p>
            <p><b>Category:</b> Simple</p>
            <p><b>Description:</b> The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!</p>
            <p><b>Visibility:</b> Public</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default HostVanDetail