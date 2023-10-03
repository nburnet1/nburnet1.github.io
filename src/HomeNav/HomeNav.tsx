import React from 'react';

import MenuItem from '@mui/material/MenuItem';
import {Link as Linkmui, MenuList} from "@mui/material";
import {Link} from "react-router-dom";


function HomeNav() {
    return (
        <>
            <MenuList id={"home-menu"}>
                <MenuItem>
                    <Linkmui component={Link} to="/about" color="inherit" underline="hover">
                        About
                    </Linkmui>
                </MenuItem>
                <MenuItem>
                    <Linkmui component={Link} to="/projects" color="inherit" underline="hover">
                        Projects
                    </Linkmui>
                </MenuItem>
                <MenuItem>
                    <Linkmui component={Link} to="/resume" color="inherit" underline="hover">
                        Resume
                    </Linkmui>
                </MenuItem>
                <MenuItem>
                    <Linkmui component={Link} to="/contact" color="inherit" underline="hover">
                        Contact
                    </Linkmui>
                </MenuItem>
            </MenuList>
        </>

    );
}

export default HomeNav;