// let user = {
//     name: "John",
//     age: 30
// };
  
// user.sayHi = function() {
//     console.log("Hello!");
// };
  
let user = {
    sayHi: function(){
        console.log("Hola");
    }
}

let user2 = {
    sayHi(){
        console.log("Hola")
    }
}

user.sayHi();
user2.sayHi();



