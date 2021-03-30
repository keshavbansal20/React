let fs = require("fs");
console.log("Before");
function MyFilereadPromise(filePath){
    return new Promise(function(resolve , reject){
        fs.readFile(filePath , function cb(err , data){
            if(err){
                reject(err);
            }else{
                resolve(data);
            }
        })
    })
}
let frp = MyFilereadPromise("f1.txt");
console.log(frp);
frp.
then(function(data){
    console.log("data  -->" , data+"");
})
frp.catch(function(err){
    console.log(err);
})


console.log("after");

///callback wala code
let f1Readp = fs.promises.readFile("f1.txt");
console.log(f1Readp);

f1Readp.then(function(data){
    console.log(data+"");
});
f1Readp.catch(function(err){
    console.log(err);
})