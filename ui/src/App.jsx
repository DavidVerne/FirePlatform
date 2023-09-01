import './App.scss';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Dashboard from './components/dashboard/Dashboard';
import Login from './components/login/Login';

const App = () => {
  return (
    <BrowserRouter>
    <Header/>
      <div className="App">
        <Routes>
          <Route exact path='/' element={<Dashboard/>}></Route>
          <Route exact path='/login' element={<Login/>}></Route>
        </Routes>
      </div>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
