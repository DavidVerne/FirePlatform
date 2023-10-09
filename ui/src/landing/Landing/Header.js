import * as React from 'react';
import { Link } from 'react-router-dom';
import Logo from 'ui-component/Logo';

import {
  AppBar,
  Grid,
  Container,
  Button
} from '@mui/material';

const Header = () => {
  const handleOpenUserMenu = (event) => {
    console.log('click');
  };

  return (
    <AppBar position="static" sx={{ background: 'transparent', boxShadow: 'none' }} >
      <Container maxWidth="lg">
        {/* <Toolbar disableGutters> */}
        <Grid container spacing={2}>
        <Grid item xs={8}>
          <Link to="#">
              <Logo />
           </Link>
        </Grid>
        <Grid item xs={4}>
          {/* <Box sx={{ flexGrow: 0 }}> */}
              <Button onClick={handleOpenUserMenu} sx={{  }}>
                Sign Up
              </Button>
              <Button onClick={handleOpenUserMenu} sx={{  }}>
                Login
              </Button>
          {/* </Box> */}
          </Grid>
          </Grid>
        {/* </Toolbar> */}
      </Container>
    </AppBar>
  );
};

export default Header;