import React from 'react'
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import ProductPage from './ProductPage';
function HomePage(props) {

    let { products , addToBasket } = props;
    return (
        <div style={{ display: "flex"  }}>
            {products.map(product => {
                return (
                    <div key={product.id}>
                        <img src={product.image} style={{ height: "20vw" }} />
                        <h2>{product.title}</h2>
                        <div>{product.description}</div>
                        <h3>{product.price}</h3>
                        <button onClick={()=>{addToBasket(product)}}
                            
                         >Add to Cart</button>
                         <Link to="/Product">
                            View Product
                         </Link>
                         
                    </div>
                )

            })}
        </div>
    )
}
const mapStateToProps = store => {
    console.log("in map state to prop" , store);
    return store;
}

const mapDispatchedtoProps = dispatch => {
    //action
    //handler function
    return{
         addToBasket : (product) => {
            // dispatch the item into the data layer
            dispatch({
                type: "ADD_TO_BASKET",
                item: {
                  id: product.id,
                  title: product.title,
                  image: product.image,
                  description:product.description,
                  price: product.price,
                  quanity:1
                  
                },
              });
        }
}
}

const HigherOrderComponent = connect(mapStateToProps,mapDispatchedtoProps)(HomePage);
export default HigherOrderComponent;
