// style, style.cssText
let secPara = document.querySelector('.spara');
secPara.innerText = "new second para";
secPara.style.backgroundColor = "blue";
secPara.style.cssText ="background-color: red; padding: 5rem; color: white" ;


// setAttribute
let firstPara = document.querySelector(".fpara");
firstPara.setAttribute('id', "idOfFirstPara");
firstPara.setAttribute("style", "color:white; padding: 1rem; background-color:black");


// single class
let secDiv = document.querySelector('.sdiv');
secDiv.className = "sdiv secondDiv" ;

// multiple class name and add, remove, toggle
let firstDiv = document.querySelector(".fdiv") ;

firstDiv.classList.add("firstNewDiv");
firstDiv.classList.add("firstNewDiv1", "firstnewDiv2");

firstDiv.classList.remove ("firstNewDiv");

firstDiv.classList.toggle("firstNewDiv");
// true
firstDiv.classList.toggle("firstNewDiv");
// false
firstDiv.classList.contains("firstDiv");
// false
firstDiv.classList.contains("firstNewDiv1");
// true