import React from "react";
import {AppBar, Box, IconButton, List, Toolbar, Typography} from "@mui/material";
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
                            <ListItemButton href={"https://github.com/nburnet1"} sx={{ textAlign: 'center' }}>
                                <GitHubIcon className={"contact-logo"}/> Github
                            </ListItemButton>
                        </ListItem>
                        <ListItem>
                            <ListItemButton href={"https://www.linkedin.com/in/nburnet1/"} sx={{ textAlign: 'center' }}>
                                <LinkedInIcon className={"contact-logo"}/> Linkedin
                            </ListItemButton>
                        </ListItem>
                        <ListItem>
                            <ListItemButton href={"mailto:fmy6wb5b@duck.com"} sx={{ textAlign: 'center' }}>
                                <EmailIcon className={"contact-logo"}/> Email
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Toolbar>
            </AppBar>
        </>
    );
}
export default Footer;