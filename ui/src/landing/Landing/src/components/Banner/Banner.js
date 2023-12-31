import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import './Banner.css';
import { Button, Grid, Typography } from '@mui/material';
import { PRIMARY_COLOR, SECONDARY_COLOR, TERTIARY_COLOR } from './../../colors';
import bike from './../../assets/bike.svg'
import banner_arrow from './../../assets/banner_arrow.svg'

const Banner = () => {
    return (
        <Box sx={{ flexGrow: 1, mt: 15 }}>
            <Grid container
                direction="row"
                justifyContent="center"
                alignItems="center" spacing={1}>

                <Grid item sm={10} md={8} lg={7}>
                    <img style={{
                        width: '90%',
                    }} src={bike} alt="" />
                </Grid>


                <Grid item sm={10} md={5} lg={5} alignSelf="flex-start" sx={{
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                    <Typography sx={{
                        fontWeight: '600',
                        fontSize: '20px',
                        lineHeight: '32px',
                        textAlign: 'justify',
                        maxWidth: '472px',
                    }}>
                        A financial planning tool to track your financial behaviour and set you on course for early retirement.
                    </Typography>
                    <Typography sx={{
                        fontWeight: '600',
                        fontSize: '20px',
                        lineHeight: '32px',
                        textAlign: 'justify',
                        mt: 2
                    }}>
                        <span style={{ color: TERTIARY_COLOR }}>15000+</span> Customers
                    </Typography>
                    <Box>
                        <Button variant="contained" className='banner_button' href='/register/'
                        sx={{
                            width: '180px',
                            height: '48px',
                            padding: '8px 30px 8px 6px',
                            borderRadius: '8px',
                            backgroundColor: PRIMARY_COLOR,
                            color: '#1E1E1E',
                            '&:hover': {
                                backgroundColor: SECONDARY_COLOR,
                                paddingRight: '-5px',
                            },
                            transition: '0.2s linear',
                            transitionDelay: '0.3s',
                            mt: -7
                        }} disableElevation>
                            <Typography
                            sx={{
                                textTransform: 'capitalize',
                                fontSize: '20px',
                                lineHeight: '32px',
                                fontWeight: '700',
                                align: 'justify',
                            }}>
                                Register Now
                            </Typography>
                        </Button>
                        {/* <img style={{
                            marginLeft: '50px',
                        }} src={banner_arrow} alt="" /> */}
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Banner;






