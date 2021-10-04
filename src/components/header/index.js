import React from 'react';
import Logo from '../../assets/graphics/logo.png';
import "./styles.scss";

function Header(props) {
  return (
    <header>
      <div className="wrap">
        <div className="logo">
          <img src={Logo} alt="gitHub logo"/>
        </div>
      </div>
    </header>
  )
}

export default Header;