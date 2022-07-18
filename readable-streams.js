
const readline = require('readline')
const fs = require('fs')

const myInterface = readline.createInterface({
    input: fs.createReadStream('color.txt')
})

myInterface.on('line', (fileLine) => {
    console.log(`The line read: ${fileLine}`)
})


// let setting = {
//     input: fs.createReadStream('shoppingList.txt')
//   }
  
//   const myInterface = readline.createInterface(setting)
  
//   const printData = (data) => {
//     console.log(`Item: ${data}`)
//   }
  
//   myInterface.on('line', printData)