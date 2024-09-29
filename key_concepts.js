// JavaScript Tutorial - Key Concepts
// Author: xauloq

//-------------------------------------------------------------------------------------------

// 1. Object
// An object is a collection of properties and methods, where properties hold values and methods define actions.
const person = {
    name: "John",      // property
    age: 30,           // property
    greet() {          // method
        console.log("Hello!");
    }
};

//--------------------------------------------------------------------------------------------

// 2. Property
// A property is a key-value pair associated with an object.
// Key: The name of the property.
// Value: The data it holds (can be any type: string, number, object, etc.).
console.log(person.name); // "John"

//--------------------------------------------------------------------------------------------

// 3. Method
// A method is a function defined as a property of an object. It performs actions using the object's data.
person.greet(); // "Hello!"

//--------------------------------------------------------------------------------------------

// 4. Array
// An array is an ordered list of values (elements), which can be accessed by index starting at 0.
const fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits[1]);  // "Banana"

//--------------------------------------------------------------------------------------------

// 5. Function
// A block of code designed to perform a specific task. Functions can take parameters and return values.
function add(a, b) {
    return a + b; // Returns the sum of a and b
}
console.log(add(2, 3)); // 5

//--------------------------------------------------------------------------------------------

// 6. Variable
// A named container used to store data. Can hold different data types.
let ageVariable = 25;    // number
let nameVariable = "Amy"; // string
let isActive = true;  // boolean

//--------------------------------------------------------------------------------------------

// 7. Loop

// 1. for loop:
// The for loop repeats a block of code a specific number of times.
for (let i = 0; i < 5; i++) {
    console.log(i); // Output: 0, 1, 2, 3, 4
}

// 2. for...in loop:
// The for...in loop iterates over the keys (properties) of an object or the indexes of an array.
const person2 = { name: "John", age: 30, city: "New York" };
for (let key in person2) {
    console.log(key);            // Outputs: "name", "age", "city"
    console.log(person2[key]);     // Outputs: "John", 30, "New York"
}

const fruits2 = ["Apple", "Banana", "Cherry"];
for (let index in fruits2) {
    console.log(index);           // Outputs: 0, 1, 2 (indexes)
    console.log(fruits2[index]);   // Outputs: "Apple", "Banana", "Cherry"
}

// 3. for...of loop:
// The for...of loop iterates over the **values** of an iterable (like arrays, strings, etc.).
for (let fruit of fruits2) {
    console.log(fruit);  // Outputs: "Apple", "Banana", "Cherry"
}

const greeting = "Hello";
for (let char of greeting) {
    console.log(char);   // Outputs: "H", "e", "l", "l", "o"
}

// 4. while loop:
// The while loop continues to execute as long as a specified condition is true.
let whileIndex = 0;
while (whileIndex < 5) {
    console.log(whileIndex);
    whileIndex++;
}
// Output: 0, 1, 2, 3, 4

// 5. do...while loop:
// The do...while loop is similar to the while loop, but it guarantees that the code block executes at least once.
let doWhileIndex = 0;
do {
    console.log(doWhileIndex);
    doWhileIndex++;
} while (doWhileIndex < 5);
// Output: 0, 1, 2, 3, 4

// 8. Conditionals

// 1. if-else statement:
// Executes a block of code if a specified condition is true. If the condition is false, it can execute another block (the else block).
let conditionalAge = 20;

if (conditionalAge >= 18) {
    console.log("Adult"); // Executes if conditionalAge is 18 or older
} else {
    console.log("Minor"); // Executes if conditionalAge is less than 18
}

// 2. if-else if-else statement:
// This allows you to check multiple conditions. If one condition is true, the corresponding block of code will be executed.
let score = 85;

if (score >= 90) {
    console.log("Grade: A"); // Executes if score is 90 or above
} else if (score >= 80) {
    console.log("Grade: B"); // Executes if score is between 80 and 89
} else if (score >= 70) {
    console.log("Grade: C"); // Executes if score is between 70 and 79
} else {
    console.log("Fail"); // Executes if score is less than 70
}

// 3. switch statement:
// A switch statement evaluates an expression and matches its value against different cases. If a match is found, the corresponding block of code runs.
let day = 3;

switch (day) {
    case 1:
        console.log("Monday");
        break; // Stops execution after the case is matched
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break; // Executes and stops
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    default:
        console.log("Weekend"); // Executes if no case matches
}

// 4. switch with multiple cases:
// You can group multiple cases that lead to the same result.
let fruitSwitch = "Apple";

switch (fruitSwitch) {
    case "Apple":
    case "Banana":
    case "Cherry":
        console.log("It's a fruit."); // Executes for any of the three cases
        break;
    default:
        console.log("Not a fruit.");
}

//--------------------------------------------------------------------------------------------

// 9. Event (for browsers)
// An action or occurrence recognized by the program (e.g., user input, clicks). Can trigger event handlers (functions).
// const button = document.getElementById("myButton");
// button.addEventListener("click", function() {
//   console.log("Button clicked!");
// });

