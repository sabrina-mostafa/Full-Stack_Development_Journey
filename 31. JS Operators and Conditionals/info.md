## Bitwise Operator:
### (~0) = -1, why ?
        ~ 000 . . . . 000
        = 111 . . . . 111, which is a (-ve) number as its MSB is 1
        So, we have to find its 2's complement.
        steps of finding 2's complement:
        1. find 1's complement(just flip the bits, 1->0 or 0->1)
        2. add 1 to the 1's complement
        Now,
        111 . . . . 111
        000 . . . . 000 (1's Complement)
                    + 1
        000 . . . . 001 (2's Complement), it's the binary representation of 1.
        Here,
        111 . . . . 111 represents a (-ve) number and 000 . . . . 001 = 1
        so, (~0) = -1.

### XOR(^)
- same bit, output=>0
  - 0^0 = 0
  - 1^1 = 0
- different bit, output=>1
  - 0^1 = 1
  - 1^0 = 1

### leftShift (<<)
- leftShift(<<) == (*=2)

### rightShift (>>)
- rightShift(>>) == (/=2)


## Ternary Operator
- Syntax
  - (Condition) ? value1 : value2

## Logical Operator:
- Falsey
  - false
  - 0
  - Undefined
  - Null
  - NaN (not a number)
  - ""
- Truthy
  - anything which is not falsey
