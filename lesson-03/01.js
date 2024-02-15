const colors = ["синий", "черный", "зеленый", "красный", "желтый", "зеленый"];

function createColorString(string) {
    let newArr = string.filter((item) => {
        if (item === "черный" || item === "красный" || item === "желтый") {
            return true
        }
    }).join('-')
    return newArr
}

console.log(createColorString(colors));
