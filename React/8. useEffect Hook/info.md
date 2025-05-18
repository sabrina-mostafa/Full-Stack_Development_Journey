### useEffect:
            useEffect() is a React Hook that lets you perform side effects in functional components.
            Side effects include data fetching, subscriptions, timers, DOM manipulations, etc.

- *useEffect returns undefined.*
- *Effects only run on the client. They don’t run during server rendering.*
- *useEffect is a Hook, so you can only call it at the top level of your component or your own Hooks. You can’t call it inside loops or conditions. If you need that, extract a new component and move the state into it.*


### Syntax
```js
//   first -> side-effect function/logic
//   second -> clean-up function(optional)
//   third -> comma separated dependent list(array)
  useEffect(() => {
    first
  
    return () => {
      second
    }
  }, [third])
```

### Variantion: 1
- run on every render
```js
  useEffect(() => {
    alert("I will run on each render");

  })
```

### Variantion: 2
- run on only first time render
```js
  useEffect(() => {
    alert("I will render on only first time render");

  }, [])
```

### Variantion: 3
  // run on every time a dependancy variable is changed
```js
  useEffect(() => {
    alert(`I will run every time count is changed. Count: ${count}`);
  
  }, [count])
```

### Variantion: 4
- Multiple dependancies
```js
  useEffect(() => {
    alert(`I will change whenever count/total is changed Count:${count} Total:${total}`)
  
  }, [count, total])
```
  

### Variantion: 5
- added a cleanup function
```js
  useEffect(() => {
    alert(`Count Updated. Count: ${count}`);
  
    return () => {
      alert(`Count is unmounted from UI for count: ${count}`);
    }
  }, [count])
```