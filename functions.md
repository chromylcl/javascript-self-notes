### 10. Functions
```js
function greet(name) {
  return `Hello, ${name}`;
}
console.log(greet('Alice'));
```
// Function Expression
const square = function(num) {
  return num * num;
};
console.log(square(4));

// Arrow Function (single-line return)
const double = x => x * 2;
console.log(double(5));

// Arrow Function (multiple lines)
const calcAge = birthYear => {
  const age = 2025 - birthYear;
  return age;
};
console.log(calcAge(2000));

// Higher-Order Function
function operate(x, y, operator) {
  return operator(x, y);
}
const add = (a, b) => a + b;
console.log(operate(5, 3, add)); // 8

// Callback with Array Method
const nums = [1, 2, 3];
const squares = nums.map(n => n * n);
console.log(squares); // [1, 4, 9]

// Immediately Invoked Function Expression (IIFE)
(function () {
  console.log("IIFE executed!");
})();
```
