import { Grid, Typography } from '@mui/material';
import React from 'react'

const Footer = () => {
    return (
        <div>
            <Grid container>
                <Grid item xs={12}>
                    <Typography variant='body1' 
                    style={{margin:"1.5rem 0  0 0", textAlign:"center", borderTop:"1px solid #ccc", backgroundColor:"#fff"}}>Copyright@2024</Typography>
                </Grid>
            </Grid>
        </div>
    )
}

export default Footer;