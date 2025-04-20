### Shallow Copy
        A shallow copy creates a new object but only copies references for nested objects (not actual values).
        If you modify a nested object, both the original and copied object will be affected.

### Deep Copy
        A deep copy creates a completely independent clone, so changes to the copy don’t affect the original.


### non-Primitive type/Reference type:
- Object
- Array
- Function

### Types of memory(mm) in JS
- Ther are **2 type of memory** in JS.
  - Stack mm (**Primitive types are stored**)
  - Heap mm (**non-Primitive types are stored**)


## Arrays in JS:
### Declaration:
- array literal
  - let arr = [1, 2, 3, 4, 5];
- array constructor
  - let brr = new Array(1, 2 , 3, 4, 5);

### How Arrays are stored:
        let arr = [1, 2, 3] ;
        now, the actual data i.e. [1 2 3] will be stored in Heap Memory
        but, the reference i.e. **arr** will be stored in Stack Memory, which will point to [1, 2, 3](of heap mm).

### Built-in Methods of Array:
- push(x)
  - insert at end
- pop()
  - remove last item
- shift()
  - remove 1st item
- unshift(x)
  - add 1st item
- slice(staringIndx, endinigIndx)
  - grab new part 
- splice(startingIndx, howManyItemToRemove, whatToInsert)
  - content change like insert/replace/remove
- map()
- filter()
- reduce(accumulator, current)
- sort
  - Accenidng
    - Arr.sort((a, b)=> a-b) ;
  - Decending
    - Arr.sort((a, b)=> b-a) ;
- indexOf(x)
  - gives the 1st index of x
- lastIndexOf(x)
  - gives the last index of x
- findIndex()
- find()
- foreach()
  - travers the whole arr
- for in Loop
  - iterates enumerable(gonona joggo) properies of Object
- for of Loop
  - iterator

