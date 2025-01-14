import React from 'react';
import './UpperBar.css';

const UpperBar = () => {
  return (
    <div className="upperBar">
      <div className="logoContainer">
        <img 
          src="./src/assets/meow.png" 
          alt="Logo"
          className="logo"
        />
      </div>

      <div className="optionsContainer">
        <button className="button" title="View Profile">View Profile</button>
        <button className="button2" title="Language">🔡</button>
        <button className="button logout" title="Logout">🔐</button>
      </div>
    </div>
  );
};

export default UpperBar;
