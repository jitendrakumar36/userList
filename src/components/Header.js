import  "../App.css";
import { Container, Grid, Stack, Box } from '@mui/material'
import React from 'react'
import { Outlet, NavLink } from 'react-router-dom';
import WebLogo from '../assets/web-logo.png';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const Header = () => {
    return (
        <Box style={{ padding: "0" }}>
            <header style={{minHeight:"100vh"}}>
                <Box style={{backgroundColor:"#ffbfbf", marginBottom:"1rem"}}>
                    <Container>
                        <Grid container>
                            <Grid item xs={2} style={style.logoSty}>
                                <img src={WebLogo} style={{ width: "200px" }} />
                            </Grid>
                            <Grid item xs={8}>
                                <nav>
                                    <ul style={style.menuWrapper} className="menuCustom">
                                        <li><NavLink to="/" style={style.menuWrapperLinkHome}>Home</NavLink></li>
                                        <li><NavLink to="/about" style={style.menuWrapperLink}>About</NavLink></li>
                                        <li><NavLink to="/contact" style={style.menuWrapperLink}>Contact</NavLink></li>
                                    </ul>
                                </nav>
                            </Grid>
                            <Grid item xs={2} style={{display:"flex", justifyContent:"flex-end"}}>
                                <Stack direction="row" spacing={3} 
                                style={{justifyContent:"center", alignItems:"center"}}>                                
                                    <FacebookIcon color="primary" />
                                    <InstagramIcon color="primary" />                                    
                                </Stack>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
                <Outlet />
            </header>
        </Box>
    )
}

export default Header;
const style = {
    menuWrapper: {
        listStyle: "none",
        display: "flex"
    },
    menuWrapperLinkHome: {
        textDecoration: "none",
        padding: "0.2rem 0.4rem",        
        borderRadius: "5px",
        display: "flex",
        alignItems: "center",
        margin: "0 1rem 0 0"
    },

    menuWrapperLink: {
        textDecoration: "none",
        padding: "0.2rem 0.4rem",        
        borderRadius: "5px",
        display: "flex",
        alignItems: "center",
        margin: "0 1rem 0 0",
        cursor: "pointer",
        "&:hover": {
            backgroundColor: "#f6f6f6",
        }
    },
    logoSty: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
    }
}
