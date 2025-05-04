// String
let myName = "Sabrina Mostafa" ;
console.log(" ") ;
console.log(" ") ;
console.log(myName) ;


let myNameInfo = `My name 
is Sabrina Mostafa.
I 
am a
B.Sc.
Graduated        student` ;
console.log(" ") ;
console.log(myNameInfo) ;


let firstName = new String("Sabrina") ;
console.log(" ") ;
console.log(firstName) ;

console.log(" ") ;
console.log(typeof(firstName)) ;

let nm1= "Sabrina" ;
let nm2= "Mostafa" ;
console.log(" ") ;
console.log(`${nm1} ${nm2}`) ;
console.log(`${nm1} ${nm2}`.length) ;
console.log(`${nm1} ${nm2}`.toUpperCase()) ;
console.log(`${nm1} ${nm2}`.toLowerCase()) ;


let str="Sabrina" ;
console.log(str.substring(2, 4)) ; // from 2nd index to 3rd


let sentence = "My name is Sabrina Mostafa" ;
let words = sentence.split(" ") ;
console.log(words) ;
console.log(words.join("+")) ;