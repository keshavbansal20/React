let initialState = {
    quantity: 20 
    // dummyState:"Hello"
}
function batReducer(state = initialState , action){
    console.log(state);
    switch(action.type){
        case "buy_bat":
            console.log(action.payload);
            let newObject = {
                // ...state , 
                quantity: state.quantity - action.payload ,
            }

            return newObject;
        
        default:
            return state;
    }
}

export default batReducer;