import React from 'react'
import {connect} from 'react-redux'
import Cart from './components/cart/Cart';
import Nav from "./components/nav/Nav";
import Products from './components/products/Products';

function App({cartVisibility,cartItems}) {
  
  return (
    <div className='App'>
      <Nav cartLength={cartItems.length}/>
      {/* canditional rendering for Cart component */}
      {cartVisibility ? <Cart/>:null}
      <Products/>
    </div>
  );
}

const mapState = (state)=>{
  return {
    cartVisibility:state.cartVisibility,
    cartItems:state.cartItems
  }
}

export default connect(mapState)(App);
