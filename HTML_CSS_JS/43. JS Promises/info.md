### CallBack:
- A callback is a function passed as an argument to another function, which gets called later (often after some task finishes).
*Example:*

```js
function greet(name, callback) {
  console.log("Hello, " + name);
  callback();
}

function sayBye() {
  console.log("Goodbye!");
}

greet("Sabrina", sayBye);
```
```
Output:
Hello, Sabrina
Goodbye!
```

### Callback Hell:
- Callback hell happens when callbacks are nested inside other callbacks again and again, making the code:
  - hard to read 
  - hard to maintain 
  - error-prone 

### Solution?
- Use:
  - **Promises**
  - *async/await*
  - They make the same code much cleaner and flatter.



### Promise: 
- The Promise is **an object** that handles/represents the eventual completion(or failure) of an asynchronous operation and its resulting value.
- A Promise is in one of these states(3):
  - **pending:** initial state, neither fulfilled nor rejected.
  - **fulfilled:** meaning that the operation was completed successfully.
  - **rejected:** meaning that the operation failed.
- This lets asynchronous methods return values like synchronous methods: instead of immediately returning the final value, the asynchronous method **returns a promise** to supply the value at some point in the future.
- Promise handler:
  - resolve
  - reject

- **Promise().then().catch().finally()**
  - Promise -> resolved/fulfilled -> then()
  - Promise -> rejected/failure -> catch()

### Promise chaining
- promise with multiple .then()
  - promise.then().then().then()...

### Promise.all()
- we pass an array here
- Promise.all() creates a new promise that will execute/ marked resolved, when **all** the promises inside the array will be resolved
  - if **any** of the promises of the array fails, then it will be also rejected/failed.


### setTimeout()
- setTimeout func uses callBack as it sends a function as an argument
- syntax - setTimeout(functionName, delay);
  - setTimeout(sayMyName, 10000);
- syntax - setTimeout(resolved, delay, response);
  - setTimeout(resolve, 1000, "First")



---


### `setTimeout(sayMyName, 0)` — Will it become/behave like **synchronous code**?

- **No**, it will **not** become synchronous.  
- Even with a delay of `0 milliseconds`, `setTimeout()` is **always asynchronous**.
- Why?
  - Because when you use: `setTimeout(sayMyName, 0);` - You're telling the browser:
     - “Schedule `sayMyName` to run **after** the current call stack is clear — even if the delay is 0.”


```js
console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

console.log("C");
```

### Output:
```
A
C
B
```

Even though the delay is 0, the function `B` runs **after** everything synchronous is finished.

### Conclusiom:
- `setTimeout(fn, 0)` is **not synchronous**
- It gets placed into the **CallBack Queue**
- It runs **after** the **Call Stack is empty**.



## Summary
- To haldle
  - callBack Hell -> Promise
  - Promise chain -> async/await