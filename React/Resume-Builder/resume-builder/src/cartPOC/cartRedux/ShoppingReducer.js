import { products} from "../data/data";

let initialState ={
    products ,
    cardCount:1
}

function ShoppingReducer(state=initialState , action){
    switch(action.type){
        case "add_to_cart":
            // console.log(action.payload);
            let newObject = {
                ...state , 
                cardCount: state.cardCount+1 ,
            }

            return newObject;
        
        default:
            return state;
    }
}

export default ShoppingReducer;