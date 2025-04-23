// let newChild = document.createElement('h2');

// newChild.textContent = "Second heading" ;
// 'Second heading'

// let parent = document.querySelector('body');
// undefined

// parent
// <body data-new-gr-c-s-check-loaded=​"14.1232.0" data-gr-ext-installed>​…​</body>​<h1 id=​"fheading">​First heading​</h1>​<div class=​"mypara">​…​</div>​<script src=​"script.js">​</script>​<!-- Code injected by live-server --><script>​…​</script>​</body>​

// parent.appendChild(newChild);
// <h2>​Second heading​</h2>​   // it will add at the end



// ----------- add element at the last -----------
let parent = document.querySelector(".mypara");
let newEl = document.createElement('p');
newEl.textContent = 'this is the new element' ;

parent.appendChild(newEl);
// parent.insertAdjacentElement('beforebegin', newEl);
// parent.insertAdjacentElement('afterbegin', newEl);
// parent.insertAdjacentElement('beforeend', newEl);
// parent.insertAdjacentElement('afterend', newEl);


//  ----------- remove element -------------
// 1.
// let child = document.querySelector('#fpara') ;
// parent.removeChild(child);

// 2.
let child = document.querySelector('#fpara') ;
let theParent = child.parentElement ;
theParent.removeChild(child);




