let simpleNamePrinting = function(name) {
    console.log(`Hey it's working ${name}`)
    console.log(`hey ${name}`)
}

simpleNamePrinting('Pranesh')


let myAdder = function(num1, num2) {
    return num1 + num2
}

console.log('myAdder result is: ' + myAdder(3, 5))

let myMultiplier = function(num1, num2) {
    return num1 * num2
}

console.log('myMultiplier result is: ' + myMultiplier(3, 5))

let virtusaScore = function(name = 'noName ', marks = 0) {
    return 'Hello! ' + name + ' you have scored ' + marks + ' in Virtusa Assesment Exam.'
}

console.log(virtusaScore('Pranesh', 50))