import React from 'react'
import style from '../assets/Styles/pages.module.css'


const Sign = () => {
    return (
        <>
           <div className={style.siMain}>
            <h1>Sign in to your account</h1>
            <div className={style.siInput}>
                <input type="text" placeholder='Email address'/>
                <input type="text" placeholder='Password'/>
            </div>
            <button>Sign in</button>
            <p>Don’t have an account? <span>Create one now</span></p>
            </div> 
        </>
    )
}

export default Sign