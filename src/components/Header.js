import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Header.css'; // Make sure this path is correct

const Header = () => {
  return (
    <header className="header">
      <nav className="header-nav">
        <NavLink to="/" exact className="nav-link" activeClassName="nav-link-active">Home</NavLink>
        <NavLink to="/about" className="nav-link" activeClassName="nav-link-active">About</NavLink>
        <NavLink to="/resume" className="nav-link" activeClassName="nav-link-active">Resume</NavLink>
        <NavLink to="/portfolio" className="nav-link" activeClassName="nav-link-active">Portfolio</NavLink>       
      </nav>
      <div className="header-social">
        {/* Social links can go here */}
        <button className="btn-buy">Buy Now</button>
      </div>
    </header>
  );
};

export default Header;
