// #### Reverse a String: Write a function that reverses a given string.
function myName(godwin){
    return godwin.split("").reverse().join("");
}
console.log(myName("Bassey"+ " "+ 50));

// #### Count Characters: Create a function that counts the number of characters in a string
function myCars(n){
}
console.log(`${myCars.length}`);


//#### Capitalize Words: Implement a function that capitalizes the first letter of each word in a sentence
let mySentence = "hope you slept well yesterday";
let words = mySentence.split(" ");

for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substring(1);
}
words.join(' ');
console.log(words);


//####Find Maximum and Minimum: Write functions to find the maximum and minimum values in an array of numbers.

function findMax(arr) {
    return Math.max(...arr);
}

function findMin(arr) {
    return Math.min(...arr);
}
const numbers = [10, 5, 20, 8, 15];
const max = findMax(numbers);
const min = findMin(numbers);
console.log(`Maximum value: ${max}, Minimum value: ${min}`);


//#### Sum of Array: Create a function that calculates the sum of all elements in an array.
function sumArray(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
}

const numbers1 = [10, 5, 20, 8, 15];
const sum = sumArray(numbers);
console.log(`Sum of array: ${sum}`);

//#### Filter Array: Implement a function that filters out elements from an array based on a given condition.

function filterArray(arr, condition) {
    return arr.filter(item => condition(item));
}
const numbers2 = [10, 5, 20, 8, 15];
const filteredNumbers = filterArray(numbers, num => num > 10);
console.log(`Filtered array: ${filteredNumbers}`);



//#### Factorial: Write a function to calculate the factorial of a given number.
function factorialIterative(n) {
    if (n < 0) return -1; // Factorial is not defined for negative numbers
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

let num = 10;
console.log(`Factorial of ${num}: ${factorialIterative(num)}`);

//#### Prime Number Check: Create a function to check if a number is prime or not.

function isPrime(number) {
    if (number <= 1)
        return false;
    for (let i = 2; i * i <= number; i++) {
        if (number % i === 0)
            return false;
    }
    return true;
}

const num = 7;
if (isPrime(num))
    console.log(`${num} is a prime number`);
else
    console.log(`${num} is not a prime number`);




//#### Fibonacci Sequence: Implement a function to generate the Fibonacci sequence up to a given number of terms. (search on the net )

function fibonacci(n) {
    let a = 0, b = 1, c;
    if (n === 0)
        return a;
    for (let i = 2; i <= n; i++) {
        c = a + b;
        a = b;
        b = c;
    }
    return b;
}

const n = 7;
console.log(`The ${n}th Fibonacci Number: ${fibonacci(n)}`);