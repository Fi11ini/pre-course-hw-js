let passportWithAddress = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "LA"
    }
};

let passportWithAddress2 = structuredClone(passportWithAddress)
passportWithAddress.address.city = 'Bobryisk'

console.log(passportWithAddress)
console.log(passportWithAddress2)
