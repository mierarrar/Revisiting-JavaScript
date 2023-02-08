function sayHi(){
    alert('EEYOOOO')
    alert(window.innerWidth)
}

// global function
// window.sayHi()

document.body.style.background = 'red';

setTimeout(
    () => document.body.style.background = 'green',
    1000
)