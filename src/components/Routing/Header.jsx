import React from 'react'
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <>
      <div>Food Cart</div>
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/About"}>About</Link>
        </li>
        <li>
          <Link to={"/Contact"}>Contact</Link>
        </li>
      </ul>
    </>
  );
}

export default Header