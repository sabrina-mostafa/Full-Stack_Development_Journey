### Closure
- closure is a combination of func and req. data
  - { function + required data or lexical scope or surrounding state }


### What is a Closure?

> A **closure** is created **when a function remembers and accesses variables** from **outside its own scope**, even **after that outer function has finished executing**.

- In Simple Words:
  - A function **"remembers" the variables** from the place it was **created**, not where it’s called.
- No new variable is created/copied
  - the reference of the old variable is binded with the related function or the innerFunction.
  - the variable's memory will not be cleared when the outerFunc is ended.


### Example:

```js
function outer() {
  let name = "Sabrina"; // ← local variable

  function inner() {
    console.log("Hello, " + name); // ← accesses outer's variable
  }

  return inner;
}

const greet = outer(); // outer() runs and returns inner
greet(); // Hello, Sabrina
```


### 🔍 What's Happening?
- `outer()` defines a local variable `name`.
- It returns `inner()`, which uses `name`.
- Even though `outer()` has finished running, `inner()` **still remembers** `name` — that's a **closure**!


### Common Use Cases:

1. **Data hiding / private variables**
2. **Functions that maintain state**
3. **SetTimeout / Event handlers**
4. **Function factories**


---

## Example: Counter with Closure

```js
function makeCounter() {
  let count = 0;

  return function () {
    count++;
    console.log(count);
  };
}

const counter = makeCounter();
counter(); // 1
counter(); // 2
counter(); // 3
```

The variable `count` stays alive inside the returned function — that's the power of closure.

---
