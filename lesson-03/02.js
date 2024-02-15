const words = ["яблоко", "банан", "апельсин", "манго", "киви"];


let getOrange = function (fructs) {
    if (fructs.indexOf("апельсин") !== -1) {
        return "Ура! нашел"
    } else {
        return 'Придется поискать в другом магазине…'
    }
}

console.log(getOrange(words))