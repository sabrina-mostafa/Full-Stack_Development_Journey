## Types of CSS:
- Inline (1st priority)
 - Worst Practice
- Internal (Depends on order/position, written before or after)
- External (Depends on order/position, written before or after)
 - Best Practice


## **4 Key Factors of CSS**  

CSS (Cascading Style Sheets) is influenced by several factors that determine how styles are applied to HTML elements. Here are **four important factors** in CSS:  

### **1️⃣ Specificity**
- Determines **which CSS rule is applied** when multiple rules target the same element.
- The **higher specificity** rule overrides lower ones.  

✅ **Example:**
```css
p { color: blue; }         /* Specificity: 1 */
#myPara { color: red; }    /* Specificity: 100 (Higher, takes precedence) */
```
💡 **ID (`#myPara`) overrides tag selector (`p`).**

---

### **2️⃣ Inheritance**
- Child elements **inherit** styles from their parent elements.  
- Not all properties are inherited (e.g., `color` is inherited, but `margin` is not).  

✅ **Example:**
```css
body { color: green; }  /* All text inside <body> will be green */
```
💡 **Text inside `<body>` (like `<p>` and `<h1>`) inherits the color unless overridden.**

---

### **3️⃣ Cascade Order**
- CSS follows a **cascading order** when applying styles:
  1. **User Agent Styles** (Browser Defaults)
  2. **External or Internal CSS**
  3. **Inline Styles** (Highest priority)
  4. **`!important`** (Overrides everything!)  

✅ **Example:**
```css
p { color: blue !important; }  /* Highest priority */
p { color: red; }              /* Ignored due to !important */
```
💡 **`!important` should be used sparingly!**

---

### **4️⃣ Box Model**
- Defines how elements are displayed in terms of **content, padding, border, and margin**.  
- **Formula:** `Total Width = Content + Padding + Border + Margin`  

✅ **Example:**
```css
div {
  width: 200px;
  padding: 10px;
  border: 5px solid black;
  margin: 20px;
}
```
💡 **The actual width of `div` is `200 + 10 + 10 + 5 + 5 + 20 + 20 = 270px`.**


## What is Selector?
- **It is a process to target any html element and apply css styles**
- html tag/element
- id
- class
- Group Selector
 - multiple
 - **p, h1** (using comma)
