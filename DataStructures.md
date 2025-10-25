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

## Spread operator
- We can use the spread operator to basically expand an array into all its elements, unpacking all the array elements at once.
- Let's say we have an array: [7, 8, 9]. Now, we want to create a new array based on this array but with some new elements at the beginning. How would we do that?
- With what we already know, we would need to loop over this array or, even worse, do it manually. For example, like this:
```
const badNewArray = [1, 2, arr[0], arr[1], arr[2]];
```
- Now, we want a new array with the three original elements and then 1, 2 at the beginning of that array. This is a common operation, and since **ES6**, we can do it in a much better way using the spread operator.
- With the spread operator, it works like this:
```
const newArray = [1, 2, ...arr];
```
- Let's see a more useful example. Suppose we want to create a new array with one more food item added to the main menu array (restaurant.mainMenu).
```
const newMenu = [...restaurant.mainMenu, 'gnocchi'];
```
- This creates a new array with the three original elements plus 'gnocchi'. Note that this creates a completely new array and **does not mutate** restaurant.mainMenu.
- To join two arrays together, for example, the starter menu and main menu:
```
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
```
- Although the spread operator works on arrays, it actually works on all so-called iterables. Iterables in JavaScript include arrays, strings, maps, and sets, but not objects.
- Since strings are iterables, we can use the spread operator on strings as well. For example:
```
const letters = [...'Jonas', '', 'S'];
console.log(letters);
```
- For example, a method to order pasta that always needs exactly three ingredients:
```
orderPasta(ing1, ing2, ing3) {
  console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}.`);
}
```
- We can collect ingredients from user input using prompt windows and store them in an array:
```
const ingredients = [
  prompt("Let's make pasta. Ingredient one?"),
  prompt("Ingredient two?"),
  prompt("Ingredient three?")
];
```
- To call the orderPasta function with these ingredients, instead of passing each element manually, we use the spread operator:
```
orderPasta(...ingredients);
```
- This expands the elements of the ingredients array into individual arguments, which is much cleaner and works for arrays of any length.

- Since ES2018, the spread operator also works on objects, even though objects are not iterables.

- For example, to create a new restaurant object based on an existing one with additional properties:
```
const newRestaurant = {
  ...restaurant,
  founder: 'Giuseppe',
  foundedIn: 1998
};
```
- This copies all properties from the original restaurant object and adds new properties founder and foundedIn.
- We can also create shallow copies of objects using the spread operator:
```
const restaurantCopy = { ...restaurant };
```
- This confirms that the spread operator creates a shallow copy, preventing changes in one object from affecting the other.

## Rest patter and parameters:
Remember that we used the spread operator to build new arrays or to pass multiple values into a function. In both cases, we use the spread operator to expand an array into individual elements. The rest pattern uses the exact same syntax but to collect multiple elements and condense them into an array. So, the spread operator unpacks an array, while the rest pattern packs elements into an array.

- **Using the rest patter in Array Destructing**: Let's explore the use case of building an array using the rest pattern. Previously, we used the spread operator on the right-hand side of the assignment operator to create a new array based on an existing one. Here, we can also use the three dots syntax on the left-hand side of the assignment operator together with destructuring.
```
const arr = [2, 3, 4, 5];
const [a, b, ...others] = arr;
console.log(a, b, others);
```
- In this example, the first element is stored in variable a, the second in b, and the rest of the elements are collected into a new array called others. This demonstrates how the rest pattern collects the remaining elements of the array that were not assigned to individual variables.
- **Using Rest Pattern with Skipped Elements**:We can also use the rest pattern while skipping elements in the destructuring assignment. For example, if we have a menu array and want to **extract specific items** while collecting the rest, we can do the following:
```
const mainMenu = ['pizza', 'pasta', 'risotto', 'salad'];
const [pizza, , risotto, ...otherFood] = mainMenu;
console.log(pizza, risotto, otherFood);
```
- Here, pizza and risotto are assigned the first and third elements respectively, while the rest of the elements after risotto are collected into the otherFood array.
- Note that the rest pattern collects all elements after the last assigned variable and does not include skipped elements. Therefore, the rest pattern must always be the last element in the destructuring assignment, and there can only be one rest element.
- **Rest Pattern in Object Destructuring**: The rest pattern also works with objects. Instead of collecting remaining elements into an array, it collects remaining properties into a new object. For example, given an object representing opening hours:
```
const openingHours = {
  thu: { open: 12, close: 22 },
  fri: { open: 11, close: 23 },
  sat: { open: 0, close: 24 }
};

