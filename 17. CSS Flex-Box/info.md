## FlexBox
- full form:
 - flexible-Box
- 1D Layout Method
- 2 parts
 - flex container
 - flex items

## flex-containter
- diplay flex
- flex-direction
- flex-wrap
- flex-flow(**shorthand**)
- justify-content
- align-items
- align-content

## Flex-items:
- order
- flex-shirnk
- flex-grow
- flex-basis
- flex (**shorthand**)
- align-self


## flex direction
- by default
 - row

## flex-wrap:
- nowrap
 - by default
- wrap
 - won't squize as long as space is available.
 - box/element will go to next row.
 - or we can say, the number of columns will decrease.
- wrap-reverse

## main axis
- if flex-direction is row
 - main is X-axis(horizontal)
- if flex-direction is column
 - main is Y-axis(vertical)
- **justify-content** is apllied on Main axis.

## align-items: 
- by default
 - stretch
- is apllied on Cross axis


## shrink, grow
- is applied on flex-items

## ShortHand Notation
### flex-flow
- It is a shorthand property for:
 - **flex-direction**
 - **flex-wrap**
- Example:
 - **flex-flow: row-reverse wrap**

### flex
- It is a shorthand property for:
 - flex-grow
 - flex-shrink
 - flex-basis (gives dimension-width)
- The flex property sets the flexible length on flexible items.
- **flex: 0 1 150px;**


## align-self
- works on the particular item/element.
