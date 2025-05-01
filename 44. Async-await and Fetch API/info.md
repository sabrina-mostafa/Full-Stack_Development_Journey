## Async-await
### async function
- The async keyword declares that this function will handle asynchronous operations.
- It *automatically* **returns a Promise**.
- Inside this function, you’re allowed to use the await keyword.
- Why?
  - Because await only works inside async functions.

### Async-await
- Use while handling promises
- Async function will always return a promise
- **await** can be used/marked iff it's **inside an async function**

### await
- it makes the asynchronous task behave as synchronous task
  - means current line will execute before moving to the next line 

### Why Use async/await?
- Makes asynchronous code look like synchronous code.
- Easier to read, write, and debug than Promises or callbacks.
- Avoids callback hell.

### let data = await response.json();
- The **response**** is a raw HTTP response, **not actual usable data** yet.
- .json() is an asynchronous method that parses the response body as JSON.
- Why await here?
  - Because .json() also returns a Promise — it might take time to parse large data.


### IIFE(Immediately Invoked Function Expression)
- as in async func, we have to call the func so we can use IIFE.
- **no named**
- IIFE is a function that is called immediately as soon as it is defined.
- don't need to call them separately.
- ()();
- 3 Types:
  - ( function(){  }) ();
  - ( ()=>{  }) ();
  - ( async function (){  }) ();
- **Problem:**
 - use only one time, can't be reused.
 - for reuse we have to rewrite the full code.
- **Usage**
  - whenever we write a function for single time call.
