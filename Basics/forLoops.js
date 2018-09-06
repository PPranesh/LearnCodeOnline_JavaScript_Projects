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

// using for loop printing each element
for (let i = 1; i <= ToDos.length; i++) {
    console.log(i + '. ' + ToDos[i])
}

// a new line
console.log()

// calling the ToDoList function
completedToDos()