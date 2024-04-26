import React from 'react'
import style from '../assets/Styles/pages.module.css'
import Vancard from '../Components/Vancard'
import cardimg1 from '../assets/Images/card1.png'
import cardimg2 from '../assets/Images/card2.png'
import cardimg3 from '../assets/Images/card3.png'
import cardimg4 from '../assets/Images/card4.png'
import cardimg5 from '../assets/Images/card5.png'
import cardimg6 from '../assets/Images/card6.png'


const Van = () => {
    const card1 = {
        img : cardimg1,
        name: "Modest Explorer",
        price: "$60",
        buttonColor: "#E17654",
        buttonText: "Simple"
    }

    const card2 = {
        img : `${cardimg2}`,
        name: "Beach Bum",
        price: "$80",
        buttonColor: "#115E59",
        buttonText: "Rugged"
    }

    const card3 = {
        img : `${cardimg3}`,
        name: "Reliable Red",
        price: "$100",
        buttonColor: "#161616",
        buttonText: "Luxury"
    }

    const card4 = {
        img : `${cardimg4}`,
        name: "Dream Finder",
        price: "$65",
        buttonColor: "#E17654",
        buttonText: "Simple"
    }

    const card5 = {
        img : `${cardimg5}`,
        name: "The Cruiser",
        price: "$120",
        buttonColor: "#161616",
        buttonText: "Luxury"
    }

    const card6 = {
        img : `${cardimg6}`,
        name: "Dream wonder",
        price: "$70",
        buttonColor: "#115E59",
        buttonText: "Rugged"
    }
  return (
    <>
        <section className={style.vanBody}>
            <div className={style.vanHeader}>
                <h1>Explore our van options</h1>
                <div>
                    <button>Simple</button>
                    <button>Luxury</button>
                    <button>Rugged</button>
                    <p>Clear fliters</p>
                </div>
            </div>
            <div className={style.vanCard}>
                <Vancard info= { card1 } />
                <Vancard info= { card2 } />
                <Vancard info= { card3 } />
                <Vancard info= { card4 } />
                <Vancard info= { card5 } />
                <Vancard info= { card6 } />

            </div>

        </section>
    </>
  )
}

export default Van