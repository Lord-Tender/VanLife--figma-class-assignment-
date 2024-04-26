import React from 'react'
import style from "../assets/Styles/comp.module.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <header className={style.header}>
        <Link to="/" style={{ textDecoration: "none", color: "black"}}>
          <h1>#Vanlife</h1>
        </Link>

        <div>
          <Link to="/host"  style={{ textDecoration: "none" }}>
          <p>Host</p>
          </Link>
          <Link to="/about" style={{ textDecoration: "none" }}>
            <p>About</p>
          </Link>
          <Link to="/van"  style={{ textDecoration: "none" }}>
          <p>Vans</p>
          </Link>
        </div>
      </header>
    </>
  )
}

export default Navbar