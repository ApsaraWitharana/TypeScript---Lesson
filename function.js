// function add(x,y){
//     return x+y;
// }
function add4(x, y) {
    return x + y;
}
function calculate(n1, n2, calFn) {
    var result = calFn(n1, n2);
    return result;
}
console.log(calculate(20, 30, add4));
function add5(a, b) {
    return a - b;
}
function calculate1(x1, x2, callFn) {
    var result = callFn(x1, x2);
    return result;
}
console.log(calculate1(100, 40, add5));
function add6(a, b) {
    return a * b;
}
function calculate2(x1, x2, callFn) {
    var result = callFn(x1, x2);
    return result;
}
console.log(calculate2(100, 40, add6));
var add7 = function (a, b) {
    return a - b;
};
var calculate3 = function (x1, x2, callFn) {
    var result = callFn(x1, x2);
    return result;
};
console.log(calculate3(100, 40, add7));
