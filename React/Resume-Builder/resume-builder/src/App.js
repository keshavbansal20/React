import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Ball from './Component/Ball';
import Bat from './Component/Bat';
import store from "./store";
import { Provider } from "react-redux";
import InputContainer from './Component/InputContainer';
import TaskList from "./Component/TaskList";
function App() {
  return (
    //4
   
    //Provider provides the store to the component in App like ball and bat
    // <Ball></Ball>
    // <Bat></Bat>
    <Provider store={store}> 
      <div className="App">
        <InputContainer></InputContainer>
        <TaskList></TaskList>
      </div>
    </Provider>
  );
}

export default App;