const { sat, ...weekdays } = openingHours;
console.log(weekdays);
```
- In this example, the property sat is extracted into its own variable, and the rest of the properties are collected into a new object called weekdays. This shows how the rest pattern collects the remaining properties into a new object during destructuring.
- **Rest Parameters in Functions**:The rest pattern is also used in function parameters, known as rest parameters. This allows a function to accept an arbitrary number of arguments, which are then packed into an array. For example, consider a function to add numbers:
```
function add(...numbers) {
  console.log(numbers);
}

add(2, 3);
add(5, 3, 7, 2);
```
- Here, the function add uses rest parameters to collect all passed arguments into the array numbers. This allows the function to handle any number of arguments flexibly.
- **Combining Spread and Rest**: We can also combine spread and rest operators. For example, if we have an array of numbers and want to pass them as arguments to the add function, we use the spread operator:
```
const x = [23, 5, 7];
add(...x);
```
- Here, the spread operator expands the array x into individual arguments, which are then collected back into an array by the rest parameters in the add function. This illustrates how spread and rest are opposites: spread unpacks elements, rest packs them.
- **Practical Example: Rest Parameters in a Restaurant Method**: Let's apply rest parameters in a restaurant example. We define a method to order pizza where the main ingredient is required, and other ingredients are optional:
```
orderPizza(mainIngredient, ...otherIngredients) {
  console.log(mainIngredient);
  console.log(otherIngredients);
}
```
- When calling this method with multiple ingredients, the first argument is assigned to mainIngredient, and the rest are collected into the otherIngredients array:
```
restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
```
- This logs mushrooms as the main ingredient and an array of the remaining ingredients. If only one ingredient is provided, the rest array will be empty but still available for use.

**Summary**:
- To recap, the spread and rest syntax both look exactly the same but work in opposite ways depending on where they are used. The spread operator is used where we would otherwise write **values** separated by commas, while the rest pattern is used where we would write **variable names** separated by commas. This subtle distinction helps determine when to use spread or rest in JavaScript.


### Logical Assignment Operators:
- **Creating Restaurant Objects**:Let us begin by creating two simple restaurant objects. Each object will have a name, and one will have a numGuests property while the other will have an owner property.
```
const restaurant1 = {
  name: 'Capri',
  numGuests: 20
};

const restaurant2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi'
};
```
- **Setting Default Values Using the OR Operator**:Suppose we want to set a default number of guests for all restaurant objects that do not have that property. We can use the OR operator to achieve this, leveraging short-circuiting behavior.
```
restaurant1.numGuests = restaurant1.numGuests || 10;
restaurant2.numGuests = restaurant2.numGuests || 10;
```
- If the property numGuests exists and is truthy, its value is retained. Otherwise, it is set to 10. This works because the OR operator returns the first truthy value.
- **Introducing the OR Assignment Operator**: The OR assignment operator (||=) allows us to write the same logic in a more concise way. It assigns a value to a variable if that variable is currently falsy.
```
restaurant1.numGuests ||= 10;
restaurant2.numGuests ||= 10;
```
- This operator is equivalent to the previous OR operation but is more concise. It will assign 10 only if the current value is falsy.
- **Limitation of the OR Assignment Operator**: If we set the number of guests to zero, which is a valid value, the OR assignment operator will still assign 10 because zero is a falsy value.
```
restaurant1.numGuests = 0;
restaurant1.numGuests ||= 10;
```
- After running this code, numGuests becomes 10 again, even though we set it to zero. This is because zero is considered falsy.
- **The Nullish Assignment Operator**: To address this limitation, we use the nullish assignment operator (??=), which only assigns the value if the variable is null or undefined.
```
restaurant1.numGuests ??= 10;
restaurant2.numGuests ??= 10;
```
- Now, if numGuests is zero, it will remain zero. The nullish assignment operator only assigns the value if the variable is currently null or undefined.
- **The AND Assignment Operator**: There is also the logical AND assignment operator (&&=). This operator assigns a value to a variable only if it is currently truthy. For example, if we want to anonymize the names of restaurant owners only if an owner exists:
```
restaurant1.owner &&= 'Anonymous';
restaurant2.owner &&= 'Anonymous';
```
- If the owner property exists and is truthy, it is replaced with 'Anonymous'. If it does not exist, nothing happens and the object remains unchanged.
**Summary**:
  - Logical assignment operators provide concise and expressive ways to assign values based on the current state of variables. The OR assignment operator assigns if the variable is falsy, the nullish assignment operator assigns if the variable is nullish, and the AND assignment operator assigns if the variable is truthy.
