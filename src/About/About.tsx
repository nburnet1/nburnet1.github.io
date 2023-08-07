import React from "react";
import Paper from "@mui/material/Paper";
import {Box, Card, CardContent, CardHeader, Container, List, Typography} from "@mui/material";
import Divider from "@mui/material/Divider";
import Grid from '@mui/material/Grid';

type AboutProps = {
    data: any;
}
const listSkills = (title: string, data: any) => {
    const skills = data.skills[title];

    return (
        <>
            <Grid item xs={12} md={8}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <center><h2>{title}</h2></center>
                    </Grid>
                    {skills.slice(0, Math.ceil(skills.length / 2)).map((datum: string, index: number) => (
                        <Grid item xs={3} md={3} key={index}>
                            <center>{datum}</center>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
            <Grid item xs={12} md={8}>
                <Grid container spacing={2}>
                    {skills.slice(Math.ceil(skills.length / 2)).map((datum: string, index: number) => (
                        <Grid item xs={3} md={3} key={index}>
                            <center>{datum}</center>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </>
    );
}

const listWork = (data: any) => {
    return (
        <Grid item>
            <Typography variant="subtitle1">
                <Grid container justifyContent={"space-between"}>
                    <Grid item><b>{data.Company}</b></Grid>
                    <Grid item>{data.Dates}</Grid>
                </Grid>
                <Grid>
                    <Grid item><i>{data.Position}</i></Grid>
                </Grid>
            </Typography>
            <ul>
                {data.Responsibilities.map((responsibility: string, idx: number) => (
                    <li key={idx}>{responsibility}</li>
                ))}
            </ul>
        </Grid>
    )

}

const listEducation = (data: any) => {
    return (
        <>
            <Typography>
                <Grid container justifyContent={"space-between"}>
                    <Grid item>
                        <b>{data.University}</b>
                    </Grid>
                    <Grid item>
                        {data.Graduation}
                    </Grid>
                </Grid>
                <Grid item>
                    <i>{data.Degree}</i>
                </Grid>

                <Grid item>
                    {data.GPA === "" ? "" : <><b>GPA: {data.GPA}</b></>}
                </Grid>
            </Typography>
            <br/>
        </>
    );

}

function About(props: AboutProps) {
    return (
        <>
            <Container maxWidth="md" sx={{padding: '32px 10px 96px 10px'}}>
                <Grid sx={{paddingBottom: '10px'}}>
                    <Typography variant="h5">Education</Typography>
                    <Divider/>

                    {props.data['Education'].map((data: any, index: number) => (
                        <>{listEducation(data)}</>
                    ))}
                </Grid>

                <Grid sx={{paddingBottom: '10px'}}>
                    <Typography variant="h5">
                        Work Experience
                    </Typography>
                    <Divider/>

                    {props.data['Work Experience'].map((experience: any, index: number) => (
                        <>
                            {listWork(experience)}
                        </>
                    ))}
                </Grid>
                <br/>
                <Divider/>
                <Box sx={{flexGrow: 1}}>
                    <Grid container spacing={2} justifyContent={"space-evenly"}>
                        {listSkills("Languages", props.data)}
                        {listSkills("Frameworks/Libraries", props.data)}
                        {listSkills("Data/Tools", props.data)}
                    </Grid>
                </Box>
            </Container>
        </>
    );
}

export default About;