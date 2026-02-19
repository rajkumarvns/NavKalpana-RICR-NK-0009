// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Story from './components/Story';
import Footer from './components/Footer'

import { Routes, Route } from 'react-router-dom';

import D_home from './pages/dfly/D_home';
import Home from './pages/Home/Home'

// import NotFound from './pages/NotFound'

function App() {
  return ( 
  <>
    {/* <div>
      <Navbar />
      <Homepage />
      <Story> </Story>
      <Footer />
    </div> */}

    <div>
      

    <Routes>
    <Route path='/' element={<Home/>} />
    {/* <Route path="/" element={<Homepage />} /> */}
    <Route path="/dragonfly" element={<D_home />} />
    {/* <Route path="*" element={<NotFound />} /> */}


    </Routes>


    
    </div>

    </>
  );
}

export default App;
