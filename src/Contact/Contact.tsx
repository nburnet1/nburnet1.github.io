import React from "react";
import {Card, CardActions, CardContent, CardMedia, Chip, Container, Paper, Typography} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import {ViewKanbanRounded} from "@mui/icons-material";

function Contact() {
    return (
        <>
            <Paper elevation={0} sx={{height: "calc(100vh - 64px)"}}>
            <Container maxWidth="md" sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <Card sx={{maxWidth: 400}} variant={"outlined"}>
                    <div className={"contact-img-div"}>
                        <CardMedia
                            className={"contact-img"}
                            sx={{height: 250, width: 250}}
                            image="../me.jpg"
                            title="me"
                        />
                    </div>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Noah Burnette
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Feel free to reach out to me on any of the following platforms!
                        </Typography>
                    </CardContent>
                    <CardActions>

                        <Chip
                            className={"contact-chip"}
                            size={"small"}
                            icon={<GitHubIcon/>}
                            label="Github"
                            component={"a"}
                            href="https://github.com/nburnet1"
                            variant={"outlined"}
                            clickable
                            sx={{color:"text.primary"}}
                        />
                        <Chip
                            className={"contact-chip"}
                            size={"small"}
                            icon={<LinkedInIcon/>}
                            label="LinkedIn"
                            component="a"
                            href="https://www.linkedin.com/in/nburnet1/"
                            variant={"outlined"}
                            clickable
                            sx={{color:"text.primary"}}
                        />
                        <Chip
                            className={"contact-chip"}
                            size={"small"}
                            icon={<EmailIcon/>}
                            label="Email"
                            component="a"
                            href="mailto:fmy6wb5b@duck.com"
                            variant={"outlined"}
                            clickable
                            sx={{color:"text.primary"}}
                        />
                        <Chip
                            className={"contact-chip"}
                            size={"small"}
                            icon={<ViewKanbanRounded/>}
                            label="Bitbucket"
                            component="a"
                            href={"https://bitbucket.org/nburnet1"}
                            variant={"outlined"}
                            clickable
                            sx={{color:"text.primary"}}
                        />
                    </CardActions>

                </Card>
            </Container>
            </Paper>
        </>
    );
}

export default Contact;