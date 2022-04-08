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