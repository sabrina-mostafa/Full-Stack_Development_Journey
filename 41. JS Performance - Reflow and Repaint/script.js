// trying to add 100 paras in the document dynamically

// code 1
const t1 = performance.now() ;
for(let i=1; i<=100; i++) {
    let para = document.createElement('p') ;
    para.textContent = "This is para: " + i ;
    document.body.appendChild(para) ;         // 100 Reflow, 100 Repaint
}
const t2 = performance.now() ;
console.log("total time by code 1: "+ (t2-t1));  // more time


// code 2
const t3 = performance.now() ;
let mydiv = document.createElement('div');

for(let i=1; i<100; i++) {
    let par = document.createElement('p') ;
    par.textContent = "This is div para: " + i ;
    mydiv.appendChild(par) ;
}
document.body.appendChild(mydiv) ;       // 1 Reflow, 1 Repaint
const t4 = performance.now() ;
console.log("total time by code 2: "+ (t4-t3));  // less time


// best code or best practice
const t5 = performance.now() ;
let docFragment = document.createDocumentFragment();

for(let i=1; i<100; i++) {
    let paragraph = document.createElement('p');
    paragraph.textContent = "This is docFragment para: " + i ;
    docFragment.appendChild(paragraph);      // on reflow, no repaint for the below line
}
document.body.appendChild(docFragment);     // the below code takes 1 reflow, 1 repaint
const t6 = performance.now() ;
console.log("total time by code 3: "+ (t6-t5)); 