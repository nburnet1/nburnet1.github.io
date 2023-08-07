import React from "react";
import {Paper} from "@mui/material";
import ChangeHistoryIcon from "@mui/icons-material/ChangeHistory";
import HomeNav from "../HomeNav/HomeNav";
import WordCycler from "../WordCycler/WordCycler";


function Home() {
    const wordList = ["Problem Solver", "Collaborator", "Developer", "Innovator", "Designer", "Engineer", "Teammate", "Creator", "Thinker", "Leader"];
    const interval = 1250;


    return (
        <>
            <Paper elevation={0}>
                <ChangeHistoryIcon id={"triangle"}/>
                <center>
                    <h1 id={"name"}>
                        Noah<br/>Burnette
                    </h1>
                </center>
                <HomeNav/>
                <h3>
                    <WordCycler words={wordList} interval={interval}/>
                </h3>
            </Paper>
        </>
    );
}

export default Home;