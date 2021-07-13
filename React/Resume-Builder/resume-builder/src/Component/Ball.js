import React from 'react'

import { connect } from "react-redux";


function Ball(props) {
    console.log(props);
    return (
        <div>
            <h1>Number of Balls {props.balls}</h1>
             <button 
             onClick={props.buyball}
            >Buy Balls
            </button>
            <button onClick={props.sellball}
            >Sell Balls</button>
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
        buyball: () => {
            //dispatch action
            return dispatch({type:"buy_ball"})
        },
        sellball:() => {
            return dispatch({type:"sell_ball"});
        }
    }
}
//high order function

export default connect(mapStateToProps , mapDispatchedtoProps)(Ball);
// export default Ball
