const fruits = ["яблоко", "банан", "апельсин", "манго", "киви", "ананас", "виноград", "груша", "слива", "персик"];

let getFruits = function (arr) {
    return arr.slice(1, -2)
}

console.log(getFruits(fruits))