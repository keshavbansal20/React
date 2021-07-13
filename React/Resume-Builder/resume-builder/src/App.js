import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Ball from './Component/Ball';
import Bat from './Component/Bat';
import store from "./store";
import { Provider } from "react-redux";
function App() {
  return (
    //4
   
   
    <Provider store={store}>
      <div className="App">
        <Ball></Ball>
        <Bat></Bat>
      </div>
    </Provider>
  );
}

export default App;
