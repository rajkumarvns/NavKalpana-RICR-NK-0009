// src/components/Navbar.jsx
import React from 'react';
import '../styles/Navbar.css';
import { ShoppingCart, Search, User } from 'lucide-react';


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo"><a href="/"><img src="./HOME_logo_bo_full.svg" alt="" /></a></div>
      <ul className="nav-links">
        <li><a href="#products">Products</a></li>
        <li><a href="/dragonfly">Dragonfly</a></li>
        <li><a href="#StarNest">StarNest</a></li>
        <li><a href="#products">Industries</a></li>
        <li><a href="#other">Other</a></li>
        <li><a href="#dragonfly">Insiders</a></li>
        <li><a href="#neuralinks">Support</a></li>
      </ul>
      <div className="nav-icons nav-links">
        <Search size={24} strokeWidth={2.5} className="nav-icon" />
        <User size={24} strokeWidth={2.5} className="nav-icon" />
        <ShoppingCart size={24} strokeWidth={2.5} className="nav-icon" />
      </div>
    </nav>
  );
};

export default Navbar;
