// one data typle ekk assign krnn puluwn
var ar = [1, 2, 3];
var ar1 = [1, 2, 3, 4];
var ar2 = ['1,2,3,4'];
var ar3 = [1, 'a', false];
// never array eke type ekk natuw assign unam never 
var ar4 = []; //compile error
var ar5 = []; //compile ok
var ar7; // array constructer
ar7 = ['1', 1, 4];
console.log(ar7);
var ar6;
ar6 = ['1', '2', '3'];
// arry 
function printArray(ar) {
    ar.forEach(function (element) {
        console.log(element);
    });
}
console.log("===========");
// add value push()
var ar8 = [1, 3, 5];
var ar9 = [2, 4];
ar8.push(ar9[2]);
console.log(ar8);
console.log("===========");
// any value set
var ar10 = [1, 3, 5];
var ar11 = [2, 4];
ar10.push.apply(ar10, ar11);
console.log(ar10);
console.log("===========");
//couple array -all ready dila tiyen 
var t1 = [1, 3];
console.log(t1);
console.log("===========");
var t2 = [1, '2'];
console.log(t2);
console.log("===========");
// d- structure - object ekk values eliyt gnn use krnn
var a = t1[0], b = t1[1];
console.log(a, '', b);
console.log("===========");
//printArray(ar2); // strign[] not supported
printArray(ar1);
printArray(ar);
