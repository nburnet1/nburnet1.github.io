import React from 'react';

import './App.css';
import {Box, createTheme, Paper, ThemeProvider, Typography} from "@mui/material";
import {Route, Routes, useLocation} from "react-router-dom";
import Home from "./Home/Home";
import Projects from "./Projects/Projects";
import About from "./About/About";
import Resume from "./Resume/Resume";
import Contact from "./Contact/Contact";
import Navigation from "./Navigation/Navigation"
import Footer from "./Footer/Footer";
import data from "./data.json";


function App() {
    const location = useLocation();
    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
            background:{
                default: "#070707",
                paper: '#070707'
            //    #06070E
            //    #201A23
            //    #0F0A0A
            //    #001021
            },
            primary: {
                main: '#4a696b',
            },
            secondary: {
                main: '#708323',
            },
            divider: '#4a696b',
            text: {
                primary: '#e0dac9',
            },
        },
    });
    return (
        <>
            <ThemeProvider theme={darkTheme}>
                {location.pathname == "/" || location.pathname == "/home" ? <></> : <Navigation location={location}/>}
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/about" element={<About data={data}/>}/>
                    <Route path="/projects" element={<Projects data={data}/>}/>
                    <Route path="/resume" element={<Resume/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                </Routes>
                {location.pathname == "/" || location.pathname == "/home" || location.pathname == "/contact" ? <></> :
                    <Footer/>}
            </ThemeProvider>
        </>
    );
}

export default App;
