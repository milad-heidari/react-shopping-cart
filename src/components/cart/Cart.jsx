import React from 'react'
import {connect} from 'react-redux'
import actions from '../../store/actions'
import CartItem from '../cartItem/CartItem'
import './Cart.css'
function Cart({cartItems,closeCart}) {

    const renderCartItems = cartItems.map(item => <CartItem key={item.id} data={{...item}} />)

    const totalPrice = cartItems.reduce((total,current)=>{
      return total + (current.quantity * current.price)
    },0)

    const closeCartHandler=()=>{
      closeCart()
    }
    return (
            <div className="cart">
      <div className="cart-content">
        {/* header  */}
        <div className="cart-header">
          <h4>your shopping cart</h4>
          <span onClick={closeCartHandler}>
            <i className="fas fa-times"></i>
          </span>
        </div>

        {/* body  */}
        <div className="cart-body">
            {cartItems.length >= 1 ? renderCartItems:<h4>your cart empty</h4>}
        </div>

        {/* footer */}
        <div className="cart-footer">
          <h4>total price: {`$${totalPrice.toFixed(2)}`}</h4>
        </div>
      </div>
    </div>
    )
}

const mapState = (state)=>{
    return {
        cartItems:state.cartItems,
        prices:state.prices
    }
}

const mapDispatch = (dispatch)=>{
    return {
      closeCart:()=>{
        dispatch({
          type:actions.CHANGE_CART_VISIBILITY
        })
      }
    }
}

export default connect(mapState,mapDispatch)(Cart)
