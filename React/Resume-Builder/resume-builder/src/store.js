
import { createStore} from "redux";
import rootReducer from "./redux/rootReducer";
//1

//2
console.log("Hello");

//this is the store where sotring is created from with the help of one common reducer
const store = createStore(rootReducer);
// const store = createStore(BallReducer);
export default store;