import React from 'react'
import style from '../assets/Styles/pages.module.css'
import img from '../assets/Images/image 53.png'


const Home = () => {
  return (
    <>
        <div className={style.homeBody} style={{backgroundImage: `url('${img}')`}}>
            <div>
              <h1>You got the travel plans, we got the travel vans.</h1>
              <p>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
              <button>Find your van</button>
            </div>
        </div>
    </>
  )
}

export default Home