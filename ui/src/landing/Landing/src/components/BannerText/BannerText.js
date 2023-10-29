import React from 'react';
import './BannerText.css';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';


const BannerText = () => {
    return (
        <Container sx={{
            mt: '70px',
        }}>
            <Typography variant="h2" sx={{
                fontWeight: '800',
                fontSize: '64px',
                lineHeight: '78.02px',
                textAlign: 'center'
            }}>
                FIRE <span className='food-text'>Platform</span>,<br />
                Make Financial Independence <span className='doorstep-text'>Automated</span>
            </Typography>
        </Container>
    );
};

export default BannerText;




