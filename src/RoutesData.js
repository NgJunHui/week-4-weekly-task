import React from "react";
import { BrowserRouter, Route, Routes, Router } from 'react-router-dom';
import Score from './Score';
import About from './About';
import Contact from "./Contact";
import Home from "./Home";
import { Navbar } from "./stories/Component";
import { WebFooter } from "./stories/Footer.stories";
import Players from "./Players";
import './App.css'
const RoutesData = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route exact path="/" activeClassName='active' element={<Home />}/>
                <Route path="/home" activeClassName='active' element={<Home />} />
                <Route path="/about" activeClassName='active' element={<About />} />
                <Route path="/score" activeClassName='active' element={<Score />} />
                <Route path="/players" activeClassName='active' element={<Players />} />
                <Route path="/contact" activeClassName='active' element={<Contact />} />
                
            </Routes>
            <WebFooter />
        </BrowserRouter>

    )

}

export default RoutesData;