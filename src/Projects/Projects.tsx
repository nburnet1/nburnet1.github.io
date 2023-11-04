import React from "react";
import Grid from "@mui/material/Grid";
import {Link as MUILink, Typography} from "@mui/material";
import Divider from "@mui/material/Divider";
import {Link} from "react-router-dom";


interface ProjectsProps {
    data: any;
}

function Projects(props: ProjectsProps) {
    const listProjects = (data: any, active: boolean) => {
        return (
            <>
                {
                    active === data.Active ?
                        <Grid item>
                            <Typography variant="subtitle1">
                                <Grid container justifyContent={"space-between"}>
                                    <Grid item><b>
                                        {data.Name.link === "" ? data.Name.title :
                                            <MUILink color={"inherit"} component={Link}
                                                     to={data.Name.link}>{data.Name.title}</MUILink>}
                                    </b></Grid>
                                    <Grid item>{data.Date}</Grid>
                                </Grid>
                                <Grid>
                                    <Grid item><i>{data.Description}</i></Grid>
                                </Grid>
                            </Typography>
                            <ul>
                                {data.Features.map((feature: string, idx: number) => (
                                    <li key={idx}>{feature}</li>
                                ))}
                            </ul>
                        </Grid>
                        : <></>
                }
            </>
        )
    }
    return (
        <>

                <Grid sx={{paddingBottom: '10px'}}>
                    <Typography variant="h5">Projects<Divider sx={{margin: "5px 0px"}}/></Typography>
                    {props.data['Projects'].map((data: any) => (
                        <>{listProjects(data, true)}</>
                    ))}
                    {props.data['Projects'].map((data: any) => (
                        <>{listProjects(data, false)}</>
                    ))}


                </Grid>

        </>
    );
}

export default Projects;