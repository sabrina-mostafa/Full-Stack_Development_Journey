const url = "https://jsonplaceholder.typicode.com/comments";


// async function getComments() {
//     let thePromise = await fetch(url);
//     console.log(thePromise);
// }
// OR
const getComments = async () => {
    // async-await
    console.log("Getting data .....");
    let response = await fetch(url);
    console.log(response);
    let data = await response.json();


    console.log(data);
    console.log(data[0]) ;
    console.log("Email:", data[0].email) ;
    console.log("Comment: ", data[0].body) ;


    // let comment = document.createElement('p');
    // comment.setAttribute('class', "para");
    // document.body.appendChild(comment);
    // let theComment = document.querySelector(".para");
    // theComment.textContent = data[0].body;

    // Or
    let comment = document.createElement('p');
    comment.textContent = data[0].body;
    document.body.appendChild(comment);
};


let btn = document.createElement('button');
btn.textContent = "Click For Comment";
document.body.appendChild(btn);

btn.addEventListener('click', getComments);








// same Implementation using Promise chaining

function getCmnt() {
    console.log("Getting data using PromiseChaining .....");
    let theResponse = fetch(url);
    console.log(theResponse);  // a promise

    theResponse.then( (res)=> {
        return res.json() ;
    })
    .then( (dta)=> {
        console.log(dta[0].email);
    });
}
getCmnt();