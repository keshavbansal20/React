import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
// import Ball from './Component/Ball';
// import Bat from './Component/Bat';
// import store from "./store";
import { Provider } from "react-redux";
import InputContainer from './Todo/TodoComponent/inputContainer';
import TaskList from './Todo/TodoComponent/taskList';
import TodoStore from './Todo/app/store'
// import User from './Component/User';
// import Ecommerce from './cartPOC/Ecommerce';
// import EcommerceStore from './cartPOC/app/store';
function App() {
  return (
    //4
   
    //Provider provides the store to the component in App like ball and bat
    // <div className="App">
    // <Ball></Ball>
    // <Bat></Bat>
    // <User></User>
    // </div>
    <Provider store={TodoStore}> 
      <InputContainer></InputContainer>
      <TaskList></TaskList>
    </Provider>
    // <Provider store={EcommerceStore}>
    //   <Ecommerce></Ecommerce>
    // </Provider>
  );
}

export default App;
