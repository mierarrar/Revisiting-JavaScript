let todos =  [

    {
        id : 1,
        task : "Take out the trash",
        isComplete : true
    },
    {
        id : 2,
        task : "Do laundry",
        isComplete : true
    },
    {
        id : 3,
        task : "Dentist appt",
        isComplete : false
    }

];

// for(let todo of todos) {
//     console.log(todo.task)
// }

// todos.forEach(function(todo){
//     console.log(todo.isComplete)
// })

// let todoTask = todos.map(function(todo){
//     return todo.task;
// })
// console.log(todoTask)

let todoTask = todos.filter(function(todo){
    return todo.isComplete === true;
}).map(function(todo){
    return todo.task;
});

console.log(todoTask)