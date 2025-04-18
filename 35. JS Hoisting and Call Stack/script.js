// function Hoisting
printMyName("Sabrina") ;

function printMyName(myName) {
    console.log(myName);
}

// variable Hoisting
console.log(age);  // o/p: undefined
var age=10;



// passing function to a function
function greet() {
    console.log("Assalamualaikum");
}
function greetMe(PassedFunc, Name) {
    console.log("Hey,", Name);
    PassedFunc();
}

greetMe(greet, "Sabrina");



// returning function from a function
function solve(num) {
    return function square(num) {
        return num*num ;
    }
}

let ans = solve(5) ;
console.log(ans);
let finalAns = ans(10)
console.log(finalAns);



// Storing function in array
let arr = [
    function (a, b) {
        return a+b;
    },
    (a, b)=>{
        return a-b;
    },
    function (a, b) {
        return a*b;
    }
];

let first = arr[0];
console.log(first(1, 2));
console.log(arr[1](10, 5));
console.log(arr[2](3, 3));


// function as a property of an object
let obj = {
    Name: "Sabrina",
    wt: 10,
    height: 5.2,
    greet: ()=>{
        console.log("hello World");
    }
};
obj.greet();
console.log(obj.wt);