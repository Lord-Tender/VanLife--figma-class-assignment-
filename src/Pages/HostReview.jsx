import React from 'react'
import HostNav from '../Components/HostNav'
import style2 from '../assets/Styles/page2.module.css'
import starImg from '../assets/Images/Star 3.png'
import grougImg from '../assets/Images/Group314.png'

const HostReview = () => {
    return (
        <>
            <HostNav />
            <section className={style2.hostReview}>
                <div>
                    <div className={style2.hostReviewHeader1}>
                        <h1>Your reviews</h1>
                        <p>last <span>30 days</span></p>
                    </div>
                    <div>
                        <img src={grougImg} alt="" />
                    </div>
                </div>
                <div className={style2.side2}>
                    <h1>Reviews (2)</h1>
                    <div className={style2.review1}>
                        <div><img src={starImg} alt="" /><img src={starImg} alt="" /><img src={starImg} alt="" /><img src={starImg} alt="" /><img src={starImg} alt="" /></div>
                        <h2>Elliot <span>December 1, 2022</span> </h2>
                        <p>The beach bum is such as awesome van! Such as comfortable trip. We had it for 2 weeks and there was not a single issue. Super clean when we picked it up and the host is very comfortable and understanding. Highly recommend!</p>
                    </div>

                    <div className={style2.review2}>
                        <div><img src={starImg} alt="" /><img src={starImg} alt="" /><img src={starImg} alt="" /><img src={starImg} alt="" /><img src={starImg} alt="" /></div>
                        <h2>Sandy <span>November 23, 2022</span> </h2>
                        <p>This is our third time using the Modest Explorer for our travels and we love it! No complaints, absolutely perfect!</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HostReview