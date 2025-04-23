## Change style/CSS:
### Property
- **.style.property**
  - .style.backgroundColor = "property"
  - works on single property
- **.style.cssText**
  - .style.cssText = "properties"
  - works on multiple properties
- **.setAttribute("attribute", "property")**
  - override previous properties means previously added properties will not be applied.

### Class
- **.className**
  - override previous classNames
- **.classList**
  - No override on previous classNames
  - **.classList.add**
  - **.classList.remove**
  - **.classList.toggle** (present->remove, abset->add)
  - **.classList.contain** (is ther present or not in the code)