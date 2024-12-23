// Sample JavaScript File for Testing Purposes

// 1. Variables and Data Types
const name = "Test User";
let age = 40;
var isActive = true;

// 2. Array and Object
const fruits = ["apple", "banana", "cherry"];
const user = {
    username: "tester",
    email: "tester@example.com"
};

// 3. Function Definition
function greetUser(userName) {
    return `Hello, ${userName}! Welcome to the test script.`;
}

// 4. Arrow Function
const addNumbers = (a, b) => a + b;

// 5. Conditional Statement
function checkAge(userAge) {
    if (userAge >= 18) {
        console.log("User is an adult.");
    } else {
        console.log("User is a minor.");
    }
}

// 6. Loop Example
for (let i = 0; i < fruits.length; i++) {
    console.log(`Fruit ${i + 1}: ${fruits[i]}`);
}

// 7. DOM Manipulation (if running in browser)
function createTestButton() {
    const button = document.createElement('button');
    button.innerText = 'Click Me';
    button.onclick = () => alert('Button clicked!');
    document.body.appendChild(button);
}

// 8. Promise Example
const fetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data fetched successfully!");
        }, 1000);
    });
};

// 9. Async/Await Example
async function getData() {
    try {
        const data = await fetchData();
        console.log(data);
    } catch (error) {
        console.error("Error:", error);
    }
}

// 10. Execution
console.log(greetUser(name));
checkAge(age);
console.log("Sum:", addNumbers(5, 10));
getData();

// Uncomment below if testing in a browser
// createTestButton();
