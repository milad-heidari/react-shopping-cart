import React from 'react'
import './Product.css'
function Product({title,image,price}) {
    return (
        <div className="product-container">
          <img src={image} alt="pic" />
          <p className="product-container__title">{title}</p>
          <p>{`$${price}`}</p>
          <button>add to cart</button>
        </div>
    )
}

export default Product
