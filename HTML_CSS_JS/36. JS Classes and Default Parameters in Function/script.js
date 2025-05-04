class Human {
    // by default public
    firstName = "Sabrina";
    age = 10;
    #wt = 200;   // private
    walking() {
        console.log("walking func is called");
        console.log("inside class print, wt: ", this.#wt);
    }
    running() {
        console.log("I am running");
    }


    // no problem if get/set keyword is not used but it's recomended to use
    // getter
    get fetchWeight() {
        return this.#wt;
    }

    // setter
    set modifyWeight(value) {
        this.#wt = value ;
    }

    // Constructor
    constructor(newName, newAge, newWeight) {
        this.firstName = newName;
        this.newAge = newAge;
        this.#wt = newWeight;
    }


}


let obj1 = new Human();
console.log("age: ", obj1.age);
obj1.walking();

// getter
let x = obj1.fetchWeight;   // its not a function so NO parentheses, it’s a property accessor.
console.log("outside class print, wt:", x);
//setter
console.log("\nwt before setter:", obj1.fetchWeight);
obj1.modifyWeight = 5000;
console.log("wt after setter:",obj1.fetchWeight);


// constructor
obj2 = new Human("Sabrina_Mostafa", 5, 40);
console.log("\nnew assigned name:", obj2.firstName);
console.log("new assigned age:", obj2.age);
console.log("new assigned wt:", obj2.fetchWeight);







// Default Parameter Function
function sayName(theName="default Value") {
    console.log(theName);
}
sayName("passed Value");
sayName();


function printName(fName, lName="Rima", mName=fName.toUpperCase()) {
    console.log(fName, lName, mName);
}
printName("Sabrina")


function withObject(value = {age:14, wt:200} ) {
    console.log(value);
}
withObject(15);
withObject();


function withArray(value = [10, 100, 1000]) {
    console.log(value);
}
withArray(189564);
withArray(null);
withArray(undefined);
withArray();
