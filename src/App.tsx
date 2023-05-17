// import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import { Container } from 'react-bootstrap';
import Home from './page/Home';
import About from './page/About';
import Store from './page/Store';
import Navbar from './components/Navbar';
import { ShoppingCartProvider } from './context/useShopingCart';

function App() {
  return (
    <ShoppingCartProvider>
    <Container>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/store' element={<Store/>} />
      </Routes>
    </Container>
    </ShoppingCartProvider>
  )
}

export default App;
