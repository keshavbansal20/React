let fs = require("fs");




console.log("Before");
async function fn(){
    console.log(" 10 Hello ");
    let frp = fs.promises.readFile("f1.txt");
    let data = await frp;
    console.log("12" + data);
    return 10;
}

let fnkap = fn();
console.log(fnkap);
fnkap.then(function(data){
    console.log("19 data" + data);  
})
console.log("AFter")