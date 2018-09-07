// a ToDo that holds the number of works on that day
let myToDos = {
    'toDoAdd': 0,
    'todoDone': 0,
    'todoNotDone': 0,

    // to add total ToDo's
    toDoAddIn: function(count = 0) {
        this.toDoAdd = this.toDoAdd + count
    },

    // to calculate ToDo's Done
    todoDoneIn: function(count = 0) {
        this.todoDone = this.todoDone + count
    },

    // to display the over all ToDo not done
    todoSummary: function() {
        this.todoNotDone = this.toDoAdd - this.todoDone
        return `You have ${this.todoNotDone} ToDo's Left!`
    }

}

// displays the ToDo list
// console.log(myToDos)

// add ToDo's
myToDos.toDoAddIn(5)

// to mark the Done
myToDos.todoDoneIn(3)

// to increase the add ToDo's
myToDos.toDoAddIn(5)

// a new line
console.log()

//displays the remains ToDo's
console.log(myToDos.todoSummary())

// a new line
console.log()

// displays the ToDo list
// console.log(myToDos)