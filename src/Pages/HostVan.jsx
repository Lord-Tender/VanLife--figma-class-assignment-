import React from 'react'
import HostNav from '../Components/HostNav'
import style2 from '../assets/Styles/page2.module.css'
import style from '../assets/Styles/pages.module.css'
import cardimg1 from '../assets/Images/card1.png'
import cardimg2 from '../assets/Images/card2.png'
import cardimg3 from '../assets/Images/card3.png'
import { useNavigate } from 'react-router-dom'


const HostVan = () => {
    let navigate = useNavigate()

    const navNow = () => {
        navigate('/host/vans/123')
    }
    return (
        <>
            <HostNav />
            <div className={style2.hostVan}>
                <div className={style.htPt3}>
                    <div><h1>Your listed vans</h1> <p>View all</p></div>
                    <section className={style.listOfVan}>
                        <div onClick={navNow}>
                            <div>
                                <div><img src={cardimg1} alt="" /></div>
                                <div>
                                    <h1>Modest Explorer</h1>
                                    <p>$60/<span>day</span></p>
                                </div>
                            </div>
                            <div></div>
                        </div>

                        <div>
                            <div>
                                <div><img src={cardimg2} alt="" /></div>
                                <div>
                                    <h1>Beach Bum</h1>
                                    <p>$80/<span>day</span></p>
                                </div>
                            </div>
                            <div></div>
                        </div>

                        <div>
                            <div>
                                <div><img src={cardimg3} alt="" /></div>
                                <div>
                                    <h1>Green Wonder</h1>
                                    <p>$70/<span>day</span></p>
                                </div>
                            </div>
                            <div></div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}

export default HostVan