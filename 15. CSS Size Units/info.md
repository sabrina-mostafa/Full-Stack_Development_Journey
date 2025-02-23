## Absolute/fixed Units:
- **pixel(px)**
 - 1/96 inch or 0.26 mm **Physical Pixel**



## Relative Units:
- **%**
- **viewport (vw, vh)**
- **em**
 - **10em = 10*parent's px**
 - default is **1em=16px** (parent's px is not defined)
- **rem (1*16px)**
 - **10rem = 10*16px**


## **Difference Between `rem` and `em` in CSS**

Both `rem` and `em` are **relative units** in CSS, primarily used for font sizes, paddings, margins, etc. However, they behave differently in relation to their reference point.

---

### **1. `em` (Relative to Parent)**
- **Definition:** `1em` equals the font size of its **parent element**.
- **Scaling Effect:** Changes if the parent element’s font size changes.
- **Example:**
  ```css
  body {
    font-size: 16px;
  }
  .container {
    font-size: 20px;
  }
  .child {
    font-size: 1.5em; /* 1.5 × 20px = 30px */
  }
  ```
  - Here, `.child` gets **30px** font size because its parent (`.container`) is `20px`.

---

### **2. `rem` (Relative to Root)**
- **Definition:** `1rem` equals the font size of the **root (`<html>`) element**.
- **Scaling Effect:** Always consistent, regardless of nesting.
- **Example:**
  ```css
  html {
    font-size: 16px;
  }
  .container {
    font-size: 20px;
  }
  .child {
    font-size: 1.5rem; /* 1.5 × 16px = 24px */
  }
  ```
  - Here, `.child` gets **24px** font size, as it refers to the root (`html`) size, not its parent.

---

### **Key Differences**
| Feature  | `em` | `rem` |
|----------|------|------|
| Relative to | Parent element | Root `<html>` element |
| Affected by nesting? | Yes | No |
| Recommended for | Localized scaling | Global consistency |

🔹 **Use `em`** when you want relative scaling within components.  
🔹 **Use `rem`** when you want consistent spacing and typography across the page.


## Difference between PPI and DPI:
- **PPI (Pixels Per Inch)**: Measures the pixel density of a digital display (e.g., screen resolution). Higher PPI means sharper images.  
- **DPI (Dots Per Inch)**: Measures the print resolution of an image on paper. Higher DPI means better print quality.  

**Key Difference**: PPI is for screens, while DPI is for printing.