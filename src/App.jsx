import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './Components/Header';
import About from './Components/About';
import Service from './Components/Service';
import Footer from './Components/Footer';
import User_driction from './Components/User_driction';
import Signin from './Forms/Singin';
import Login from './Forms/Login';
import Vehile_regiter from './Forms/Vehile_regiter';
import Homepage from './pages/Homepage';
import VehicleRegister from './Forms/Vehile_regiter';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        
        {/* Define the routes */}
        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/service" element={<Service />} />
          <Route path="/system" element={<User_driction/>} />
          <Route path="/about" element={<About/>} />

           {/* Forms Routing */}
           <Route path="/signup" element={<Signin/>} />
           <Route path="/login" element={<Login/>} />

             {/* Forms Routing */}
        </Routes>
        {/* <VehicleRegister/> */}

        <Footer />
      </div>
    </Router>
  );
};

export default App;
