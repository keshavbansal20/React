import { products , coupons} from "../data/data";

let initialState ={
    products ,
    coupons,
    basket:[],
    // amount:getBasket
    }

export const getBasketTotal = (basket) => 
  basket?.reduce((amount, item) => item.price + amount, 0);
 
  function ShoppingReducer(state=initialState , action){
    let amt = getBasketTotal(state.basket)
    console.log(amt)
    // console.log(state.basket)
    console.log(action)

    
    // console.log(basketArr)
    switch(action.type){
        case "ADD_TO_BASKET":
            // console.log(action.payload);
            return {
                ...state,
                basket: [...state.basket, action.item],
              };
        case "remove_from_basket":
            console.log("remove")
            let newBasket = [...state.basket];
            const index = state.basket.findIndex(
                (basketItem)=> basketItem.id === action.id
            );
            if(index>=0){
                newBasket.splice(index ,1);
            } 
            return{
                ...state ,
                basket:newBasket ,
            }
        case "apply_coupon":
            console.log(action.value);
            let coupcodes =  Object.keys(state.coupons)
        //    let res  = coupcodes.filter((obj)=>{
        //         return  state.coupons[obj].name===action.value? "sorry wrong coupons":"applied";
        //     })
        let res = false;
            for(let i = 0 ; i < coupcodes.length;i++){
                if( coupcodes[i]==action.value)
                {
                   res  = true;
                    break;

                }else{
                    res  = false;               
                }
                
            }
             console.log(res);  
             let dis = 0; 
             let ramt = 0;
            if(res){
                
                 dis = state.coupons[action.value].discount;
                 
                ramt = amt - (amt*(dis/100))
            }else{
                amt=undefined
            }
             console.log(dis);
            // let ramt = amt-10;

            console.log(ramt)
            return{
                ...state,
                amt,
                ramt
            }     
        default:
            return state;
    }
}

export default ShoppingReducer;