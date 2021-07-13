import React from 'react'
//connect pull state from store
import { connect } from "react-redux";


function Ball(props) {
    console.log(props);
    // state -> props (redux)
    // prop -> function 
    // const [balls, setBalls] = useState(15);
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



// 5 -> provide state variables from store
const mapStateToProps = store => {
    console.log("in map state to prop" , store);
        // state variables change  
    return store.Ball;
}


// dispatch action provide to reducer
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


// higher order function
export default connect(mapStateToProps , mapDispatchedtoProps)(Ball);
// export default Ball
