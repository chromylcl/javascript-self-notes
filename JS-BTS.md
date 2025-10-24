1. High level
Its a high level programming language as it does not require to manage resource manually for the developer as in case of C.
2. Garbage-collected
Cleaning the memory so we dont have to.
3. Interpreted or just-in-time compiled
conversion of Human code to machine code is done in JS engine.

4. Multi-paradigm
**Paradigm** : An approach and mindset of structuring code, which will direct your coding style and technique.
such as:
- procedural programming
- Object-oriented-programming (OOP)
- FUNDAMENTAL PROGRAMING (FP)
- 
5. Prototype-based object-oriented
  <img width="623" height="432" alt="image" src="https://github.com/user-attachments/assets/0a889470-4068-4a40-9162-39f497eb24ee" />

6. First-class functions
-> In a language with **first-class-functions**,functions are simply treated as variables. We can pass them into other functions, and return them from functions.

7. Dynamic
-> Dynamically typed language:
   - No datatype definitions. Types become known at runtime.
   - Data type of variable is automatically changed (reinterpretetion).

8. Single-threaded
<img width="578" height="413" alt="image" src="https://github.com/user-attachments/assets/ed971fac-fbea-4a4f-8db4-272756f8c97b" />


# JavaScript Engine: 
- The program that executes the JS code.
- Ex. V8 Engine
- Any jS engine consist of **CALL STACK** and **HEAP**.
Call Stack is where actually our codes get executed.
Heap is unstructured memory pool where objects are stored.
<img width="877" height="375" alt="image" src="https://github.com/user-attachments/assets/f7bfe0af-1555-4e72-9316-2081099d8167" />

- **JIT**
<img width="900" height="134" alt="image" src="https://github.com/user-attachments/assets/2296cc19-b011-41b7-ad70-163b9b4aa9c9" />

## How code is executed in JS??
1. Firstly it is parsed (reading the program) and then sent to AST (structured tree) where program is structured.
<img width="853" height="424" alt="image" src="https://github.com/user-attachments/assets/cac8a556-4ad7-435a-b0fa-6a9a39cd4b31" />
2. Next step is compilation, it takes the AST and generate it into the machine code.
3. This machine code is executed then. It happens in **CALL STACK**.

## JS runtime in the Browser
- JS runtime is like a big box container , the things which we need to use JavaScript.
- Heart of any JS runtime is the JS Engine. (HEAP and CALL STACK)
- **Web API's** : Functionality provided to the engine, accesible on window object. (DOM , Timers, Fetch API, etc)
- **CALLBACK Queue**: Data Structure containing all the call back functions. (`click`, `timer` and `data`)
- For example : `click` event handler function,  here when we click a callback function will be called (onClick) it is put into the callback queue then it is sent to CALLSTACK ,, This is what called as **Event LOOP**(taking function from the callback and puting them into the CALLSTACK queue).
<img width="946" height="578" alt="image" src="https://github.com/user-attachments/assets/df542af5-b3ba-4262-bd99-775604bad9cd" />

## Execution Context:
Environment in which a piece of JavaScript is executed. Stores all the necessary information for some code to be executed.
It is just a **CPU** processing the code it received.
<img width="892" height="497" alt="image" src="https://github.com/user-attachments/assets/5865f948-9282-4ab8-a673-5f16bb822db7" />
<img width="945" height="600" alt="image" src="https://github.com/user-attachments/assets/40e56ae6-c6e2-45ec-953c-7ecb44ef3bf9" />

# The CALL STACK
<img width="575" height="451" alt="image" src="https://github.com/user-attachments/assets/e6183a58-c8dc-496a-a80d-954485bb64d5" />
<img width="875" height="514" alt="image" src="https://github.com/user-attachments/assets/38ae9b59-2d55-4b3d-97f9-88ecc697eee1" />
In the above image we saw first function call execution and then second function call execution but after then return statement in each function it will be fully executed and hence no requirement in the stack.
<img width="941" height="574" alt="image" src="https://github.com/user-attachments/assets/45f43fb1-6bdb-48c0-ad22-4d93526d5c11" />


