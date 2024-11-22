var person = {
    fName: "sachiin",
    age: "22"
};
console.log(person.age);
//d- sructre
var obj = {
    a: 10,
    b: 20
};
var a = obj.a, b = obj.b;
console.log(a, " ", b);
//d- sructre
var obj1 = {
    a1: 10,
    b1: 20,
    c: {
        d: 10
    }
};
var a1 = obj1.a1, b1 = obj1.b1, c = obj1.c;
console.log(a1, " ", b1, c.d);
//
var person2 = {
    fName: "sachiin",
    age: "22",
    hobbies: {
        sport: "swimming"
    }
};
console.log(person2.hobbies.sport);
// class
var Customer = /** @class */ (function () {
    function Customer() {
    }
    return Customer;
}());
var persun1 = {
    Name: "kamal",
    age: 22
};
console.log(persun1.Name);
// class
var Supplier = /** @class */ (function () {
    function Supplier() {
    }
    return Supplier;
}());
var customer1 = {
    Name: "sachiin",
    age: 22
};
console.log(customer1.Name);
