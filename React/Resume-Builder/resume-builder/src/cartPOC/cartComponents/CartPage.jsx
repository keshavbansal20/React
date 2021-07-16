import React from 'react'
import { connect } from "react-redux";
import SubTotal from './SubTotal';
function CartPage(props) {
    const { basket , removefrombasket }  = props;
    console.log(basket)
    return(
        <div className="cartpage" style={{display:"flex"}}>
            <div classname="cartpage-left">
            {
                basket?.length === 0 ? (
                    <div>
                        <h2>Your shopping Basket is empty</h2>
                        <p>
                            You have no items in your basket. 
                        </p>
                    </div>
                ) : (
                    basket.map((baskobj)=>{
                        return(
                            
                            <div className="cart-layout" style={{display:"flex" , backgroundcolor:"lightgray" ,width:"65vw" , "margin-bottom":"10px" }}>
                            <img src={baskobj.image} style={{height:"60vh"}}></img>
                            <div className="product_info" >
                            <div className="title">{baskobj.title}</div>
                            <input type="number" placeholder={baskobj.quantity} style={{width:"5vw"}}></input>
                            <p style={{width:"35vw"}}>{baskobj.description}</p>
                            <button onClick={()=>{
                                removefrombasket(baskobj)
                            }} className="delete">Delete</button>
                            <h5>{baskobj.price}</h5>
            
                            </div>
                            </div>
                            
                        )
                    })
                )
            }
            </div>
            {basket.length >0 && (

                <div className="cartpage-right" >
                     <SubTotal />
        
                </div>
            )

            }
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
         removefrombasket : (baskobj) => {
            // dispatch the item into the data layer
            dispatch({
                type: "remove_from_basket",
                id:baskobj.id,
              });
        }
}
}
const HigherOrderComponent = connect(mapStateToProps,mapDispatchedtoProps)(CartPage);
export default HigherOrderComponent;

