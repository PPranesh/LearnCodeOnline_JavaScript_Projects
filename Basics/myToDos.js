// a ToDo that holds the number of works on that day
let myToDos = {
    'toDoAdd': 0,
    'todoDone': 0,
    'todoNotDone': 0,
}

// to add total ToDo's
let toDoAdd = function(todo, count = 0) {
    todo.toDoAdd = todo.toDoAdd + count
}

// to calculate ToDo's Done
let todoDone = function(todo, count = 0) {
    todo.todoDone = todo.todoDone + count
}

// to display the over all ToDo not done
let todoSummary = function(todo) {
    todo.todoNotDone = todo.toDoAdd - todo.todoDone
    return `You have ${todo.todoNotDone} ToDo's Left!`
}

// displays the ToDo list
console.log(myToDos)

// add ToDo's
toDoAdd(myToDos, 5)

// to mark the Done
todoDone(myToDos, 3)

// to increase the add ToDo's
toDoAdd(myToDos, 5)

// a new line
console.log()

//displays the remains ToDo's
console.log(todoSummary(myToDos))

// a new line
console.log()

// displays the ToDo list
console.log(myToDos)