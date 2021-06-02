//class always works in strict Mode

class Person{
    constructor(name , age){
        this.name = name;
        this.age = age;
    }
    getDetails() {
        console.log(this);
        console.log(`His Name is ${this.name} and age is ${this.age}`);
    }
    setDetails(newName , newAge){
        this.name = newName;
        this.age = newAge;
    }
}

let Binod = new Person("Binod" , 23);
// Binod.getDetails();
// Binod.setDetails("Ravi" , 24);
// Binod.getDetails();

//window
//window--> agar async kaam hota h toh window ke sath jata h fn isliye error ati h kyuki class m strict mode used hota h
//button added
let buttose = document.getElementById('button')
buttose.addEventListener("click" ,Binod.getDetails  );
// setTimeout(Binod.getDetails , 1000);


// //is case m binod m (this == undefined)ke sath undefined jayega aur console pr error ayegi
// let fn = Binod.getDetails; 
// fn();