import React from "react";
import {Paper} from "@mui/material";
import ChangeHistoryIcon from "@mui/icons-material/ChangeHistory";
import HomeNav from "../HomeNav/HomeNav";
import {Link} from 'react-router-dom';
import {Link as Linkmui} from '@mui/material';

function Home() {
    return (
        <>
            <Paper className={"home-paper"} elevation={0}>
                <ChangeHistoryIcon color={"primary"} id={"triangle"}/>
                <center>
                    <h1 id={"name"}>
                        Noah<br/>Burnette
                    </h1>
                </center>
                <HomeNav/>

                    <Paper className={"home-para"} elevation={1}>
                        <p>
                            Hey there! Thanks for visiting my website. I am an upcoming Computer Science graduate who loves
                            problem solving and coding. I am currently seeking a full-time position in software development.
                            Please see my&nbsp;
                            <Linkmui component={Link} to="/resume" color="inherit">resume</Linkmui>
                            &nbsp;for more information!
                        </p>
                    </Paper>






            </Paper>
        </>
    );
}

export default Home;