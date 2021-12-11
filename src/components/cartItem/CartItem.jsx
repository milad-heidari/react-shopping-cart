import React from 'react'
import {connect} from 'react-redux'
import actions from '../../store/actions'
import './CartItem.css'
function CartItem({data,changeQuantity,cartItems}) {

    const productFromState=cartItems.filter(item=>{
      if (item.id === data.id) {
        return item
      }
    })

    const decrementBtnHandler = ()=>{
      if (productFromState[0].quantity > 1) {
        changeQuantity({
          id:data.id,
          title:data.title,
          image:data.image,
          price:data.price,
          quantity:data.quantity - 1
        })

      }
    }

    const incrementBtnHandler =()=>{
      changeQuantity({
        id:data.id,
        title:data.title,
        image:data.image,
        price:data.price,
        quantity:data.quantity + 1
      })
    }

    return (
        <div className="cart-item">
        <img src={data.image} alt="pic" />
        <p className="cart-item__title">{data.title}</p>
        <p>{`$${data.price}`}</p>
        <div className="cart-item__qty">
          <i onClick={decrementBtnHandler} className="fas fa-minus"></i>
          <p>{productFromState[0].quantity}</p>
          <i onClick={incrementBtnHandler} className="fa fa-plus"></i>
        </div>
          <p>{`$${data.price * productFromState[0].quantity}`}</p>
      </div>
    )
}

const mapState= (state)=>{
  return {
    cartItems:state.cartItems
}
  }

const mapDispatch = (dispatch)=>{
  return {
    changeQuantity:(payload)=>{
      dispatch({
        type:actions.CHANGE_QUANTITY,
        payload
      })
    }
  }
}

export default connect(mapState,mapDispatch)(CartItem)
