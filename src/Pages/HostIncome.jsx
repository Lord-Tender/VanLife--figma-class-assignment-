import React from 'react'
import HostNav from '../Components/HostNav'
import style2 from '../assets/Styles/page2.module.css'
import GroupImg from '../assets/Images/Group 312.png'

const HostIncome = () => {
    return (
        <>
            <HostNav />
            <section className={style2.hostIncome}>
                <h1>Income</h1>
                <div className={style2.hostIncomeInner}>
                    <div>
                        <p>Last <span>30 days</span></p>
                        <h1>$2,260</h1>
                        <div><img src={GroupImg} alt="" /></div>
                    </div>
                    <div className={style2.hostIncomeInnerRightSide}>
                        <div>
                            <h1>Your transactions (3)</h1>
                            <p>Last 30 days</p>
                        </div>
                        <div>
                            <h1>$720</h1>
                            <p>1/12/22</p>
                        </div>

                        <div>
                            <h1>$560</h1>
                            <p>10/11/22</p>
                        </div>

                        <div>
                            <h1>$980</h1>
                            <p>23/11/22</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HostIncome