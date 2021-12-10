import React, { useEffect } from "react";
import './Products.css'
import { connect } from "react-redux";
import actions from "../../store/actions";
import Product from '../product/Product'
function Products({ getProducts,products }) {
  useEffect(() => {
      getProducts({ url: "products" });
    }, []);

  const renderProductList = products.map(product => <Product key={product.id} product={{...product}} />)

  return (
    <section className="products-section">
      <div className="products-section__title">
        <h2>productss</h2>
      </div>
      <div className="products-container">
        {renderProductList}
      </div>
    </section>
  );
}

const mapState = (state)=>{
    return {
        products:state.products
    }
}

const mapDispatch = (dispatch) => {
  return {
    getProducts: (payload) => {
      dispatch({
        type: actions.GET_PRODUCTS,
        payload,
      });
    },
  };
};

export default connect(mapState, mapDispatch)(Products);
