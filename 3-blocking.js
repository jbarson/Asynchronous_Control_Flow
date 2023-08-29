const stop = 1_000_000

console.time('blocking')
console.log('start')

for (let i = 0 ; i < stop; i++) {
    console.log('boom')
}


console.log('end')

console.timeEnd('blocking')
