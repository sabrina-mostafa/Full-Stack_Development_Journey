let firstPromise = new Promise( (resolve, reject) => {
    console.log("Sabrina");
    //  state: pending
    resolve(1001) ;  // state: fulfilled
   // reject(new Error("Internal Server Error")) ;  // state: rejected
} );





function sayMyName () {
    console.log("My name is: Sabrina Mostafa");
}

let myPromise = new Promise((resolve, reject) => {
    // syntax - setTimeout(func, delay);
    setTimeout(sayMyName, 0);
    //  state: pending as no resolve/reject given
}) ;





let newPromise = new Promise( (resolve, reject) => {
    let success = true ;
    if(success) {
        resolve("Promise Fulfilled") ;
    }
    else {
        reject("Promsie Rejected") ;
    }
} );

newPromise.then((message) => {
    console.log("Then message: " + message);
}).catch( (message) => {
    console.log("Error: " + message);
});

// promise chaining
newPromise.then((message) => {
    console.log("1st msg: " + message);
    return 10 ;
}).then( (mssg) => {
    console.log("2nd msg: " + mssg);
    return 20;
}).then( (val) => {
    console.log("3rd msg: " + val);
}).catch( (error) => {
    console.error(error) ;   // a way to console error
}).finally( () => {
    console.log("I will definitely run, as finally block");
});






let promise1 = new Promise( (resolve, reject) => {
    setTimeout(resolve, 1000, "First");
});
let promise2 = new Promise( (resolve, reject) => {
    setTimeout(resolve, 2000, "Second");
});
let promise3 = new Promise( (resolve, reject) => {
    setTimeout(reject, 4000, "Third");
});

Promise.all([promise1, promise3, promise2])
.then( (elements) => {
    console.log(elements);
})
.catch( (error) => {
    console.error("Error: " + error)
}) ;