# Scoping in JavaScript
<img width="854" height="479" alt="image" src="https://github.com/user-attachments/assets/c612787e-94db-4ab8-aa42-2884af556a06" />

**3 Types of scope in JS**
<img width="936" height="590" alt="image" src="https://github.com/user-attachments/assets/993eedb6-aeb6-47f7-bcd8-44904c0e78a1" />

# The Scope Chain
Order in which functions are written in the code.
<img width="929" height="542" alt="image" src="https://github.com/user-attachments/assets/1d547dd1-9db2-4d0d-96df-56f9fd518467" />

if it doesnot see a variable in its own scope then it will look in different scope for the variables. This create a **Scope Chain**. It can only look up in scope chain not down. For ex: `first()` cannot has access to the `job` variable.
<img width="931" height="565" alt="image" src="https://github.com/user-attachments/assets/c4d55a28-dcd4-43d7-8433-873948808f57" />

## Scope chain Vs. CALL STACK
<img width="499" height="533" alt="image" src="https://github.com/user-attachments/assets/606e25f7-b9be-4c16-ab33-7ee84dabd992" />

<img width="932" height="552" alt="image" src="https://github.com/user-attachments/assets/535d322e-c470-4996-88a8-0c7ee1561654" />

**Note:** `third()` function has different scope because it is declared in global EC , vice-versa for `second()` .
## Summary: 
<img width="829" height="337" alt="image" src="https://github.com/user-attachments/assets/14991f0b-02df-40f4-98ca-bfd0541a5a9a" />

## JavaScript Hoisting
<img width="935" height="586" alt="image" src="https://github.com/user-attachments/assets/a1a9e6e5-69e7-4d58-bc19-550b41dccda8" />


## TDZ
<img width="892" height="317" alt="image" src="https://github.com/user-attachments/assets/329d0465-3ef5-40bd-a905-98fc07a93868" />
<img width="900" height="170" alt="image" src="https://github.com/user-attachments/assets/ed7fbb00-156b-44b7-86d2-59a553ed9bec" />

## this keyword:
<img width="912" height="487" alt="image" src="https://github.com/user-attachments/assets/ca3aefe3-6457-4c3d-b7bd-14f0c1ac8f51" />
<img width="900" height="477" alt="image" src="https://github.com/user-attachments/assets/3f85c690-cbb5-4a29-aa49-f10941a5f9c2" />

the one who called the function , this points toward them, for ex: `matilda.calcAge();` here this will points toward matilda.
| Where used                            | What `this` refers to                |
| ------------------------------------- | ------------------------------------ |
| Inside object method                  | The object itself                    |
| Inside regular function (non-strict)  | Global object (`window` or `global`) |
| Inside regular function (strict mode) | `undefined`                          |
| Inside arrow function                 | Inherits from parent scope           |
| Inside class method                   | The instance of the class            |
🎯 Pro tip:

If you ever get confused about this, just ask:

“Who is calling this function?”

That’s who this will refer to.

## Functions Vs. Arrow functions
- Arrow functions do not have their own this keyword and inherit it from their parent scope.
- Never use arrow functions as methods in objects, as they can lead to unexpected behavior with this.
- Variables declared with var become properties of the global object, which can cause bugs when combined with arrow functions.
- Regular functions have access to the arguments keyword, while arrow functions do not.
- Use arrow functions inside methods to inherit the correct this value, or use a variable like self to preserve context.

### Memory Management
 - Unlike other languages memory is automatically managed by JavaScript behid the scenes.
 - Every value create in JavaScript through a memory lifecycle.
Here `let temp = 23.7` (memory allocated) while the code is running, the value is written, read and updated in the allocated piece of memory.
- When no longer neede,the value is deleted from memory to free up resources. The released memory is used for new values.

