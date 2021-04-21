let fs = require("fs");
console.log("before");

function MyFilereadPromise(filePath){
    return new Promise(cb);
    function cb(resolve , reject){
        console.log("8" , "Hello")
        fs.readFile(filePath, function cb(err , data){
            if(err){
                reject(err);
            }else{
                resolve(data);
            }
        })
        console.log("15" , "Hello After");
    }
}

//let frp = fs.promises.readFile("f1.txt");
let frp = MyFilereadPromise("f1.txt");
console.log("21" ,frp);
setTimeout(() => {
    console.log("23",frp)
}, 1000);


console.log("after");
// console.log(1);
// frp.then(function(data){
//     console.log(4);
//     console.log("inside then" , data);
// })


// console.log(2);
// frp.catch(function(err){
//     console.log(err);
// });