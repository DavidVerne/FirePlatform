import './App.scss';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Header from './components/header/Header';
// import Footer from './components/footer/Footer';
import Dashboard from './components/dashboard/Dashboard';
import Signin from './components/signin/Signin';
import Signup from './components/signup/Signup';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#000000'
    }
  }
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        {/* <Header/> */}
          <div className="App">
            <Routes>
              <Route exact path='/' element={<Dashboard />}></Route>
              <Route exact path='/signin' element={<Signin />}></Route>
              <Route exact path='/signup' element={<Signup />}></Route>
            </Routes>
          </div>
          {/* <Footer/> */}
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
