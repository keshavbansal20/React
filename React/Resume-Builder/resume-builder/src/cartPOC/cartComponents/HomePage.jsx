import React from 'react'
import { connect } from "react-redux";
function HomePage(props) {
    let { products } = props;
    return (
        <div style={{ display: "flex" }}>
            {products.map(product => {
                return (
                    <div key={product.id}>
                        <img src={product.image} style={{ height: "20vw" }} />
                        <h2>{product.title}</h2>
                        <div>{product.description}</div>
                        <h3>{product.price}</h3>
                        <button onClick={()=>{
                            props.setCartCount();
                            
                        }} >Add to Cart</button>
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
        setCartCount:() => {
            dispatch({
                type:"add_to_cart" 
                //data send to reducer function
                
            })
        }
    }
}

const HigherOrderComponent = connect(mapStateToProps,mapDispatchedtoProps)(HomePage);
export default HigherOrderComponent;
