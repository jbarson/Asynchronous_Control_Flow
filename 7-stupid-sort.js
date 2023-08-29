const array = [900, 310, 1006, 0, 2, 3630, 1, 52, 603, 59, 81]

const sortingFunction = (a, b) => a-b

const sortedArray = array.sort(sortingFunction)

console.log(sortedArray)

const stupidSort = (arr) => {
    for (let item of arr) {
        setTimeout(() => console.log(item), item)
    }
}

stupidSort(array)
