//8
//9
"use strict";
//you can't just create global varible
//you need explicitely define it
//in case of function this will become undefined
// message = 10;
// message = "fake Hello";

// window.message = "fake Hello";
// console.log(message);

const object = {
    message: 'Hello , World!',
    logMessage: function() {
        console.log(this);
        //what is looged?
    }
};
let fn = object.logMessage;
fn();

// // this -> define
// // window
// // let fn = object.logMessage;
// setTimeout(fn , 1000);
// setTimeout(function outer(){
//     //comsole.log("hello");
//     object.logMessage();
// } ,1000);