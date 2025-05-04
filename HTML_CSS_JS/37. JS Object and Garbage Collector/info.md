## Object
- Dynamic Nature
- to clone object we can use
  - spread operator **destination = {... src}**
  - assign operator **dest = Object.assign({}, src)**
  - iteration (for loop)


### Garbage Collector
            It's a tool/utility that always runs in the background of JS, which wonks in memory management and focuses on freeing the memory that are no longer in use in a program. We can't control it. It prevents memory leak.

### Memory Leak:
            A memory leak in JavaScript happens when your program holds onto memory that it no longer needs, preventing it from being garbage collected. Over time, this can slow down your app or even crash it.