import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Home from './pages/Home/home';
import Stay from './pages/Stay/Stay';
import Dining from './pages/Dining/Dining';





function Routing() {    
    return ( 
        <>              
           <Router>
               <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/stay" element={<Stay />} />
                    <Route path="/dining" element={<Dining />} />
               </Routes>
           </Router>
        </>
    );
}

export default Routing;