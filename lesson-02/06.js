let passportWithAddress = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "LA"
    }
};

let passportWithAddress2 = structuredClone(passportWithAddress)
passportWithAddress2.address.city = 'Bobryisk'

console.log(passportWithAddress2)
