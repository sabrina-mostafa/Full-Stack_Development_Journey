### Immediate Invocation
- <button onClick={alert("Immediate Invocation")}>Test1</button> 
-  Immediately invokes the function before clicking
- right way 
  - passing a function's reference
  - <button onClick={ ()=> {alert("Invocation while clicked")} }>Test2</button>


### stopPropagation()
- stopPropagation() is a method that prevents an event from continuing its propagation through the DOM tree. This means:
- It stops the event from bubbling up to parent elements.
- It also stops the event from capturing down to child elements (if used in the capturing phase).
