import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Home from './pages/Home/home';
import Stay from './pages/Stay/Stay';
import Dining from './pages/Dining/Dining';
import Active from './pages/Activities/Activities';
import Story from './pages/Story/Story';





function Routing() {    
    return ( 
        <>              
           <Router>
               <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/stay" element={<Stay />} />
                    <Route path="/dining" element={<Dining />} />
                    <Route path="/activities" element={<Active />} />
                    <Route path="/story" element={<Story />} />
               </Routes>
           </Router>
        </>
    );
}

export default Routing;