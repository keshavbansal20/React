function fn(num1 , num2){
    if((num1%2==0)&&(num1/num2)){
        return num1/num2;
    }else{
        console.error("incompatible type");
    }
};

let val = fn(4 ,8);
if(val!=undefined){
    console.log(val);
}