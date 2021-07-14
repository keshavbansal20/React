import {  createStore} from "redux";
import todoReducer from "../TodoRedux/todoReducer";
//1

//2
console.log("Hello");

//this is the store where sotring is created from with the help of one common reducer
// const store = createStore(rootReducer , applyMiddleware(thunk));
// const store = createStore(homeReducer);
// const store = createStore(BallReducer);
const store = createStore(todoReducer);

export default store;