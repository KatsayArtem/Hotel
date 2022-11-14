import React from 'react'
import './backgroundVideo.css'


const backgroundVideo = () => {
  return (
    <div >
    <video preload="none" className='backgroundVideo' loop='loop' poster={require('../imges/backgroundVideo/hostel_poster.png')} autoPlay muted >
        <source src={require('../imges/backgroundVideo/Hostel.mp4')} type='video/mp4'/>
    </video>
    </div>
  )
}

export default backgroundVideo