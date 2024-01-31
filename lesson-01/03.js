let number1 = Math.floor(Math.random() * 100)




let newNumber = function(num) {
    if(number1 % 2 === 0) {
        console.log(`${number1} Это четное число`);
    } else if (number1 % 2 === 1) {
        console.log(`${number1} Это нечетное число`);
    }
}


console.log(newNumber(number1));