import React, { useState } from "react";
import logo from "../assets/svg/logo.svg";
import burgerMenu from "../assets/svg/burger-menu.svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="header-container">
      <header className="header">
        <div className="logo">
          <img src={logo} alt="logo" width='100%' />
        </div>

        <div className="header-text-container d-none d-md-flex">
          <p>Join as Design Expert</p>
          <p>Partner with LAND Interiors</p>
        </div>

        <button className="burger-menu d-md-none" onClick={toggleMenu}>
          <img src={burgerMenu} alt="burger-menu" width='100%' />
        </button>
      </header>

      <nav className={`nav-container ${isMenuOpen ? "open" : ""}`}>
        <ul>
          <li>About</li>
          <li>Projects</li>
          <li>Studio</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
