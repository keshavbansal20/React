import { combineReducers } from "redux";
import BatReducer from "./bat/batReducer";
import BallReducer from "./ball/ballReducer";
import userReducer from "./user/userReducer";

import InputReducer from "./InputContainer/inputReducer";
console.log("root reducer");

//merged store
const rootReducer = combineReducers({
    Ball:BallReducer,
    Bat:BatReducer,   
    InputContainer:InputReducer        ,
    User:userReducer        
});

export default rootReducer;