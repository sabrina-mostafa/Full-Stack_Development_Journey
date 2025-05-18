## Event:
            Events are some announcement that are done/made by browsers.


### To see Events in the console:
- monitorEvents(document)
  - Events show ON
- unmonitorEvents(document)
  - Events show OFF

### Event Target:
- The elements/tags that we target for occuring some events.
  - Button, <p> etc.

### Response or Event Listener:
- In Event Listeners, we define the actions that will be taken/performed if the event happens in the event target.
- **target.addEventListener(eType, func)**
  - to Add
- **target.removeEventListener(eType, func)**
  - to Remove
  - the funcName should be exactly the same object/thing/entity as in the addEventListener in order to remove the event.
- Syntax:
  - **eventTarget.addEventListener('eventType', actionFunction)**

### phase of Event:
- **Capturing Phase**
  - reaching to the event-target
- **At-target Phase**
  - reached at the event-target
- **Bubbling Phase**
  - returning to the root from the event-target
- By *default*, addEventListener() executes at the *Bubbling Phase*.
- if we want it to be executed in the Capturing Phase the we use the 3rd parameter(useCapture) as true.
  - para.addEventListener('click', changeText, **true**);
  - can be used -> to show two alerts one after another.

### Event object:
- whenever the event-Target is triggered, the event(event as an object) is gotten in the action function as a parameter/input.

### Default Behaviour
- to prevent default behaviour
  - **event**.preventDefault();

### Target property
- event.target.textContent

### How can we use DOMContentLoaded event to add script dynamically in js?
- The DOMContentLoaded event is super handy when you want to run JavaScript only after the HTML is fully loaded — without waiting for images or styles.

And yes — you can definitely use it to dynamically add a script (or anything else) to the page!