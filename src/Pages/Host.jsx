import React from 'react'
import HostNav from '../Components/HostNav'
import style from '../assets/Styles/pages.module.css'
import starImg from '../assets/Images/Star 3.png'
import cardimg1 from '../assets/Images/card1.png'
import cardimg2 from '../assets/Images/card2.png'
import cardimg3 from '../assets/Images/card3.png'


const Host = () => {
  return (
    <>
        <HostNav />
        <div className={style.htPt1}>
            <h1>Welcome!</h1>
            <div>
                <p>Income last <span>30 days</span></p>
                <p>Details</p>
            </div>
            <h2>$2,260</h2>
        </div>
        <div className={style.htPt2}>
            <div><p>Review score</p> <img src={starImg} alt="" /><span><b>5.0</b>/5</span></div>
            <div>Details</div>
        </div>
        <div className={style.htPt3}>
            <div><h1>Your listed vans</h1> <p>View all</p></div>
            <section className={style.listOfVan}>
                <div>
                    <div>
                        <div><img src={cardimg1} alt="" /></div>
                        <div>
                        <h1>Modest Explorer</h1>
                        <p>$60/<span>day</span></p>
                        </div>
                    </div>
                    <div>Edit</div>
                </div>

                <div>
                    <div>
                        <div><img src={cardimg2} alt="" /></div>
                        <div>
                        <h1>Beach Bum</h1>
                        <p>$80/<span>day</span></p>
                        </div>
                    </div>
                    <div>Edit</div>
                </div>

                <div>
                    <div>
                        <div><img src={cardimg3} alt="" /></div>
                        <div>
                        <h1>Green Wonder</h1>
                        <p>$70/<span>day</span></p>
                        </div>
                    </div>
                    <div>Edit</div>
                </div>
            </section>
        </div>
    </>
  )
}

export default Host