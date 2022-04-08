// Using the if..else construct, write the code which asks: ‘What is the “official” name of JavaScript?’
// If the visitor enters “ECMAScript”, then output “Right!”, otherwise – output: “You don’t know? ECMAScript!”

result = prompt("What is the “official” name of JavaScript?", "");

if (result == "ECMAScript"){
    alert("Right!")
} else {
    alert("You don't know? “ECMAScript”!")
}

// ternary operator
( result == "ECMAScript") ? alert("Right!") : alert("You don't know? “ECMAScript”!");


// Using if..else, write the code which gets a number via prompt and then shows in alert:
// 1, if the value is greater than zero,
// -1, if less than zero,
// 0, if equals zero.

value = prompt("Enter Number", "");

(value > 0) ? alert(1) : 
    (value < 0) ? alert(-1) : alert(0);


// Rewrite this if using the conditional operator '?':

// let result;

// if (a + b < 4) {
//   result = 'Below';
// } else {
//   result = 'Over';
// }

let result = (a + b < 4) ? "Below" : "Over";