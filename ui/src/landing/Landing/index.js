// import { useEffect, useState } from 'react';

// material-ui
import { Container } from '@mui/material';

import Header from './Header';
import Home from './Home';
import Footer from './Footer';
// ==============================|| DEFAULT DASHBOARD ||============================== //

const Landing = () => {
  // const [isLoading, setLoading] = useState(true);
  // useEffect(() => {
  //   setLoading(false);
  // }, []);

  return (
    <Container>
      <Header />
      <Home />
      <Footer />
    </Container>
  );
};

export default Landing;
