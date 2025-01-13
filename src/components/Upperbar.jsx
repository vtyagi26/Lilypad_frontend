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
        <button className="button" >View Profile</button>
        <button className="button2" >🔡</button>
        <button className="button logout" >🔐</button>
      </div>
    </div>
  );
};

export default UpperBar;
