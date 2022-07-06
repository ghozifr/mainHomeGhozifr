
// Defining an anonymous arrow expression taht simply logs a string to the console
console.log(() => console.log('Shhh, Im anonymous'))

// Definng a named function by creating an arrow expression and saving it to a const variable helloWorld.
const helloWorld = (name) => {
    console.log(`Welcome ${name} to Codeacademy, this is an aroow expression.`)
}
// Calling the helloWorld() function
helloWorld('ghozganspars')


const addi = (a,b) => {
    return a + b
}

//console.log(addi(1,5))
//
//
// Asysnchtonous Concepts
// Promises
// Creating a new Promisse and saving it to the testLuck variable. Two arguents are being passed, one for when the promise resolves, and one for if the promise gets rejected.
const testLuck = new Promise((resolve, reject) => {
    if (Math.random() < 0.5) {
        resolve('Lucky winner!')
    } else {
        reject(new Error('Unlucky!'))
    }
})

testLuck.then(message => {
    console.log(message) // Log the resolved value of the Promise
}).catch(error => {
    console.error(error) // Log the rejected error of the Promise
})
//
//
// Async/Await IN MAC


//// Running a Program with Node

let yourName = 'Ghozi'
let verb = 'coding'

console.log(`My friend ${yourName} is good at ${verb}.`)