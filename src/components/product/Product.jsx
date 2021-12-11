import React from 'react'
import {connect} from 'react-redux'
import actions from '../../store/actions'
import './Product.css'
function Product({product,addToCart,changeQuantity,cartItems}) {

    const addToCartHandler = ()=>{
      const cartItemsID= cartItems.map(item => item.id)
      if (cartItemsID.includes(product.id)) {
       const existProduct =  cartItems.filter(item =>{
          if ( item.id === product.id) {
            return item
          }
        })
        changeQuantity({
          id:product.id,
          title:product.title,
          image:product.image,
          price:product.price,
          quantity:existProduct[0]['quantity'] + 1
        })
      }else {

        addToCart({
          id:product.id,
          title:product.title,
          image:product.image,
          price:product.price,
          quantity:1
        })
      }
    }

    return (
        <div className="product-container">
          <img src={product.image} alt="pic" />
          <p className="product-container__title">{product.title}</p>
          <p>{`$${product.price}`}</p>
          <button onClick={addToCartHandler} >add to cart</button>
        </div>
    )
}

const mapState = (state)=>{
  return {
    cartItems:state.cartItems
  }
}

const mapDispatch = (dispatch)=>{
  return {
    addToCart:(payload)=>{
      dispatch({
        type:actions.ADD_TO_CART,
        payload
      })
    },
    changeQuantity:(payload)=>{
      dispatch({
        type:actions.CHANGE_QUANTITY,
        payload
      })
    },
  }
}

export default connect(mapState,mapDispatch)(Product)
