//Assignment 2

// Name: Chetan Rana
// Intern ID: INT898
// Javascript Assignment 2

//1. The world population is 7900 million people. Create a function declaration called 'percentageOfWorld1' which receives a 'population' value, and returns the percentage of the world population that the given population represents. For example, China has 1441 million people, so it's about 18.2% of the world population.

// -To calaulate the percentage, divide the given 'population' value by 7900 and then multiply by 100
function percentageOfWorld1(population) {
    const worldPopulation = 7900; //millions

    return (population / worldPopulation) * 100;
}

// -Call 'percentageOfWorld1' for 3 populations of countries of your choice, store the results into variables, and log them to the console

//populations in millions
var india = percentageOfWorld1(1393);
var usa = percentageOfWorld1(331);
var china = percentageOfWorld1(1441);

console.log("India: ", india);
console.log("USA: ", usa);
console.log("China: ", china);

// -Create a function expression which does the exact same thing, called 'percentageOfWorld2', and also call it with 3 country populations (can be the same populations)
var percentageOfWorld2 = function (population) {
    return (population / 7900) * 100;
}

//populations in millions
var india = percentageOfWorld2(1393);
var usa = percentageOfWorld2(331);
var china = percentageOfWorld2(1441);

console.log("India: ", india);
console.log("USA: ", usa);
console.log("China: ", china);

// 2. Create a function called 'describePopulation'. Use the function type you like the most. This function takes in two arguments: 'country' and 'population', and returns a string like this: 'China has 1221 million people, which is about 18.2% of the world.'

// -To calculate the percentage, 'describePopulation' call the 'percentageOfWorld1' you created earlier
function describePopulation(country, population) {
    var percentage = percentageOfWorld1(population)
    return `${country} has ${population} million pepole, which is about ${percentage}% of the world.`;
}

// -Call 'describePopulation' with data for 3 countries of your choice
console.log(describePopulation("India", 1393));
console.log(describePopulation("USA", 331));
console.log(describePopulation("China", 1441));