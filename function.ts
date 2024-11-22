// function add(x,y){
//     return x+y;
// }

// console.log(add(2,4));


// function add1(x:number,y:number){
//     return x+y;
// }

// console.log(add1(2,4));

// // return krn type ekyi values type add
// function add2(x:number,y:number) :number{
//     if(x>0){
//       return x+y;
//     }else{
//         return x;
//     }
// }
// console.log(add2(2,4));

// //
// function add3(x:number,y:number) :never{
//     while(true){
//      x+y;
//     }
  
// }
// console.log(add3(2,4));

type addFn = (x:number,y:number) => number;
function add4(x:number,y:number):number{
    return x+y;
}
function calculate (n1:number,n2:number,calFn:addFn): number {
    const result = calFn(n1,n2);
    return result;
}

console.log(calculate(20,30,add4));


// multi
type multyFn = (a:number,b:number)=>number;
function add5(a:number,b:number):number{
    return a - b;
}

function calculate1(x1:number,x2:number,callFn:multyFn):number{
    const result = callFn(x1,x2);
    return result;
}

console.log(calculate1(100,40,add5));

//*

type contFn = (a:number,b:number)=>number;
function add6(a:number,b:number):number{
    return a*b;
}

function calculate2(x1:number,x2:number,callFn:contFn):number{
    const result = callFn(x1,x2);
    return result;
}

console.log(calculate2(100,40,add6));

// arrow function

type AcontFn = (a:number,b:number)=>number;
const add7 = (a:number,b:number):number =>{
    return a - b;
}
const calculate3 = (x1:number,x2:number,callFn:AcontFn):number =>{
    const result = callFn(x1,x2);
    return result;
}

console.log(calculate3(100,40,add7));