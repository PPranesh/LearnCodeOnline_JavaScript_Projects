// creating the months of a year in list
const months = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

// forEach loop takes every element in the months list
months.forEach(function(month, index = 0) {
    console.log(`Months of the Year starts with ${index+1} as ${month}`)
})

// a new line
console.log()

// simple todo list for practice
const ToDos = ['Code Everyday', 'VCS Everyday', 'Learn things New', 'Try to do practice it']

// todo list compelted function
let completedToDos = function() {
    console.log('Hey Yaar!!! :)')
    console.log('ToDos Completed!!.')
}

// simple heading :)
console.log('My ToDos')

// taking each elements from ToDoList list
ToDos.forEach(function(todo, index) {
    console.log(` ${index+1} is: ${todo}.`)
})

// a new line
console.log()

// calling the ToDoList function
completedToDos()