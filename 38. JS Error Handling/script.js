// error handling
try {
    console.log("try block starts");
    console.log(x);
    console.log("try block ends");
}
catch(error) {
    console.log("this is catch block");
    console.log("here is the error:", error);
}
finally {
    console.log("\nI will run no matter what, as I am finally block");
}


// Custom Error
// 1
try {
    console.log(num);
}
catch(error) {
    throw new Error("declare num first, then print it") ;
}
// 2
let errorCode = 500;
if(errorCode===500) {
    throw new Error("Invalid json")
}
