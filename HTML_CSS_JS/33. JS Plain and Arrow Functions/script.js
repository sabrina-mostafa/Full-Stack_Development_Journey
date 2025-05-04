
function agePrinter(age) {
    console.log("My age is:", age) ;
}
agePrinter(5) ;



// 1. Function declaration
function getMultiplication1(a, b) {
    return a*b ;
}
let ans1 = getMultiplication1(2, 10);
console.log(ans1) ;

// 2. Function expression
const getMultiplication2 = function(a, b) {
    return a*b ;
}
let ans2 = getMultiplication2(2, 10);
console.log(ans2) ;

// 3. Arrow Function
const getMultiplication3 = (a, b) => {
    return a*b ;
}
let ans3 = getMultiplication3(2, 10);
console.log(ans3) ;