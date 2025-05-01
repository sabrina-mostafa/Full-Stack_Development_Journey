
// marking a func as async
async function getTheData() {
    setTimeout(() => {
        console.log("I am inside set Timeout block");
    }, 3000);
};
getTheData();




async function getsData() {

    //  get request -> async code
    let response1 = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    // parse json -> async code
    let data1 = await response1.json();
    console.log("data1: ", data1);
}
getsData();




const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");


const url = "https://jsonplaceholder.typicode.com/posts";

const options = {
    method: "POST",
    body: JSON.stringify({ username: "sabrina" }),
    headers: myHeaders,
};


async function getData() {
    const response = await fetch(url);
    let data = await response.json();
    console.log("get data response", data) ;
}

async function postData() {
    let response = await fetch(url, options);
    let data = await response.json();
    console.log("post data response: ", data);
}

async function processData() {
    await postData();
    getData();    
};
processData();




// IIFE
(function () {
    console.log("Example: 1");
}) ();

( ()=> {
    console.log("Example: 2")
} ) () ;

( async function () {
    console.log("Example: 3");
    await getData();
    console.log("End");
}) ();