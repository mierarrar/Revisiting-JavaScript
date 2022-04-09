// (1) Use the for loop to output even numbers from 2 to 10.

// for loop
for (let i = 1; i <= 10; i++){
    if (i%2==0){console.log(i)}
};

// (2) do while loop
let i = 1;
do {
    if (i%2==0){console.log(i)};
    i++
} while (i<=10);


// (3) Rewrite the code changing the for loop to while without altering its behavior (the output should stay same).

// for (let i = 0; i < 3; i++) {
//     alert( `number ${i}!` );
//   }

let n = 0;      
while (n<3){
    console.log(`number ${n}!`);
    n++;
}


// (4) Write a loop which prompts for a number greater than 100. If the visitor enters another number – ask them to input again.

let num;
do {
    // num = prompt("Enter a number greater than 100", 0);
} while (num <= 100 && num);


// (5) Write the code which outputs prime numbers in the interval from 2 to n.

// let primeNum = prompt("Enter a number", 0);
let primeNum = 10;

outer: 
for (let x = 2; x <= primeNum; x++){
    for (y = 2; y < x; y++){
        if (x%y == 0){
            continue outer;
        }
    } console.log(x)
}