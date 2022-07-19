
const readline = require('readline')
const fs = require('fs')

const myInterface = readline.createInterface(
    {
        input: fs.createReadStream('color.txt')
    }
)

const fileStream = fs.createWriteStream('colorResult.txt')

let transformData = (line) => {
    fileStream.write(`line out: ${line}\n`)
}

myInterface.on('line', transformData)