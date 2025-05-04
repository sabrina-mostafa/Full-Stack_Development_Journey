// Objects
let obj = {
    "my Name": "Sabrina",
    age: 21,
    weight: 62,
    height: "5ft 2inch",
    greet: function() {
        console.log("hello world");
    }
} ;

console.log(obj);
obj.greet();

console.log(typeof(obj));


// Arrays

// array literal
let arr = [1, 2, 3, 4, 5];
console.log(arr);
// array constructor
let brr = new Array(1, 2 , 3, 4, 5);
console.log(brr);

// Built-in Methods:
let myArray = ["Sabrina", 21, true];
console.log(myArray);
// push()
myArray.push("Mostafa");  // applied on the right
console.log(myArray);
// pop()
myArray.pop();
console.log(myArray);
// shift()
myArray.shift();   // applied on the left
console.log(myArray);
// unshift()
myArray.unshift("Mostafa");
console.log(myArray);
// slice()
console.log(myArray.slice(1, 3));   // print from indx 1 to indx 2  
// splice
myArray.splice(2, 0, "Sabrina")  // from indx 2, remove 0 items, insert "Sabrina" on indx 2
console.log(myArray);

// map
let newArr = [10, 20, 30];
let ans = newArr.map(
    (Number, index) => {
        console.log("value: " + Number + "; index: " + index);
    }
)

// filter
let anArr = [10, 11, 12, 22, 25];
let evenArr = anArr.filter((Number)=>{
    // return Number%2 === 0 ;      // Shortcut
    if(Number%2===0)
        return true ;
    else
    return false ;
});
console.log(evenArr);

// reduce
let anArray = [10, 20, 30, 40];
let sum = anArray.reduce((acc, curr)=> {
    return acc+curr ;
}, 0);
console.log(sum);

// sort
let unsortedArray = [4, 6, 20, 44, 9, 2];
unsortedArray.sort()
console.log(unsortedArray);  // string wise compare

// Actual sorting
let unsortedArr = [4, 6, 20, 44, 9, 2];
// Accenidng
unsortedArr.sort((a, b)=> a-b) ;
console.log(unsortedArr);
// Decending
unsortedArr.sort((a, b)=> b-a) ;
console.log(unsortedArr);

//indexOf
console.log(unsortedArr.indexOf(9));

// findIndex
let s = [53, 22, 0, 1, 22, 300];
console.log(s.findIndex(x=> x%2===0));

//find()
let numbers = [3, 7, 8, 10];
let firstEven = numbers.find(num => num % 2 === 0);
console.log(firstEven); // 👉 8


//forEach()
let arrX = [10, 20, 30] ;
arrX.forEach((value, index)=>{
    console.log(value, index);
})

//for in Loop
let ob = {
    myName: 'Sabrina',
    age: 10,
    address: 'CTG'
};
for(let key in ob) {
    console.log(key, ": ", ob[key]);
}

//for of loop
let arrY = [1, 3, 5, 6, 7, 0] ;
for(value of arrY) {
    console.log(value);
}

//Arr in function
let arrZ = [1, 2, 3, 4, 5] ;
function getSum(arr) {
    let sum=0 ;
    arr.forEach(value=>{
        sum+=value;
    });
    return sum;
}
console.log(getSum(arrZ));
