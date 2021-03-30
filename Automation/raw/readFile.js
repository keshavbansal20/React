let fs = require("fs");

console.log("before");
let frp = fs.promises.readFile("f1.txt");

frp.then(function(content){
    console.log("content->" + content);
})

frp.catch(function(err){
    console.log(err);
})
console.log("after");
