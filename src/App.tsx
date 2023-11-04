import React from 'react';

import './App.css';
import {createTheme, ThemeProvider} from "@mui/material";
import {Route, Routes, useLocation} from "react-router-dom";
import Home from "./Home/Home";
import Projects from "./Projects/Projects";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Navigation from "./Navigation/Navigation"
import Footer from "./Footer/Footer";
import FOSS from "./FOSS/FOSS";
import data from "./data.json";


function App() {
    const location = useLocation();
    const darkTheme = createTheme({
        palette: {
            mode: 'light',
            background:{
                default: "#e0e0e0",
                paper: '#e0e0e0'
            },
            primary: {
                main: '#0066CC',
            },
            secondary: {
                main: '#708323',
            },
            divider: '#0066CC',
            text: {
                primary: '#333333',
            },
        },
    });
    return (
        <>
            <ThemeProvider theme={darkTheme}>
                {location.pathname === "/" || location.pathname === "/home" ? <></> : <Navigation location={location}/>}
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/projects" element={<Projects data={data}/>}/>
                    <Route path="/resume" element={<About data={data}/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="/foss" element={<FOSS/>}/>
                </Routes>
                {location.pathname === "/" || location.pathname === "/contact" ? <></> :
                    <Footer/>}
            </ThemeProvider>
        </>
    );
}

export default App;
