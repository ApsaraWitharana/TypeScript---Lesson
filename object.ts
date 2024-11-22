var person = {
    fName:"sachiin",
    age:"22"
}

console.log(person.age);

//d- sructre
const obj = {
    a:10,
    b:20

}
const {a ,b} = obj;
console.log(a, " " ,b)


//d- sructre
const obj1 = {
    a1:10,
    b1:20,
    c:{
      d:10
    }

}
const {a1 ,b1,c} = obj1;
console.log(a1, " " ,b1,c.d)

//
var person2 = {
    fName:"sachiin",
    age:"22",
    hobbies : {
  sport:"swimming"
    }
}

console.log(person2.hobbies.sport);


// class
 
class Customer {
    cName:"sachini";
    age:22;
}

// console.log(Customer)

//interface
interface sup {
    Name:string,
    age:number
}

const persun1 :sup ={
    Name:"kamal",
    age:22
}

console.log(persun1.Name)

// class
class Supplier {
    Name:string;
    age:number;
}

const customer1 : Supplier = {
    Name:"sachiin",
    age:22
}

console.log(customer1.Name)