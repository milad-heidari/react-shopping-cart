import React from "react";
import {connect} from 'react-redux'
import actions from "../../store/actions";
import './Nav.css'
function Nav({showCart}) {

  const showCartHandler = ()=>{
    showCart()
  }

  return (
    <nav className="nav">
      <div className="nav__container">
        <h3 className="nav__container-title">shoping</h3>
        <span onClick={showCartHandler} className="nav__container-cart-icon">
          <i className="fas fa-cart-plus"></i>
          <span className="nav__container-cart-badge">0</span>
        </span>
      </div>
    </nav>
  );
}

const mapDispatch = (dispatch)=>{
  return {
    showCart:()=>{
      dispatch({
        type:actions.CHANGE_CART_VISIBILITY,
      })
    }
  }
}

export default connect(null,mapDispatch)(Nav);
