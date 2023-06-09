import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Home from './pages/Home/home';
import Stay from './pages/Stay/Stay';
import Dining from './pages/Dining/Dining';
import Active from './pages/Activities/Activities';
import Story from './pages/Story/Story';
import ConservationCommunity from './pages/ConservationCommunity/ConservationCommunity';
import TravelTips from './pages/TravelTips/TravelTips';
import Location from './pages/Location/Location';
import Rates from './pages/Rates/Rates';
import Contact from './pages/Contact/Contact';
import Offers from './pages/Offers/Offers';
import OffersSingle from './pages/Offers-Single/OffersSingle';
import OurStories from './pages/Our Stories/OurStories';
import Gallery from './pages/Gallery/Gallery';
import Legal from './pages/Legal/Legal';





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
                    <Route path="/conservationcommunity" element={<ConservationCommunity />} />
                    <Route path="/traveltips" element={<TravelTips />} />
                    <Route path="/location" element={<Location />} />
                    <Route path="/rates" element={<Rates />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/offers" element={<Offers />} />
                    <Route path="/offerssingle" element={<OffersSingle />} />
                    <Route path="/ourstories" element={<OurStories />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/legal" element={<Legal />} />
               </Routes>
           </Router>
        </>
    );
}

export default Routing;