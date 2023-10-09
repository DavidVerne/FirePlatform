import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './Header';
import Home from './Home';
import Footer from './Footer';
// ==============================|| LANDING ||============================== //

const Landing = () => {

  return (
      <React.Fragment>
      <CssBaseline />
      {/* <Container> */}
        {/* <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }}> */}
        <Header />
        <Home />
        <Footer />
        {/* </Box> */}
      {/* </Container> */}
    </React.Fragment>
  );
};

export default Landing;
