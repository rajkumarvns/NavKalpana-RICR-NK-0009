// src/components/Navbar.jsx
import React, { useState } from 'react';
// import '../../styles/dfly/D_Nav.css';
import { ShoppingCart, Search, User, ArrowBigLeft, Text } from 'lucide-react';
import '../../styles/Navbar.css';
import '../../styles/dfly/u_nav.css'
import MegaMenu from './MegaMenu';


const D_Nav = () => {

  const [hovered, setHovered] = useState(false);

  return (

    <>


    <div className='u_nav'>
    <div className="logo_home">
    <Text onClick={() => {
      setHovered(!hovered);
    }} size={40} strokeWidth={2.5} className="nav-icon" />
      <a href="/"><img src="./HOME_iron.svg" alt="" /></a></div>
        {/* <ArrowBigLeft size={24} strokeWidth={2.5} className="u_nav-icon" /> */}
    </div>
    

    <nav className="navbar bg-white">
      <div className="logo logo_dfly"><a href="/"><img src="./DRAGONFLY_logo.svg" alt="" /></a></div>
      <ul className="nav-links nav-links_dfly">
        <li><a href="#products">Camera Drones</a></li>
        <li><a href="/dragonfly">Handheld</a></li>
        <li><a href="#neuralinks">Power</a></li>
        <li><a href="#products">Specialized</a></li>
        <li><a href="#other">Explore</a></li>
        <li><a href="#dragonfly">Support</a></li>
        <li><a href="/D_BuyPage">Where to Buy</a></li>
      </ul>
      <div className="nav-icons nav-icons_dfly">
        <Search size={24} strokeWidth={2.5} className="nav-icon" />
        <User size={24} strokeWidth={2.5} className="nav-icon" />
        <ShoppingCart size={24} strokeWidth={2.5} className="nav-icon" />
      </div>
    </nav>

    {hovered && <MegaMenu />}

    </>
  );
};

export default D_Nav;
