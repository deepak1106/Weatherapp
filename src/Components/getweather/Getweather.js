import React from 'react'
import './Getweather.css'

export default function Getweather() {
  return (
    <div className='GetWeather'>
        <div className='TopBar'>
           <h4 className='Heading'>React Weather App</h4>
           <img src='weatherlogo.png' className='imageGetWeather'></img>
        </div>
        <div className='GridContainer'>
          <div className='one'>
            <span>31 C</span>
          </div>
          <div className='two'>
            <span>Pressure</span>
          </div>

          <div className='three'>Wind</div>
          <div className='four'>One</div>

          <div className='five'>One</div>

        </div>
    </div>
  )
}
