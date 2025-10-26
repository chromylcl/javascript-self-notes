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
# Destructing Objects
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

# Spread operator
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

# Rest patter and parameters:
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


# Logical Assignment Operators:
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

# for-of loop:
- Looping over arrays.
```
for (const item of menu) console.log(item);

Output:
1.menu
2.menu
.
.
.
.
```
- Ex:
```
for (const item of menu.entries()) console.log(item);

Output:
1,Pizza
2,Latte
```
- Better version
```
for (const [i,el] of menu.entries()){
  console.log(`${i + 1}: ${el}`);
}

Output:
1: Pizza
2: Pasta
```
# Optional Chaining (?.):
- Here first it will check for that property if it exist then it wil show otherwise error.
<img width="943" height="671" alt="image" src="https://github.com/user-attachments/assets/c537918d-fdc8-4642-ad4d-1fe639b5536c" />
- with **arrays** and **methods**:
<img width="941" height="545" alt="image" src="https://github.com/user-attachments/assets/6a8b19cd-c01e-44fa-9618-da53c34c3941" />

# Looping Objects
- We learned about the for...of loop to loop over arrays, which are iterable. However, we can also loop over objects, which are not iterable, but in an indirect way.
- Now, we have different options here, depending on what exactly we want to loop over. Do we want to loop over the object's property names, over the values, or both together?
- **Looping Over Property Names (Keys)**: Let us start by simply looping over property names, which are also called **keys**.
- Ultimately, we will still have to use the for...of loop to loop over an array, but again, we are going to do that in an indirect way. We are not actually looping over the object itself. Instead, we are going to loop over an array.
```
for (const day of Object.keys(openingHours)) {
  console.log(day);
}
```
- ndeed, we get Thursday, Friday, and Saturday, which are exactly the three key names of the object. So, let us take a closer look at this mysterious Object.keys.
```
const properties = Object.keys(openingHours);
console.log(properties);
```
- Indeed, it is an **array** with the three property names.
- **Building a String of Open Days**: We will build a string listing the open days.
```
let openStr = `We are open on ${properties.length} days: `;
for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);
```
- The result is: We are open on three days: Thursday, Friday, Saturday.
- **Looping over Property values**:If we want the property values themselves, we simply use Object.values.
```
const values = Object.values(openingHours);
console.log(values);
```
- To loop over the entire object, we use Object.entries, which gives us both names and values together.
```
const entries = Object.entries(openingHours);
console.log(entries);
```
- Now, we have each key and each value. To print a string like "On the weekday, we open at... and close at...", we can use destructuring.
```
for (const [key, { open, close }] of entries) {
  console.log(`On ${key}, we open at ${open} and close at ${close}.`);
}
```

# SETS
- In the past, JavaScript had very few built-in data structures. Basically, only objects and arrays were available. With ES6, two more data structures were introduced: sets and maps. These are common data structures in other programming languages and now exist in JavaScript as well.
- A set is a collection of unique values. This means a set can never have any duplicates. That property makes them useful in certain situations.

