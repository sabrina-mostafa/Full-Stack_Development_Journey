"use strict";

// Dynamic nature of an object
let ob = {
    age: 24,
    wt: 10,
    ht: 120
};
console.log(ob);    //{ age: 24, wt: 10, ht: 120 }
ob.color = "black";
console.log(ob);    // { age: 24, wt: 10, ht: 120, color: 'black' }


// Object Cloning
// 1. spread operator
let obj = {
    age: 24,
    wt: 10,
    ht: 120
};
let clonedObj = { ...obj };
obj.wt = 25;
console.log(obj);      // { age: 24, wt: 25, ht: 120 }
console.log(clonedObj);     // { age: 24, wt: 10, ht: 120 }

// 2. assigned operator
let src1 = {
    age: 24,
    wt: 10,
    ht: 120
};
let src2 = {
    year: "2024",
    month: 10
};
let dest = Object.assign({}, src1, src2);
console.log(dest);      // { age: 24, wt: 10, ht: 120, year: '2024', month: 10 }

// 3. iteration
let source = {
    age: 24, wt: 10, ht: 120, year: '2025', month: 10
}
let destination = {} ;
for(key in source) {
    destination[key] = source[key] ;
}
console.log(destination);