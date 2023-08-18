// src/Navbar.js
import React from 'react';
import './Navbar.css'; // Create this CSS file for styling

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item dropdown">
          <a href="/services">Display</a>
          <div className="dropdown-content">
            <a href="/service1">Grouping</a>
            <a href="/service2">Ordering</a>
          </div>
        </li>
        
      </ul>
    </nav>
  );
}

export default Navbar;
