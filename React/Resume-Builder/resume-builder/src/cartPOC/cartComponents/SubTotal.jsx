import React ,{useState}from 'react'
import CurrencyFormat from "react-currency-format";
import { connect } from "react-redux";
import Subtotal from "./SubTotal.css"
import { getBasketTotal } from '../cartRedux/ShoppingReducer';
function SubTotal(props) {
    const { basket , applycoupons  , ramt ,amt} = props
    const [val , setvalue] = useState("");
    console.log(ramt,amt)
    let oamt = getBasketTotal(basket)
    console.log(val)
    return (
        <div className="subtotal">
            {/*price*/}
            <CurrencyFormat
                renderText={(value) => (
                    <  >  
                            <h4 style={{marginLeft:"2rem"}}>Cart Summary</h4>
                        <p>
                            Subtotal ({basket.length} items):<strong>{value}</strong> 
                        </p>
                        <div className="coupons" style={{display:"flex" , padding:""}}>
                            <input type="text" onChange={(e)=>{
                                setvalue(e.target.value)
                            }}></input>
                            <button onClick={()=>{applycoupons(val)}}>Apply</button>
                        </div>
                    </>
                )}
                decimalScale={2}
                value={amt===undefined?oamt:ramt}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"\u20B9"}
            />
             <button>PROCEED TO BUY</button>

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
        applycoupons : (val) => {
            // dispatch the item into the data layer
            dispatch({
                type: "apply_coupon",
             
                  value:val
                  
                
              });
        }
}
}

const HigherOrderComponent = connect(mapStateToProps,mapDispatchedtoProps)(SubTotal);
export default HigherOrderComponent;
