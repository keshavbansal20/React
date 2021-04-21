let fs = require("fs");


async function fn(){
    console.log("hello");
    let frp = fs.promises.readFile("f1.txt");
    return frp;
}

let fkap = fn();
console.log(fkap);
fkap.then(function(data){
    console.log("data"+data);
})