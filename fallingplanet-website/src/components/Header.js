// src/components/Header.js
import React from 'react';
import logo from '../assets/logo.png'; // Update this path to your actual logo

const Header = () => (
  <header className="App-header">
    <img src={logo} alt="FallingPlanet Logo" style={{ height: '100px' }} />
    <nav>
      <ul style={{ listStyle: 'none', textAlign: 'center' }}>
        <li style={{ display: 'inline', marginRight: '20px' }}><a href="/">Home</a></li>
        <li style={{ display: 'inline', marginRight: '20px' }}><a href="/blog">Blog</a></li>
        <li style={{ display: 'inline' }}><a href="/videos">Videos</a></li>
        {/* Add other navigation links as needed */}
      </ul>
    </nav>
  </header>
);

export default Header;
