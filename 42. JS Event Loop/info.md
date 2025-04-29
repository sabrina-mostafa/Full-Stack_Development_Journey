## JavaScript is Single-Threaded, but Handles Asynchronous Code
- That may sound like a contradiction, but it’s not — thanks to the Event Loop system.
- JavaScript has one main thread — it can only do one thing at a time in the call stack.
- JS stays single-threaded, but the browser environment(Browser Web APIs and the Event Loop) allows async code to be handled in the background, and then JS picks it up when ready.

### What is Blocking in JavaScript?
- Blocking means:
  - The browser stops everything until a task is fully completed — no other code can run during that time.
  - Since JavaScript is single-threaded (it runs one task at a time), long or heavy synchronous tasks can block. so JS event loop handles blocking by handling Asynchronous code.

### Synchronous Code (Blocking)
- Synchronous means:
  - JavaScript runs one task at a time → **each line waits for the previous one to finish**.
  - Everything happens in order, **runs instantly**.

### Asynchronous Code (Non-blocking)
- Asynchronous means:
  - Some tasks **start now and finish later**, allowing other code to run in the meantime.
  - JS uses things like:
     - setTimeout()
     - Promises (fetch(), .then)
     - async/await
     - Events (like clicks)

- Synchronous = one task at a time, can block UI.
- Asynchronous = allows multitasking with setTimeout, Promises, async/await.

### Behind the Scenes: JavaScript Event Loop
- *JavaScript runs synchronously, but uses the **Event Loop + Callback Queue** to handle async stuffs like timers, fetches, etc., in the background*.

### Event Loop
- Call Stack
- Browser
- Callback Queue
- **Async code hadling Process of Event Loop**:
  - *sync code* -> *entry on Call Stack* -> *run/execute instantly*
  - *async code* **->** *entry on Call Stack* **->** *hand over to the Browser* **->** *timeout/fulfilled the async task/waiting time* **->** entry on the Callback Queue* **->** *if all the sync code is done running/the call stack is empty* **->** *EVENT LOOP transfers it to the Call Stack* **->** *instant Execution*.