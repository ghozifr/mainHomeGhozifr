// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share mininum)
const names = require('./4-name')
const sayHi = require('./5-utils')


sayHi('Robbani')
sayHi(names.name1)
sayHi(names.name2)
sayHi(names.allnames.name1)