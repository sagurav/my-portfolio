import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Header.css'; 

const Header = () => {
  return (
    <header className="header">
      <nav className="header-nav">
        <NavLink to="/" exact className="nav-link" activeClassName="nav-link-active">Home</NavLink>
        <NavLink to="/about" className="nav-link" activeClassName="nav-link-active">About</NavLink>
        <NavLink to="/resume" className="nav-link" activeClassName="nav-link-active">Resume</NavLink>
        <NavLink to="/portfolio" className="nav-link" activeClassName="nav-link-active">Portfolio</NavLink>       
      </nav>
      
    </header>
  );
};

export default Header;
