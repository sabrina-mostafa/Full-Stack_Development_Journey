## Hoisting:
        Hoisting is JavaScript's default behavior of moving function declarations and variable declarations to the top of their 
        scope before code execution.
- It acts on **only 2**:
  - **var** declaration
  - **function** declaration (not on fn expression or arrow fn)
- shifts them to the top automatically

### Function Hoisting:
- function definitaion before funcation call is not mandatory
- it shifts the **whole function along with its defination**, to the top.
- **But *function expressions* are not hoisted the same way**

### Variable Hoisting:
- for var (keyword)
- it shifts **only the variable declaration** to the top but **not the assigned value**.

### Function call 
- uses Stack Memory

## Function is a Fist Class Citizen
- We can
  - return a func from a func
  - pass a func to a func as argument
  - store func in data structure(like Array)
  - assign to a variable
  - use as a property of an object

## Temporal Dead Zone(TDZ)
        Accessing a let or const variable will throw a ReferenceError if we try to access them before initializing,
        and from the 1st line to the line before of the variable initiatization is called TDZ.