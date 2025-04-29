//Assignment 1

// Name: Chetan Rana
// Intern ID: INT898
// Javascript Assignment 1

//1. Declare a variable `name` and assign it your name. Then, log it to the console.

let name = "Chetan Rana";
console.log(name);

//2. Create an HTML file and link a JavaScript file to it. In the JavaScript file, write a script that changes the text of an HTML element with the id `myElement` to "Hello, World!".

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("myElement").textContent = "Hello, World!";
});

//3. Declare a variable of each data type (string, number, boolean, object, array) and log their types to the console.

let myString = "Hello, World!";
let myNumber = 42;
let myBoolean = true;
let myObject = { name: "Alice", age: 25 };
let myArray = [1, 2, 3, 4, 5];

console.log(typeof myString);
console.log(typeof myNumber);
console.log(typeof myBoolean);
console.log(typeof myObject);
console.log(typeof myArray);

//4. Demonstrate the difference in scope between `var`, `let`, and `const` by declaring variables inside and outside of a function.

function scope() {

    if (true) {
        var varVariable = "I am var";
        let letVariable = "I am let";
        const constVariable = "I am const";

        console.log(letVariable);
        console.log(constVariable);
    }

    console.log(varVariable);

    console.log(letVariable);
    console.log(constVariable);
}

//Globle scope

var globalVar = "Global var";
let globalLet = "Global let";
const globalConst = "Global const";

scope();

console.log(globalVar);
console.log(globalLet);
console.log(globalConst);

//5. Write a script that adds two numbers and logs the result.

let num1 = 5;
let num2 = 10;

let sum = num1 + num2;

console.log("The sum is: ", sum);

//6. Operator Precedence: Evaluate the expression `3 + 4 * 2` and explain the result.

//Expression: 3 + 4 * 2

console.log(3 + 4 * 2); // Output: 11

console.log((3 + 4) * 2); // Output: 14

//7. Type Conversion and Coercion: Convert a string to a number and add it to another number.

let strNumber = "10";
let num = 5;

let convertedNumber = Number(strNumber);

let sum = convertedNumber + num;
console.log(sum);

//8. Write a function that checks if a value is truthy or falsy.

function checkTruthyOrFalsy(value) {

    if (value) {
        console.log(value, "Is Truthy");
    } else {
        console.log(value, "Is Falsy");
    }
}

checkTruthyOrFalsy(true);
checkTruthyOrFalsy(false);
checkTruthyOrFalsy(1);
checkTruthyOrFalsy(0);
checkTruthyOrFalsy("Hello");
checkTruthyOrFalsy("");

//9. Write a function that takes two numbers and returns their sum.

function sum(a, b) {
    return a + b;
}

console.log(sum(5, 10));

//10.Explain the output of the following code snippet.

let a = 10;
let b = '10';

console.log(a == b); // ture (because '10' is converted to number 10)
console.log(a === b); // false (because number and string are different types)

//11. Write a function that takes three boolean values and returns true if at least one of them is true.

function checkOneTrue(a, b, c) {
    return a || b || c;
}

console.log(checkOneTrue(false, false, false));
console.log(checkOneTrue(true, false, false));
console.log(checkOneTrue(false, true, false));

//12. Write a function that takes two boolean values and returns true if both are true, otherwise returns false.

function checkBothTrue(a, b) {
    return a && b;
}

console.log(checkBothTrue(true, true));
console.log(checkBothTrue(true, false));

//13. Compare two variables using both == and === and log the results.

let a = 5;
let b = "5";

console.log(a == b);
console.log(a === b);

//14. Write a function that takes three boolean values and returns true if at least one of them is true.

function atLestOneTrue(a, b, c) {
    return a || b || c;
}

console.log(atLestOneTrue(false, false, true));
console.log(atLestOneTrue(false, false, false));
console.log(atLestOneTrue(true, false, false));

//15. Explain the difference between == and === with examples.

console.log(5 == "5"); //true (string "5" is converted to number 5)
console.log(5 === "5"); //false (number vs. string)

//16. Write a function that takes two boolean values and returns true if exactly one of them is true.

function exactlyOneTrue(a, b) {
    return a !== b;
}

console.log(exactlyOneTrue(true, false));
console.log(exactlyOneTrue(true, true));

//17. Write a function that takes a number and returns true if it is even, otherwise returns false.

function isEven(number) {
    return number % 2 === 0;
}

