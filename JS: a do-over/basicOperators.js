console.log( 6 - '2' ); // 4, converts '2' to a number

let x = 1;
console.log(+x); // unary + does the same thing as Number(...), but is shorter.
console.log(+undefined); // Nan

let a = "1",
    b = "2";

console.log( Number(a) + Number(b)); // 3
console.log(+a + +b); // 3

// = is also an operator.
