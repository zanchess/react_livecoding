import React from "react";
import './header.scss';
import Nav from "../Nav/Nav";

const Header = () => {
  return(
    <header className="header">
      <h1 className="header__logo">
        LOGO
      </h1>
      <Nav/>
    </header>
  );
}

export default Header;
