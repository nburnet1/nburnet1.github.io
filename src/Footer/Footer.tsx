import React from "react";
import {AppBar, List, Toolbar} from "@mui/material";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";


function Footer() {


    return (
        <>
            <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0, height: '64px'}}>
                <Toolbar className={"footer-toolbar"}>
                    <List className={"footer-list"}>
                        <ListItem>
                            <img alt={"Triangle assets"} className={"footer-svg-flipped"} src={"../polygon-scatter-haikei.svg"}/>
                        </ListItem>
                        <ListItem>
                            <ListItemButton className={"contact-button"} href={"https://github.com/nburnet1"} sx={{ textAlign: 'center' }}>
                                <GitHubIcon className={"contact-logo"}/> <div>Github</div>
                            </ListItemButton>
                        </ListItem>
                        <ListItem>
                            <ListItemButton className={"contact-button"} href={"https://www.linkedin.com/in/nburnet1/"} sx={{ textAlign: 'center' }}>
                                <LinkedInIcon className={"contact-logo"}/> <div>Linkedin</div>
                            </ListItemButton>
                        </ListItem>
                        <ListItem>
                            <ListItemButton className={"contact-button"} href={"mailto:fmy6wb5b@duck.com"} sx={{ textAlign: 'center' }}>
                                <EmailIcon className={"contact-logo"}/> <div>Email</div>
                            </ListItemButton>
                        </ListItem>
                        <ListItem>
                            <img alt={"Triangle assets"} className={"footer-svg"} src={"../polygon-scatter-haikei.svg"}/>
                        </ListItem>
                    </List>
                </Toolbar>
            </AppBar>
        </>
    );
}
export default Footer;