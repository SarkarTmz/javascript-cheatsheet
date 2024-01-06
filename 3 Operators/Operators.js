an operator is a special symbol or keyword that performs operations on one or more operands. Operators are used to manipulate variables and values, combining them or transforming them in some way. The operands can be variables, literals, or expressions.

// There is 7 types of operatiors in js

1. Arithmetic Operators:
2. Assignment Operators:
3. Comparison Operators:
4. Logical Operators:
5. Unary Operators:
6. Conditional (Ternary) Operator:
7. Bitwise Operators:



1. Arithmetic Operators:
+ (Addition)
- (Subtraction)
* (Multiplication)
/ (Division)
% (Modulus - returns the remainder)
** (Exponentiation)

let a = 10;
let b = 3;
console.log(a + b); // 13
console.log(a - b); // 7
console.log(a * b); // 30
console.log(a / b); // 3.333...
console.log(a % b); // 1
console.log(a ** b); // 1000

2. Assignment Operators:
= (Assignment)
+= (Add and assign)
-= (Subtract and assign)
*= (Multiply and assign)
/= (Divide and assign)

let x = 5;
x += 3; // equivalent to x = x + 3;

3. Comparison Operators:
== (Equal to)
=== (Strict equal to)
!= (Not equal to)
!== (Strict not equal to)
> (Greater than)
< (Less than)
>= (Greater than or equal to)
<= (Less than or equal to)

let a = 5;
let b = "5";
console.log(a == b); // true (loose equality)
console.log(a === b); // false (strict equality)

4. Logical Operators:
&& (Logical AND)
|| (Logical OR)
! (Logical NOT)

let condition1 = true;
let condition2 = false;
console.log(condition1 && condition2); // false
console.log(condition1 || condition2); // true
console.log(!condition1); // false

5. Unary Operators:
+ (Unary plus)
- (Unary minus)
++ (Increment)
-- (Decrement)
typeof (Returns a string indicating the type of an operand)

let num = 10;
console.log(-num); // -10
console.log(++num); // 11
console.log(num--); // 11 (post-decrement)

6. Conditional (Ternary) Operator:
condition ? expr1 : expr2

let age = 20;
let status = (age >= 18) ? "Adult" : "Minor";

7. Bitwise Operators:
& (Bitwise AND)
| (Bitwise OR)
^ (Bitwise XOR)
~ (Bitwise NOT)
<< (Left shift)
>> (Right shift)
>>> (Unsigned right shift)


let a = 5; // binary: 0101
let b = 3; // binary: 0011
console.log(a & b); // 1 (bitwise AND)
console.log(a | b); // 7 (bitwise OR)
