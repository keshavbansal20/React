import Ball from "../../Component/Ball";

let initialState = {
    balls: 5
}

function BallReducer(state = initialState , action){
    console.log(state);
     // update 
    // nothing
    // n  types of changes 
    // state change logic
    switch(action.type){
       case "buy_ball":
           //store update
           return{
               balls:state.balls-1,
           }
        case "sell_ball":
            return{
                balls:state.balls + 1,
            };
        default:
            return state;
    }
        // console.log("in store",action);
}
export default BallReducer;