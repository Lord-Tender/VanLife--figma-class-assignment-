import React from 'react'
import style from "../assets/Styles/vancard.module.css"



const Vancard = (prop) => {
    return (
        <>
            <div className={style.cardDiv}>
                <img src={prop.info.img} alt="" />
                <div className={style.cardContent}>
                    <h1 className={style.vanName}>{prop.info.name}</h1>
                    <div style={{display: "block"}} className={style.price}>
                        <p>{prop.info.price}</p>
                        <p>/day</p>
                    </div>
                </div>
                <button style={{backgroundColor: `${prop.info.buttonColor}`}}>{prop.info.buttonText}</button>
            </div>
        </>
    )
}

export default Vancard