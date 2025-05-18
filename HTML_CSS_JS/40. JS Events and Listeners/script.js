let para = document.querySelector('.para');
function changeText() {
    para.textContent = "Hello Duniya";
}
para.addEventListener('click', changeText);
// changeText → "Hey JS, here's a function to run later."
// changeText() → "Hey JS, run this function right now."

para.removeEventListener('click', changeText);



// prevent default event/behaviour
let anchorTag = document.querySelector('.anchorTag');
function changeBehaviour(event) {
    event.preventDefault();
    anchorTag.textContent = "clicked";
}
anchorTag.addEventListener('click', changeBehaviour);




// 1.
// let paras = document.querySelectorAll('p') ;

// for(let i=0; i<paras.length; i++) {
//     let para = paras[i];
//     para.addEventListener('click', function() {
//         alert("You have clicked on para: " + i) ;
//     });
// }

// 2.
// let paras = document.querySelectorAll('p') ;
// function alertPara(event) {
//     alert("You have clicked on para: " + event.target.textContent) ;
// }

// for(let i=0; i<paras.length; i++) {
//     let para = paras[i];
//     para.addEventListener('click', alertPara);
// }

// 3.
let paras = document.querySelector('.dpara') ; // the div
function alertPara(event) {
    if(event.target.nodeName === 'SPAN') {
        alert("You have clicked on para: " + event.target.textContent);
    }
}

paras.addEventListener('click', alertPara)