```
const orderSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);
console.log(orderSet);
console.log(new Set('Jonas'));
console.log(orderSet.size);
console.log(orderSet.has('Pizza'));
orderSet.add('Garlic Bread!');
orderSet.clear();
```
- We can't retrieve value from set because order doesnot matter!
```
const orderSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);
console.log(orderSet);
console.log(new Set('Jonas'));
console.log(orderSet.size);
console.log(orderSet.has('Pizza'));
orderSet.add('Garlic Bread!');
const staff = ['Waiter', 'Chef', 'Manager', 'Chef'];
const staffRoles = new Set(staff);
console.log(staffRoles);

// Unpacking with ...Spread operator
const sr = [...new Set(staff)];
console.log(sr);
```
- **Intersection**: Elements present in both of the Sets.
```
const commonFoods = italianfoods.intersection(mexicanfoods);
```
- **Union**: Elements from both sets.
```
const u = italianfoods.union(mexicanfoods);
```
- **Set to array**:
```
const commonFoodsArray = [...commonFoods]
```
- **Finding Unique Elements: Difference**
```
const uniqueItalianFoods = italianFoods.difference(mexicanFoods)
```
- Similarly, we can find the unique Mexican foods by reversing the order.
```
const uniqueMexicanFoods = mexicanFoods.difference(italianFoods)
```
- **Symmetric Difference**: The symmetric difference method gives us all elements present in either set, but not in both. This is the opposite of the intersection method. The order does not matter for this method.
```
const uniqueItalianAndMexicanFoods = italianFoods.symmetricDifference(mexicanFoods)
```
- **Set Relationship Methods**: There are three more methods to check set relationships: isSubsetOf, isSupersetOf, and isDisjointFrom. These methods return Boolean values. For example, isDisjointFrom checks whether two sets are completely different.
```
console.log(italianFoods.isDisjointFrom(mexicanFoods))
```
# MAPS 
- A map is not the same thing that we use in real life to find our way around. In JavaScript, a map is a data structure that we can use to map values to keys. Just like an object, data is stored in key-value pairs in maps. The big difference between objects and maps is that in maps, the keys can have any type, and this can be huge. In objects, the keys are basically always strings, but in maps, we can have any type of key. It could even be objects, arrays, or other maps.
- Let us create a restaurant map. We use the constructor just like we used for the set, but this one is called Map. The easiest way to create a map is to create an empty map without passing anything in. To fill up the map, we use the set method. The first argument is the key name, and the second is the value.
```
const rest = new Map();
rest.set('name', 'Classico Italiano');
```
- The set method is similar to the add method in sets. Both allow us to add a new element to the data structure. We can use any data type that we want as a key. For example, if the restaurant has two locations, we can create a key with a number.
```
rest.set(1, 'Firenze, Italy');
rest.set(2, 'Lisbon, Portugal');
```
- Calling the set method not only updates the map but also returns the map. This allows us to chain the set method.
```
rest.set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
    .set('open', 11)
    .set('close', 23)
    .set(true, 'We are open')
    .set(false, 'We are closed');
```
- **Reading Data from a Map**: To read data from a map, we use the get method. All we need to do is pass in the name of the key.
```
console.log(rest.get('name'));
console.log(rest.get(true));
```
- When we get the elements, the data type of the key matters. If we try to retrieve a value using a string when the key is a number, it will be undefined.
```
console.log(rest.get(1)); // Firenze, Italy
console.log(rest.get('1')); // undefined
```
- **Using Boolean keys for Clever Logic**:
```
const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));
```
- Maps also have methods to check if a map contains a certain key, delete elements, and clear all elements.
```
console.log(rest.has('categories')); // true
rest.delete(2); // Deletes the Lisbon location
console.log(rest.size); // Number of items in the map
rest.clear(); // Removes all elements from the map
```
- **Using Objects and Arrays as Map Keys**:
```
rest.set([1, 2], 'Test');
const arr = [1, 2];
rest.set(arr, 'Test');
console.log(rest.get(arr)); // 'Test'
```
- **Using DOM Elements as Map Keys**:
```
rest.set(document.querySelector('h1'), 'Heading');
```
- **Maps iteration**:
```
const question = new Map([
  ['question', 'What is the best programming language?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct'],
  [false, 'Try again!'],
]);

console.log(question);
```
- for loop:
```
for(const [key,value] of question) 
```
<img width="867" height="320" alt="image" src="https://github.com/user-attachments/assets/62752b6d-e9cf-42ee-85ab-2e1b49d37f35" />
- **MAP to array**:
```
console.log([...question]);
```
# Which Data Structure to use?
<img width="940" height="528" alt="image" src="https://github.com/user-attachments/assets/d8c555b7-569b-46c5-90a8-4f3892c31d81" />
<img width="941" height="532" alt="image" src="https://github.com/user-attachments/assets/1824d629-cf41-47a1-a91a-02c5b1c4c7b0" />

