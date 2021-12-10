import React from 'react'
import {connect} from 'react-redux'
import actions from '../../store/actions'
import './Product.css'
function Product({product,addToCart}) {

    const addToCartHandler = ()=>{
      addToCart({...product})
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

const mapDispatch = (dispatch)=>{
  return {
    addToCart:(payload)=>{
      dispatch({
        type:actions.ADD_TO_CART,
        payload
      })
    }
  }
}

export default connect(null,mapDispatch)(Product)
