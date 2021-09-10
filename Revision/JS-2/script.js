






function fn(){
    let nArr = [];
    for(var i = 0;i<3;i++){
        narr.push(function() {
            console.log(i);
        })
    }
    return nArr;
}

//bind solution
function fn(){
    let nArr = [];
    for(var i = 0;i<3;i++){
        var nerFn= (function(varName) {
            console.log("varName",varName);
            console.log(this);
        })
    }
}