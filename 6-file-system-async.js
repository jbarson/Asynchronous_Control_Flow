const fs = require('fs')

console.time('async')

const whatIsThis = fs.readFile('./lorem.txt', {encoding: 'utf-8'}, (error, data) => {
    if(error) return console.log(error)
    console.log(data.length)
})

console.timeEnd('async')
console.log('whatIsThis: ', whatIsThis)
