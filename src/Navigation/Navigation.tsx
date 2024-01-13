import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {Link as Linkmui} from '@mui/material';
import {Link} from 'react-router-dom';


const drawerWidth = 240;
const navItems = ['Resume', 'Contact', 'FOSS'];

interface NavigationProps {
    location: any;
}

export default function Navigation(props: NavigationProps) {

    const [mobileOpen, setMobileOpen] = React.useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{textAlign: 'center'}}>
            <Typography variant="h6" sx={{my: 2}}>
                <Linkmui component={Link} to={"/"} color={"inherit"} underline={"hover"}>
                    <i>Noah Burnette</i>
                </Linkmui>
            </Typography>
            <Divider/>
            <List>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton
                            sx={{
                                textAlign: 'center',
                                backgroundColor: props.location.pathname === ("/" + item.toLowerCase()) ? "#0066CC" : "inherit",
                            }}>
                            <Linkmui component={Link} onClick={() => {
                            }} to={"/" + item.toLowerCase()}
                                     underline="hover"
                                     sx={{color:"#333333"}}
                            >
                                {item}
                            </Linkmui>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (

        <Box>
            <CssBaseline/>
            <AppBar position={"relative"}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{mr: 2, display: {sm: 'none'}}}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{flexGrow: 1, display: {xs: 'none', sm: 'block'}}}
                    >
                        <Linkmui component={Link} to={"/"} color={"inherit"} underline={"hover"}>
                            <i>Noah Burnette</i>
                        </Linkmui>

                    </Typography>
                    <Box sx={{display: {xs: 'none', sm: 'block'}}}>
                        {navItems.map((item) => (
                            <Button key={item}
                                    tabIndex={-1}
                                    sx={{
                                        color: '#F0F0F0',
                                        border: props.location.pathname === ("/" + item.toLowerCase()) ? "2px solid #333333" : "inherit",
                                    }}>
                                <Linkmui component={Link} to={"/" + item.toLowerCase()}
                                         color={"inherit"}
                                         underline="hover"
                                         sx={{color:"inherit"}}>

                                    {item}
                                </Linkmui>
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
            <Box component="nav">
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: {xs: 'block', sm: 'none'},
                        '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth},
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
        </Box>
    );
}