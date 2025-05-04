## What is animation?
- converting an element's one style to another style.

## @keyframes Rule
- it stores **style shifting rules/infos**


## animation-timing-function
- Specifies the **Speed** Curve of the Animation
- values:
 - **ease** - slow start, then fast, then end slowly (by default)
 - **linear** - same speed from start to end
 - **ease-in** - slow start
 - **ease-out** - slow end
 - **ease-in-out** - slow start and end
 - **cubic-bezier(n,n,n,n)** - own values in a cubic-bezier function

 ## ShortHand:
- **@keyframes name** | **duration** | **easing-function** | **delay** | **iteration-count** | **direction** | **fill-mode** | **play-state** */
- Example:
 - animation: rightMovement 3s cubic-bezier(0.1, 0.7, 0.1, 0.1) -1s 2 alternate both running;