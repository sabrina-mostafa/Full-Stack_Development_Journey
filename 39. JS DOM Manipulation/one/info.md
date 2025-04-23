## window
            In the browser, window is the global object for all JavaScript running in that tab or window. Anything declared globally is technically a property of the window object.
## DOM(Document Object Model)
            It's the structured representation of the HTML (or XML) content of a webpage. JavaScript uses the DOM to read, access, and modify page content dynamically.

## BOM (Browser Object Model)
            It allows JavaScript to interact with the browser (not the web page content — that's the DOM’s job).


- DOM = Web page content.
  - Controls and changes the webpage’s content.
- BOM = Browser features.
  - Controls and interacts with the browser.


- Access HTML through DOM:
  - ID *(document.getElementById("ID"))*
  - className *(document.getElementsByClassName("className"))*
  - Tag *(document.getElementsByTagName("tag"))*
  - Any *(document.querySelector(**#**id/**.**className/'tag'))*
     - *returns only the 1st element*
  - Any *document.**querySelectorAll()***
    - *returns **all** the elements*
- Update HTML through DOM:
  - **innerHTML**
     - get/set the inner elements/tags
     - element/content inside excluding itself
  - **outerHTML**
     - get/set the whole content/element including itself
  - **innerText**
     - get/set only the texts that are rendering on the browser window
  - **textContent**
     - get/set all texts along with all contents **(including \n, tab etc)** that are written in the code/program.
- Add/insert element in HTML through DOM:
  - to create new child
     - **createElement('element/tagName')**
  - to add element/child
     - **.appendChild(child)**
     - it will always add the element at the end
  - **.insertAdjacentElement('where', child)**
    - where = 'beforebegin', 'afterbegin', 'beforeend', 'afterend'
- Removal of element in HTML through DOM:
  - **parent.removeChild(child)**
  - To get the parent using clild , **parent = child.parentElement**


