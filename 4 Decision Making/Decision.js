
// Decision-making in JavaScript is often achieved through conditional statements and loops. Here are some common constructs for decision-making in JavaScript:


// 1 if statement:
// 2  else if statement:
// 3 switch statement:
// 4 ternary operator:


// **** 1 if statement ****

//* The if statement is used to execute a block of code if a specified condition evaluates to true.

if (condition) {
    // Code to be executed if the condition is true
} else {
    // Code to be executed if the condition is false
}

// ****

let x = 10;

if (x > 5) {
    console.log("x is greater than 5");
} else {
    console.log("x is not greater than 5");
}


// **** 2 else if statement ****
 // * We can use else if statements to specify multiple conditions.

 if (condition1) {
    // Code to be executed if condition1 is true
} else if (condition2) {
    // Code to be executed if condition2 is true
} else {
    // Code to be executed if no conditions are true
}


//  ***

let x = 10;

if (x > 10) {
    console.log("x is greater than 10");
} else if (x === 10) {
    console.log("x is equal to 10");
} else {
    console.log("x is less than 10");
}
