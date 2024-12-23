import React from 'react'
import Heropage from '../Components/Heropage'
import User_driction from '../Components/User_driction'
import About from '../Components/About'
import Service from '../Components/Service'
const Homepage = () => {
  return (
    <div>
       <Heropage/>
       <Service/>
       <User_driction/>
       <About/>
    </div>
  )
}

export default Homepage
