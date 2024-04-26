import React from 'react'
import modestImg from '../assets/Images/card1.png'
import { GoArrowLeft } from "react-icons/go";
import style from '../assets/Styles/pages.module.css'

const Modestvan = () => {
  return (
    <>
        <div className={style.mdMainSection}>
            <h1><GoArrowLeft className={style.arrowLeft}/> Back to all vans</h1>
            <div className={style.mdInnerSection}>
                <div>
                    <img src={modestImg} alt="" />
                    <button>Simple</button>
                </div>
                <div>
                    <h2>Modest Explorer</h2>
                    <h3>$60<span>/day</span></h3>
                    <p>The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!</p>
                    <button>Rent this van</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Modestvan