console.log(isEven(4));
console.log(isEven(5));

//18. Write a function that takes a string and returns true if it is not empty, otherwise returns false.

function isNotEmpty(str) {
    return str.length > 0;
}

console.log(isNotEmpty("Hello"));
console.log(isNotEmpty(""));

//19. Write a function that determines if a user can borrow a book from the library. The function should take the number of books the user currently has borrowed and a boolean indicating if they are a member. Members can borrow up to 10 books, while non-members can borrow up to 5 books.

function canBorrowBook(currentBooks, isMember) {
    let maxBooks = isMember ? 10 : 5;
    return currentBooks < maxBooks;
}

console.log(canBorrowBook(4, true));
console.log(canBorrowBook(10, true));

//20. Write a function that takes three parameters: a string, a number, and a boolean. The function should return true if the string is not empty, the number is even, and the boolean is true. Use type coercion and logical operators to achieve this.

function validateInputs(str, num, bool) {
    return str && num % 2 == 0 && bool;
}

console.log(validateInputs("Hello", 4, true));
console.log(validateInputs("", 4, true));
console.log(validateInputs("Test", 3, true));
console.log(validateInputs("Test", 2, false));

//21. Write a function that takes an array of numbers and returns an object with two properties: sum and product. The sum should be the total of all numbers in the array, and the product should be the product of all numbers in the array. Use let, const, and var appropriately within the function.

function calculateSumAndProduct(numbers) {

    if (numbers.length === 0) return { sum: 0, product: 1 };

    let sum = 0;
    let product = 1;

    for (const num of numbers) {
        sum += num;
        product *= num;
    }

    return { sum, product };
}

console.log(calculateSumAndProduct([1, 2, 3, 4]));
console.log(calculateSumAndProduct([5, 5, 5]));
console.log(calculateSumAndProduct([]));
console.log(calculateSumAndProduct([2, -3, 4]));

//22. Write a function that takes the total amount of a shopping cart and a boolean indicating if the user is a premium member. The function should return the final amount after applying a discount. Premium members get a 20% discount if the total is over $100, and non premium members get a 10% discount if the total is over $200.

function calculateFinalAmount(total, isPremiumMember) {

    if (isPremiumMember && total > 100) {
        return total * 0.8;
    } else if (!isPremiumMember && total > 200) {
        return total * 0.9;
    }
    return total;
}

console.log(calculateFinalAmount(150, true));
console.log(calculateFinalAmount(250, false));
console.log(calculateFinalAmount(90, true));
console.log(calculateFinalAmount(180, false));

//23. Write a function that determines if a person can enter an event based on their age and whether they have a VIP pass. The function should return true if the person is at least 18 years old or has a VIP pass, otherwise return false.

function canEnterEvent(age, hasVIPPass) {
    return age > 18 || hasVIPPass;
}

console.log(canEnterEvent(20, false));
console.log(canEnterEvent(16, true));
console.log(canEnterEvent(17, false));
console.log(canEnterEvent(18, false));

//24. Write a function that suggests an activity based on the weather and temperature. If it's sunny and the temperature is above 25°C, suggest "Go to the beach". If it's rainy, suggest "Stay indoors". If it's cloudy and the temperature is below 15°C, suggest "Visit a museum". Otherwise, suggest "Go for a walk".

function suggestActivity(weather, temperature) {

    if (weather === "sunny" && temperature > 25) {
        return "Go to the beach";
    } else if (weather === "rainy") {
        return "Go to the beach";
    } else if (weather === "cloudy" && temperature < 15) {
        return "Visit a museum";
    } else {
        return "Go for a walk";
    }
}

console.log(suggestActivity("sunny", 30));
console.log(suggestActivity("rainy", 20));
console.log(suggestActivity("cloudy", 10));

//25. Write a function that calculates the monthly fee for a gym membership based on the user's age and whether they are a student. If the user is under 18 or a student, they get a 50% discount. If the user is over 60, they get a 30% discount. Otherwise, they pay the full price of $50.

function calculateGymFee(age, isStudent) {
    const fullPrice = 50;

    if (age < 18 || isStudent) {
        return fullPrice * 0.5;
    } else if (age > 60) {
        return fullPrice * 0.7;
    }

    return fullPrice;
}

console.log(calculateGymFee(16, false));
console.log(calculateGymFee(22, true));
console.log(calculateGymFee(65, false));
console.log(calculateGymFee(30, false));