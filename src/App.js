import React from 'react'
import {connect} from 'react-redux'
import Modal from './components/modal/Modal';
import Nav from "./components/nav/Nav";
import Products from './components/products/Products';

function App({cartVisibility}) {
  
  return (
    <div className='App'>
      <Nav/>
      {cartVisibility ? <Modal/>:null}
      <Products/>
    </div>
  );
}

const mapState = (state)=>{
  return {
    cartVisibility:state.cartVisibility
  }
}

export default connect(mapState)(App);
