import React, { useState } from 'react';
import { useDarkMode } from '../hooks/useDarkMode';


const Navbar = () => {
  const [isDarkModeOn, setDarkMode] = useDarkMode(false);

  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={setDarkMode}
          className={isDarkModeOn? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
