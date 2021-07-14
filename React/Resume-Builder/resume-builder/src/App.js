import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
// import Ball from './Component/Ball';
// import Bat from './Component/Bat';
// import store from "./store";
import { Provider } from "react-redux";
// import InputContainer from './Component/InputContainer';
// import TaskList from "./Component/TaskList";
// import User from './Component/User';
import Ecommerce from './cartPOC/Ecommerce';
import EcommerceStore from './cartPOC/app/store';
function App() {
  return (
    //4
   
    //Provider provides the store to the component in App like ball and bat
    // <InputContainer></InputContainer>
    // <TaskList></TaskList>
    // <Provider store={store}> 
    // <div className="App">
    // <Ball></Ball>
    // <Bat></Bat>
    // <User></User>
    //   </div>
    // </Provider>
    <Provider store={EcommerceStore}>
      <Ecommerce></Ecommerce>
    </Provider>
  );
}

export default App;