**Where is memory Allocated?**
- **Primitives** (Numbers,String,Boolean,Undefined,Null,Symbol,BigInt) are stored in CALL STACK.
- **OBJECTS** (object literals, Arrays, Functions, many more..) is stored in HEAP.
- **Reference to objects** are also stored in CALL STACK.
![WhatsApp Image 2025-10-24 at 23 59 28_4bfebe8e](https://github.com/user-attachments/assets/baca05ca-0c10-464c-87c7-bcc97a3ab5cc)

## Object References (SHALLOW Vs. DEEP)
First see the code below: 
```
'use strict';
const jessica = {
  firstname: 'Jessica',
  lastname: 'Amsterdam',
  age: 27,
};

function marryPerson(orgperson, newLastName) {
  orgperson.lastname = newLastName;
  return orgperson;
}
const marriedjessica = marryPerson(jessica, 'Davis');
//const marriedjessica = jessica;
//marriedjessica.lastname = 'Davis';

console.log('Before', jessica);
console.log('After', marriedjessica);

// we cannot change values in jessica as it is const
const jessica2 = {
  firstname: 'Jessica',
  lastname: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};
//Shallow copy
const jessicacopy = { ...jessica };
jessicacopy.newLastName = 'Davis';
console.log(jessica, jessicacopy);
jessicacopy.family.push('Mary');
console.log('Before', jessica);
console.log('After', jessicacopy);

//Deep copy
const jessicaclone = structuredClone(jessica);
jessicaclone.family.push('Johnathan');
```
**Shallow Copy and Its Limitations:**
- However, when we modify the family array inside jessicaCopy by adding "Mary" and "John", both jessicaCopy and jessica2 show these new family members. This is unexpected because we thought they were independent.
- This happens because the spread operator only copies the first level of properties. The family property is an array, which is an object itself, so only the reference to the array is copied, not the array itself.
- Thus, both jessicaCopy and jessica2 have their family property pointing to the same array in the heap. This is called a shallow copy, where only the first level is copied, but nested objects are shared.

**Deep Copy (Deep Clone)**
- What we want instead is a deep copy or deep clone, which copies the entire object including all nested objects, so that the copy is completely independent.
- In modern browsers, we can use the structuredClone function to create a deep clone of an object. For example, jessicaClone = structuredClone(jessica) creates a deep copy of jessica.
- Now, if we add "Mary" and "John" to the family array of jessicaClone, the original jessica object remains unchanged. This solves the problem of shared nested objects.
- The structuredClone function is a significant improvement over previous methods, which required external libraries like Lodash to perform deep cloning.

## RELEASING MEMORY
![WhatsApp Image 2025-10-25 at 00 41 45_03b5f6e7](https://github.com/user-attachments/assets/eda0fcdf-c7c0-4fda-83d7-2fd6b660de30)
![WhatsApp Image 2025-10-25 at 00 41 46_98e67666](https://github.com/user-attachments/assets/4d14b4ab-521d-4458-97db-c24d26b2fde3)
![WhatsApp Image 2025-10-25 at 00 41 46_ad6c4028](https://github.com/user-attachments/assets/bd345eeb-03ad-4059-bc5e-bec8a4325203)
![WhatsApp Image 2025-10-25 at 00 41 47_93084af6](https://github.com/user-attachments/assets/be76f4d4-c53b-4dd9-9670-76f60e5a0c8d)
![WhatsApp Image 2025-10-25 at 00 41 47_34211094](https://github.com/user-attachments/assets/3529453b-83e1-4ab7-b8fe-ccc9ee2cc6ac)
**Note:** 
- Pink object has no roots to be tracked so he is dead!
- If reference to green is deleted then al blue etc gets deleted.
- Global EC will always be there XD .
- A **memory leak** occurs when an object no longer needed by the application remains reachable by the garbage collector from a root, causing it to be marked alive and not deleted. This is analogous to forgetting to throw away items you no longer need, cluttering your house unnecessarily. In JavaScript, common causes include old and unnecessary event listeners and timers that continue referencing objects. To avoid memory leaks, always deactivate timers and event listeners when no longer required, especially if they reference large objects. Also, avoid declaring **large objects** as global variables, as these will never be **garbage collected**.




