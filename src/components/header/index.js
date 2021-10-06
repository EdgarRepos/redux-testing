import React from 'react';
import Logo from '../../assets/graphics/logo.png';
import "./styles.scss";

function Header(props) {
  return (
    <header data-test="header-component">
      <div className="wrap">
        <div className="logo">
          <img alt="gitHub logo" src={Logo} data-test="logoIMG"/>
        </div>
      </div>
    </header>
  )
}

export default Header;