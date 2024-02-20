const numbers = [
    [1, 2, 3, 4, 5],
    [11, 20, 33, 40, 55],
    [111, 200, 333, 400, 555],
];


function getOddNumber(array) {
    const filteredNumbers = array.map((subArray) => {
        return subArray.filter((number) => number % 2 === 0)
    });
    return filteredNumbers
}

console.log(getOddNumber(numbers))



