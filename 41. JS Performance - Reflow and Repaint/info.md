## Performance Improvement:

### measure:
- **performance.now()**
  - performance.now() is a high-precision timer in JavaScript — perfect for measuring how long a task takes, especially when milliseconds matter.
  - It returns a DOMHighRes**TimeStamp**, which is a floating-point number representing the time (in milliseconds) since the page started loading.

### Reflow: (takes much time)
            Reflow happens when the browser calculates the layout of the page — like figuring out where and how big every element should be.

            Whenever something changes that affects the layout, the browser triggers a reflow to re-calculate the positions and sizes of elements.

### Repaint: (takes less time)
            A repaint happens when an element’s appearance (visual style) changes, but its layout (size or position) stays the same.

            The browser doesn’t need to recalculate the layout — just redraw the pixels.

- The **less number of Reflow & Repaint** the **less time** will take a code to run.
- whenever we do appendChild() to the document, means we have to render/display/show the appended child, 1 Reflow & 1 Repaint happens.


### Document Fragment: (usage: less execution time/less reflow&repaint)
- Best Practice
- It's a light weight document object (like a copy of the document)
- computetionally demands less resources than document
- while doing appendChild() in document fragment
  - **no Reflow & no Repaint happens**