//--------------------------------------------------------------------------------------------

// 10. Callback Function
// A function passed as an argument to another function, which is executed later.
function greetingWithCallback(name, callback) {
    console.log("Hello " + name);
    callback(); // Calls the callback function
}

greetingWithCallback("Sini", function() {
    console.log("Goodbye!"); // Executes after the greeting
});

//--------------------------------------------------------------------------------------------

// 11. Promise
// An object representing the eventual completion or failure of an asynchronous operation.
// Promises can be in one of three states: pending, fulfilled, or rejected.
let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Success!"), 1000); // Resolves after 1 second
});

promise.then((message) => console.log(message));  // "Success!"

//--------------------------------------------------------------------------------------------

// 12. Class
// A blueprint for creating objects with predefined properties and methods. Introduced in ES6.
class Car {
    constructor(model, year) {
        this.model = model; // Sets the model property
        this.year = year;   // Sets the year property
    }
    drive() {
        console.log("Driving..."); // Defines a method that describes driving
    }
}

const myCar = new Car("Tesla", 2020);
myCar.drive(); // "Driving..."

//--------------------------------------------------------------------------------------------

// 13. Scope
// The context in which variables are accessible. There are two types:
// Global Scope: Available throughout the program.
// Local Scope: Available only within a block or function.
let globalX = 10;  // Global variable

function testScope() {
    let localY = 5;  // Local variable
    console.log(globalX);  // Accessible (prints 10)
    // console.log(localY); // Would cause an error if uncommented because localY is not accessible outside its block
}

//--------------------------------------------------------------------------------------------

// 14. Closure
// A function that remembers the environment (scope) in which it was created, even after the outer function has completed.
function outerClosure() {
    let counter = 0; // Private variable
    return function() {
        counter++; // Increments counter each time the inner function is called
        console.log(counter);
    };
}

const incrementClosure = outerClosure();
incrementClosure();  // 1
incrementClosure();  // 2

//-------------------------------------------------------------------------------------------

// 15. Arrow Function
// A shorter syntax for writing functions. Arrow functions do not have their own 'this' context.
const addArrow = (a, b) => a + b; // Adds a and b
console.log(addArrow(5, 3));  // 8

//-------------------------------------------------------------------------------------------

// 16. Template Literals
// String literals that allow embedded expressions. Use backticks (`) instead of quotes.
let messageTemplate = `Hello, ${nameVariable}!`; // Uses template literals to embed variables
console.log(messageTemplate);  // "Hello, Amy!"

//-------------------------------------------------------------------------------------------

// 17. Destructuring
// A syntax that allows extracting values from arrays or properties from objects into variables.
const arrayDestructure = [1, 2];
const [first, second] = arrayDestructure; // Destructures array into first and second
console.log(first, second);  // 1, 2

const objectDestructure = { x: 1, y: 2 };
const { x, y } = objectDestructure; // Destructures object into x and y
console.log(x, y);  // 1, 2

// 18. Spread Operator
// A syntax that allows expanding an iterable (like an array) into individual elements.
const arrayOne = [1, 2];
const arrayTwo = [3, 4];
const combinedArray = [...arrayOne, ...arrayTwo]; // Combines two arrays
console.log(combinedArray);  // [1, 2, 3, 4]

//-------------------------------------------------------------------------------------------

// 19. Rest Parameter
// A syntax that allows representing an indefinite number of arguments as an array.
function sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0); // Sums all numbers
}
console.log(sum(1, 2, 3)); // 6

//-------------------------------------------------------------------------------------------

// 20. Import and Export (Modules)
// A way to share code between different files. Use 'export' to export from a module and 'import' to use it in another.
//export const constantValue = 42; // Exporting a constant
// import { constantValue } from './path/to/module'; // Importing a constant

// Word Dictionary
/*
    Object: "A collection of properties and methods.",
    Property: "A key-value pair associated with an object.",
    Method: "A function defined as a property of an object.",
    Array: "An ordered list of values.",
    Function: "A block of code designed to perform a specific task.",
    Variable: "A named container used to store data.",
    Loop: "A control structure that repeats a block of code.",
    Conditional: "A statement that executes different code based on a condition.",
    Event: "An action or occurrence recognized by the program.",
    Callback: "A function passed as an argument to another function.",
    Promise: "An object representing the eventual completion or failure of an asynchronous operation.",
    Class: "A blueprint for creating objects with predefined properties and methods.",
    Scope: "The context in which variables are accessible.",
    Closure: "A function that remembers the environment in which it was created.",
    ArrowFunction: "A shorter syntax for writing functions.",
    TemplateLiteral: "String literals that allow embedded expressions.",
    Destructuring: "A syntax that allows extracting values from arrays or properties from objects.",
    SpreadOperator: "A syntax that allows expanding an iterable into individual elements.",
    RestParameter: "A syntax that allows representing an indefinite number of arguments as an array."
*/