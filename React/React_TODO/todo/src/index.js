import React from 'react';
import ReactDOM from 'react-dom'; // react dom 
// import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Todo2 from "./Component/Todo2";
import Test2 from "./Component/Test2";
//in class based component we used reactdom.render and pass the App component which has to be render first on website running

ReactDOM.render(  
    <App /> 
    // <Todo2></Todo2>,

    // <Test2></Test2>
    ,  document.getElementById('root') );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
