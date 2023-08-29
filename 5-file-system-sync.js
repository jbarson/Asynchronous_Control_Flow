const fs = require('fs')

console.time('syncRead')

const lorem = fs.readFileSync('./lorem.txt', {encoding: 'utf-8'})

console.log(lorem)

console.timeEnd('syncRead')