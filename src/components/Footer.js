import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
