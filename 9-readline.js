const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

console.log(' write something and I will repeat')

rl.on('line', line => {
    if (line === "end") rl.close()
    console.log(line.toUpperCase())
})
