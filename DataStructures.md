# Arrays Destructing

**What is Destructuring?**: 
- Destructuring is an ES6 feature that unpacks values from arrays or objects into separate variables. In other words, it breaks down complex data structures into smaller parts like variables. For arrays, destructuring retrieves elements and stores them into variables easily.
Let's start with a simple array example. Without destructuring, to retrieve each element into its own variable, we would do the following:
```
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];
```
- With destructuring, we can declare all three variables simultaneously:
```
const [x, y, z] = arr;
```
- This syntax assigns the first element of the array to x, the second to y, and the third to z. This is the destructuring assignment from the right side array. Note that this is not creating a new array but unpacking the existing one.

- Remember to declare variables with const (or let if reassignment is needed) when destructuring.

- The original array remains unaffected by destructuring; we are only unpacking its elements.

# Destructuring with Restaurant Data
- Let's work with the restaurant data which includes arrays such as categories, starter menu, and main menu. For example, to extract the first two categories:
```
const restaurant = {
  name: 'Classico',
  location: 'New Delhi',
  categories: ['Italian', 'Indian'],
  mainMenu: ['Pizza', 'Aloo Paratha'],
};
```

See: 

```'use strict';

const restaurant = {
  name: 'Classico',
  location: 'New Delhi',
  categories: ['Italian', 'Indian', 'Chinese'],
  mainMenu: ['Pizza', 'Aloo Paratha', 'Noodles'],
  starterMenu: ['Garlic Bread', 'Papad', 'Manchurian'],
  order: function (starterindex, mainindex) {
    return [this.starterMenu[starterindex], this.mainMenu[mainindex]];
  },
};

const [first, second] = restaurant.categories;
// for 1st and 3rd
const [main, , third] = restaurant.categories;

//Swapping variables w/o using destructing
//If the restaurant owner wants to switch the main and secondary categories, without destructuring, you would need a temporary variable:
/*let temp = main;
main = third;
third = temp;*/

// with destructing
[main, third] = [third, main];

//This syntax creates a new array with the variables swapped and destructures it back into main and secondary.

console.log(restaurant.order(2, 0));

//nested array
const nested = [2, 4, [5, 6]];
// const [i, j] = nested;
console.log(i, j);
const [i, , [j, k]] = nested;

// Default values

const [p, q, r = 1] = [8, 9];
console.log(p, q, r);
```
## Destructing Objects
```
'use strict';

const restaurant = {
  name: 'Classico',
  location: 'New Delhi',
  categories: ['Italian', 'Indian', 'Chinese'],
  mainMenu: ['Pizza', 'Aloo Paratha', 'Noodles'],
  starterMenu: ['Garlic Bread', 'Papad', 'Manchurian'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },
  order: function (starterindex, mainindex) {
    return [this.starterMenu[starterindex], this.mainMenu[mainindex]];
  },
  orderDeliver: function (starterindex, mainindex, time, address) {
    console.log(
      `Order Received! ${this.starterMenu[starterindex]} and ${this.mainMenu[mainindex]} will be delivered to ${address} at ${time}!  `
    );
  },
};
restaurant.orderDeliver({
  time: '22:30',
  address: 'Chowk',
  mainindex: 2,
  starterindex: 2,
});
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);
// helps in API integration

const {
  name: restaurantsName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantsName, hours, tags);

// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

// nested objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);
```
<img width="697" height="234" alt="image" src="https://github.com/user-attachments/assets/0372b03a-ec17-481c-b7cf-a87379290c9c" />

