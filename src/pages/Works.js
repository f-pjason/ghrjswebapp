import React from 'react'
import Sinemotoh from "../assets/sinemotoh.png"
import Pinasarap from "../assets/pinasarap.jpg"
import Portf from "../assets/portf.png"
import "../styles/Works.css"

function Works() {
  return (
    <div className='container'>
      <h1> Works Previous Years</h1>
      <div className='work-list'>
        <div className='work'>
          <img src= {Sinemotoh}/>
          <div className='layer'>
            <h3>Sinemotoh</h3>
            <p>Movie Recommendation and Reviewing.</p>
          </div>
        </div>
        <div className='work'>
          <img src ={Pinasarap} />
          <div className='layer'>
            <h3> Pinasarap</h3>
            <p>Food recipes mobile app.</p>
          </div>
        </div>
        <div className='work'>
          <img src ={Portf} />
          <div className='layer'>
            <h3> Portfolio </h3>
            <p> Portfolio Website</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Works