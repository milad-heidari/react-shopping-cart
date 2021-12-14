import React from 'react'
import {connect} from 'react-redux'
import actions from '../../store/actions'
import './CartItem.css'
function CartItem({data,changeQuantity,removeItemFromCart}) {

    const decrementBtnHandler = ()=>{
      if (data.quantity > 1) {
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

    const trashBtnHandler = ()=>{
      removeItemFromCart({
        id:data.id
      })
    }

    return (
        <div className="cart-item">
        <img src={data.image} alt="pic" />
        <p className="cart-item__title">{data.title}</p>
        <p>{`$${data.price}`}</p>
        <div className="cart-item__qty">
          <i onClick={decrementBtnHandler} className="fas fa-minus"></i>
          <p>{data.quantity}</p>
          <i onClick={incrementBtnHandler} className="fa fa-plus"></i>
        </div>
          <p>{`$${data.price * data.quantity}`}</p>
          <i onClick={trashBtnHandler} className="fas fa-trash"></i>
      </div>
    )
}


const mapDispatch = (dispatch)=>{
  return {
    changeQuantity:(payload)=>{
      dispatch({
        type:actions.CHANGE_QUANTITY,
        payload
      })
    },
    removeItemFromCart:(payload)=>{
      dispatch({
        type:actions.REMOVE_CART_ITEM,
        payload
      })
    }
  }
}

export default connect(null,mapDispatch)(CartItem)
