import { createStore, applyMiddleware } from "redux";
import rootreducer from "./reducers/rootReducer";
let store = createStore(rootreducer);
export default store;
