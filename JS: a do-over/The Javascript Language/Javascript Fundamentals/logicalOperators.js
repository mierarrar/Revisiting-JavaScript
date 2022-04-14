// result = Boolean(0) && !!0;
// console.log(result)

let userValue = prompt("Who's there?", "");

if (userValue == " " || userValue == null){
    alert("Cancelled")
} else if (userValue == "Admin"){
    let password = prompt("Password?")
    if (password == " " || password == null){
        alert("Cancelled");
    } else if (password == "TheMaster"){
        alert("Welcome!")
    } else {
        alert("I don't know you")
    }
} else {
    alert("I don't know you")
}