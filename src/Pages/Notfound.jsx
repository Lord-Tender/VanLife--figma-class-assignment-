import React from 'react'
import { Link } from 'react-router-dom'
import style from '../assets/Styles/pages.module.css'

const Notfound = () => {
  return (
    <>
        <div className={style.notfoundMain}>
            <h1>Sorry, the page you were looking for was not found.</h1>
            <Link  to="/"> 
            <button className={style.notfoundLink} >Return Home</button> 
            </Link>
        </div>
    </>
  )
}

export default Notfound