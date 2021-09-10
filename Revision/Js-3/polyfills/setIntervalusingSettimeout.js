//polyfill
function mySetInterval(fn , timeout){

    let clearObj = {
        shallIRun:true
    }
    function larger(){
        if(clearObj.shallIRun==false){
            return;
        }
        fn();
        
        setTimeout(larger , timeout);
    }


    if(clearObj.shallIRun==true){
        setTimeout(larger , timeout);
    }
    return clearObj;
}


// clearInterval
function myClearInterval(clearMe){
    clearMe.shallIRun = false;
}



function fn(){
    console.log("I will be called after 2 secs");
}

let clearMe = mySetInterval(fn , 2000);

setTimeout(function(){
    myClearInterval(clearMe);
    console.log("cleared")
} , 11000);