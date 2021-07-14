import { applyMiddleware , createStore} from "redux";
import thunk from "redux-thunk";
import rootReducer from "./redux/rootReducer";
//1

//2
console.log("Hello");

//this is the store where sotring is created from with the help of one common reducer
const store = createStore(rootReducer , applyMiddleware(thunk));
// const store = createStore(homeReducer);
// const store = createStore(BallReducer);
export default store;