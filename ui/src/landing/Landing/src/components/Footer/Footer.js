import { Box, Container, Grid, IconButton, Typography } from '@mui/material'
import brand_img from './../../assets/brand.svg'
import facebookIcon from '../../assets/facebookIcon.svg'
import instaIcon from '../../assets/instaIcon.svg'
import twitIcon from '../../assets/twitIcon.svg'
import React from 'react'
import { Stack } from '@mui/system'
import { ACCENT_SECONDARY_LIGHT_COLOR } from './../../colors';
import Logo from 'ui-component/Logo';

const Footer = () => {
    return (
        <>
            <Container sx={{
                mt: 8,
                mb: 10
            }}>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                            <Typography 
                            sx={{
                                fontSize: '16px',
                                lineHeight: '32px',
                                fontWeight: '500'
                            }}>
                                &copy;   2023 Copyright
                            </Typography>
                    </Grid>
                    <Grid item xs={4}>
                            <Typography 
                            sx={{
                                fontSize: '16px',
                                lineHeight: '32px',
                                fontWeight: '500',
                                textDecoration: 'underline'
                            }}>
                                Privacy Policy
                            </Typography>
                    </Grid>
                    <Grid item xs={4}>
                            <Typography 
                            sx={{
                                fontSize: '16px',
                                lineHeight: '32px',
                                fontWeight: '500',
                                textDecoration: 'underline'
                            }}>
                                Terms & Conditions
                                </Typography>
                    </Grid>
                </Grid>
            </Container >
        </>
    )
}

export default Footer




