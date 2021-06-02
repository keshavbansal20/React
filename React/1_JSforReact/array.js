//destucturing in objects
let arr = ["Keshav", "Bansal", "21", "Indian"];
// let name = arr[0];
// let lastname = arr[1];
//skip the elem
// let [name, lastname, , Nationality] = arr;

//default value

let [name ="Steve" ,lastname = "rogers" , age , ,mentor = "Web"] = [];

 console.log(name);
 console.log(lastname);
 console.log(mentor);
 console.log(age);
  
 //objects
 //destructurug in objects

 let person = { name: "Steve" ,
  country: "Los Angeles" , job:"Avenger"};

  console.log("name" , person.name);
  console.log("country" , person.country);
  console.log("job" , person.job);
  console.log("abc"  ,person.abc);  //undefined
 
  //get a key's value into a variable 
  //let { name , country , abc }  = person;
  //default value can also be given 

//   let {name , country , abc ="Hello" , job} = person;

//   console.log(name+" " , country +" "+ abc);