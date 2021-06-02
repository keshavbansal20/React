name="Alien"
let obj = {
    name: "Steve" , 
    //function of an object are known as methods
    sayHi : function() {
        // console.log(obj.name ,"say's Hi");
        console.log(this.name , "say's Hi");
        function inner(){
            console.log(this.name , "say's Hi");
        }
        //obj.inner
        this.inner();
        //inner call --. window ko pint krega this
        inner();
    } , 
    inner : function(){
        console.log("fake");
    } 
}

//this keyword--> on the basic of call pr change hoga 
// call base pe hi define hota hai
// method call ->this phir point krta h current object
obj.sayHi();
let fn = obj.sayHi;
console.log(window);
//window    
// function call -> this phir window object refer krenge
//console.log(fn);
fn();