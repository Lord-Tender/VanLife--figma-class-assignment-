import React from 'react'
import style from '../assets/Styles/pages.module.css'
import firstImg from '../assets/Images/firstAboutImg.png'

const About = () => {
    return (
        <>
            <div className={style.firstImg}>
                <img src={firstImg} alt="" />
            </div>
            <section className={style.aboutBody}>
                <div>
                    <h1>Don’t squeeze in a sedan when you could relax in a van.</h1>
                    <div>
                        <p>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
                            (Hitch costs extra 😉)
                        </p>
                        <p>
                            Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.
                        </p>
                    </div>
                </div>
                <div className={style.aboutLeft}>
                    <div>
                        <h1>Your destination is waiting. Your van is ready.</h1>
                        <button>Explore our vans</button>
                    </div>

                </div>
            </section>
        </>
    )
}

export default About