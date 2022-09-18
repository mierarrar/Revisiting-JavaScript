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

for(let todo of todos) {
    console.log(todo.task)
}