let user = {
    name: 'John',
    age: 18,
    'likes pink': true,
}

console.log(user.age);
console.log(user['likes pink']);

delete(user.age);
console.log(user);

//property existence test
console.log('name' in user) //true
console.log('address' in user) //false

for (let key in user){
    console.log(key)
    console.log(user[key])
}

//adding a key:value pair
user.address = "nowhere";
console.log(user)

//(task-1) Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.
function isEmpty(obj){
    for (let prop in obj){
        return false;
    } return true;
}

console.log(isEmpty(user));

//(task-2) Write the code to sum all salaries and store in the variable sum. Should be 390 in the example below.
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

let sum = 0;
function getSum(obj){
    for (let val in obj){
        //console.log(obj[val])
        sum += obj[val]
    } return sum;
}

console.log(getSum(salaries));

//(task-3) Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.
function multiplyNumeric(obj){
    for (let prop in obj){
        if (typeof obj[prop] == 'number'){
            obj[prop] *= 2;
        }
    }
} 

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

multiplyNumeric(menu);
console.log(menu)