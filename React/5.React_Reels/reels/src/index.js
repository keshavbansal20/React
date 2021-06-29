import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import ContextParent from "./ContextParent";
import Material from "./Material";
ReactDOM.render(
  <React.StrictMode>
  <App></App>,
  
  </React.StrictMode>,
  document.getElementById('root')
  );
  // <Material ></Material>

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
