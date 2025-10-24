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
**JIT**
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
- <img width="946" height="578" alt="image" src="https://github.com/user-attachments/assets/df542af5-b3ba-4262-bd99-775604bad9cd" />
