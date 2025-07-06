import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
 // Assuming you have a CSS file for styling

const Header = () => {
  return (
    <div className = "header">
      <div className="logo">Food Cart</div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Cart">Cart</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>

        
      </ul>
    </div>
  );
};

export default Header;
