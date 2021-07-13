import { combineReducers } from "redux";
import BatReducer from "./bat/batReducer";
import BallReducer from "./ball/ballReducer";
console.log("root reducer");

//merged store
const rootReducer = combineReducers({
    Ball:BallReducer,
    Bat:BatReducer                   
});

export default rootReducer;