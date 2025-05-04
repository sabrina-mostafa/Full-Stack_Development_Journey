## auto-fit vs auto-fill in CSS Grid:
        Both auto-fit and auto-fill are used with repeat() in CSS Grid to create dynamic layouts. They automatically adjust the number of columns based on available space.

### auto-fill (Fills Row Even If Empty)
- Creates as many columns as possible within the container.
- Even if there aren’t enough items, it reserves empty columns.

### auto-fit (Shrinks to Fit Content)
- Also creates as many columns as possible.
- But it does NOT leave empty columns—it fits only the available items.

## Steps of grid-template-areas:
- provide id to the elements/items
- give **grid-area** name to those ids
- in the parent container, place the names according to desire as the value of **grid-template-areas:** 