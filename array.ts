
// one data typle ekk assign krnn puluwn
let ar = [1,2,3]
let ar1 = [1,2,3,4];
let ar2 = ['1,2,3,4']
let ar3 = [1,'a',false]

// never array eke type ekk natuw assign unam never 
let ar4 = []; //compile error

let ar5 : any[] = []; //compile ok
let ar7 : Array<any>; // array constructer
ar7 = ['1',1,4]
console.log(ar7)



let ar6 :Array <string>;
ar6 = ['1','2','3']

// arry 
function printArray (ar:number[]){
    ar.forEach(element=>{
        console.log(element);
    });
}
console.log("===========")

// add value push()
let ar8 = [1,3,5];
let ar9 = [2,4];
ar8.push(ar9[2])
console.log(ar8)
console.log("===========")

// any value set
let ar10 = [1,3,5];
let ar11 = [2,4];
ar10.push(...ar11)
console.log(ar10)
console.log("===========")

//couple array -all ready dila tiyen 
let t1 :[number,number] = [1,3];
console.log(t1);
console.log("===========")

let t2 :[number,string] = [1,'2'];
console.log(t2);
console.log("===========")

// d- structure - object ekk values eliyt gnn use krnn
let [a,b] = t1;
console.log(a, '' ,b);
console.log("===========")

//printArray(ar2); // strign[] not supported
printArray(ar1);
printArray(ar)
