import React from 'react'
import style from '../assets/Styles/comp.module.css'
import { Link } from 'react-router-dom'


const HostNav = () => {
  return (
    <>
        <div className={style.hnBody}>
            <ul>
                <li>
                    <Link to="/host" style={{textDecoration: "none", color: "#4D4D4D"}}>
                        Dashboard
                    </Link>
                </li>
                <li>
                    <Link to="/host/income" style={{textDecoration: "none", color: "#4D4D4D"}}>
                        Income
                    </Link>
                </li>
                <li>
                    <Link to="/host/vans" style={{textDecoration: "none", color: "#4D4D4D"}}>
                        Vans
                    </Link>
                </li>
                <li>
                    <Link to="/host/reviews" style={{textDecoration: "none", color: "#4D4D4D"}}>
                        Reviews
                    </Link>
                </li>
            </ul>
        </div>
    </>
  )
}

export default HostNav