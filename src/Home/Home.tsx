import React from "react";
import {Paper} from "@mui/material";
import ChangeHistoryIcon from "@mui/icons-material/ChangeHistory";
import HomeNav from "../HomeNav/HomeNav";
import WordCycler from "../WordCycler/WordCycler";


function Home() {
    const wordList = ["FOSS", "Networking", "Problem Solving", "Innovating", "Designing", "Creating"];
    const interval = 1750;


    return (
        <>
            <Paper elevation={0}>
                <ChangeHistoryIcon color={"primary"} id={"triangle"}/>
                <center>
                    <h1 id={"name"}>
                        Noah<br/>Burnette
                    </h1>
                </center>
                <HomeNav/>
                <h3 className={"home-description"}>
                     I love  <WordCycler words={wordList} interval={interval}/>

                </h3>
            </Paper>
        </>
    );
}

export default Home;