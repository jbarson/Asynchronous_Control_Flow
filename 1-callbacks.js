// Higher Order Function

const myForEach = (array, callback) => {
    for (let item of array) {
        callback(item)
    }
}

const students = ['Brett', 'JT', 'Hinali']

myForEach(students, console.log)

const calculate = (operation) => {
    switch (operation) {
        case "add":
            return (a,b) => console.log(a+b)

        case "subtract":
            return (a,b) => console.log(a-b)

    }
}

calculate("add")(2, 3)

// this is hoisted
declaration()
//this is not
// expression()

// function declaration

function declaration() {
    console.log("this is a declaration")
}

// function expression

const expression = function() {
    console.log('this is an expression')
}

function declaration() {
    console.log('hijacked')
    return "boom goes the dynamite"
}

const arrow = () => "shot through the heart"

console.log(arrow())
