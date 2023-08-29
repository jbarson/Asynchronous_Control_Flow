const stop = 1_000_000

console.time('blocking')
console.log('start')

setTimeout(() => console.log('Hello Nurse'), 2000)

for (let i = 0 ; i < stop; i++) {
    console.log('boom')
}

// runs after blocking code finished above
// setTimeout(() => console.log('Hello Nurse'), 2000)


console.log('end')

console.timeEnd('blocking')
