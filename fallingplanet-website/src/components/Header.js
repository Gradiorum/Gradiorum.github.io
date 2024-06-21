import React from 'react';
import logo from '../assets/logo.png'; // Ensure your logo is placed in src/assets

const Header = () => (
  <header style={{ background: 'rgba(0, 0, 0, 0.8)', textAlign: 'center', padding: '10px' }}>
    <img src={logo} alt="FallingPlanet Logo" style={{ height: '100px' }} />
    {/* Navigation links can be added here */}
  </header>
);

export default Header;
