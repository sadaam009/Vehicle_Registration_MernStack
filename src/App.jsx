import React from 'react'
import Header from './Components/Header'
import Heropage from './Components/Heropage'
import Categories from './Components/Categories'
import User_driction from './Components/User_driction'
import About from './Components/About'
import Footer from './Components/Footer'
import Service from './Components/Service'
import Signin from './Forms/Singin'
import Login from './Forms/Login'
import Vehile_regiter from './Forms/Vehile_regiter'

const App = () => {
  return (
    <div>
      <Header/>
      <Heropage/>
      {/* <Categories/> 
{/*      
      <Service/>
       <User_driction/>
      <About/>
     
      <Footer/> */}
      {/* <Signin/> */}
      {/* <Login/> */}
      <Vehile_regiter/>
    </div>
  )
}

export default App
