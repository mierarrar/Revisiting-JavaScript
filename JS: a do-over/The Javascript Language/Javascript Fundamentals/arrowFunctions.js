
// adding a and b
let sum = (a,b) => a+b;
console.log(sum(5,6));

// alert hello
let sayHello = () => alert("Hello!")
sayHello();

//check age
let age = prompt('How old are you?', 18)
let welcome = (age > 18) ?
    () => alert('Hello!') :
    () => alert('Oh Nu');

welcome();

//(Task - 1) Replace Function Expressions with arrow functions in the code below:

// function ask(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();
// }

// ask(
//   "Do you agree?",
//   function() { alert("You agreed."); },
//   function() { alert("You canceled the execution."); }
// ); 

function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
  }

ask(
    "Do you agree?",
    () => alert("You agreed."),
    () => alert("You canceled the execution.")
);
