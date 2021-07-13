
import { createStore} from "redux";
import rootReducer from "./redux/rootReducer";
//1
let initialState = {
    balls:5
}
//2
console.log("Hello");
const store = createStore(rootReducer);
// const store = createStore(BallReducer);
export default store;