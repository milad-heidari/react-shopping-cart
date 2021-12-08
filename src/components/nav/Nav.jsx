import React from "react";
import './Nav.css'
function Nav() {
  return (
    <nav className="nav">
      <div className="nav__container">
        <h3 className="nav__container-title">shoping</h3>
        <span className="nav__container-cart-icon">
          <i className="fas fa-cart-plus"></i>
          <span className="nav__container-cart-badge">0</span>
        </span>
      </div>
    </nav>
  );
}

export default Nav;
