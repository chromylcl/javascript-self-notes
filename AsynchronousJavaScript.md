# Synchronous Code

<img width="937" height="545" alt="image" src="https://github.com/user-attachments/assets/988d2855-f119-44f4-ab51-a4b8f8665e40" />

- To understand what asynchronous JavaScript code actually is, we first need to understand what synchronous code is, which is basically the opposite of asynchronous. Most of the code that we've been writing so far in the course has been synchronous code. Synchronous simply means that the code is executed line by line, in the exact order of execution that we defined in our code, just like in this small example.
- Each line of code always waits for the previous line to finish execution.
- This can create problems when one line of code takes a long time to run. For example, in this current line of code, we have an alert statement, which creates this alert window. As we've experienced in the past, this alert window will block the code execution. Nothing will happen on the page until we click that OK button. Only then can the code continue executing. The alert statement is a perfect example of a long-running operation which blocks execution of the code. Only after we click OK does the window disappear and the next line can run.

# Asynchronous Code
<img width="937" height="534" alt="image" src="https://github.com/user-attachments/assets/c4649f11-edd9-48bd-a556-f7ceb8e9935b" />
- **Note**: Callback functions alone do not make code asynchronous!

# AJAX CALLS:
- Asynchronous JavaScript And XML : Allows us to communicate with remote web services in **asynchronous** way. With AJAX calls, we can **request data** from web servers dynamically.

<img width="943" height="447" alt="image" src="https://github.com/user-attachments/assets/1b04dbde-6be3-4fba-87f4-47ce419ca6a1" />


**API?**:
<img width="943" height="474" alt="image" src="https://github.com/user-attachments/assets/fb5dffe8-9238-4611-8f11-ef25399303f6" />

- **XML** is a data format used by API but nowadays JSON data format is used by API's.
- **First API CALL using XML**:
```
'use strict';
const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.com/v3.1/name/portugal');
request.send();
console.log(request.responseText);

request.addEventListener('load', function () {
  const data = JSON.parse(this.responseText);
  console.log(data);
  const html = `<article class="country">
          <img class="country__img" src="${data.flag}" />
          <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 1000000
            ).toFixed(1)}</p>
            <p class="country__row"><span>🗣️</span></p>
            <p class="country__row"><span>💰</span>CUR</p>
          </div>
        </article>
        `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
});

getCountryData('portugal');
```
<img width="395" height="423" alt="image" src="https://github.com/user-attachments/assets/5fd73118-cb30-4cda-a831-697aa460cbc2" />
- First, Checking with DNS.
- Then, a TCP/IP socket connection is setup. (how data travels across internet)
- Then a HTTP request is made.
- <img width="557" height="138" alt="image" src="https://github.com/user-attachments/assets/bc78c726-27e6-4daa-b035-273d01d9a3f8" />
- HTTPS is encrypted with TLS.
- Then HTTP Response is sent.
- <img width="547" height="127" alt="image" src="https://github.com/user-attachments/assets/33263f19-3154-4543-a26f-99af97d16928" />



- Displaying **neighbour** countries :
https://github.com/chromylcl/javascript-self-notes/blob/main/AJAX.js

# Promises
- In the previous video, we encountered Callback Hell, which was quite problematic. In this lecture, we will learn about a modern JavaScript feature called Promises that helps us escape Callback Hell. Before diving into promises, let's first see one in action by replacing the old XML HTTP request function with the modern way of making AJAX calls using the Fetch API.
- An object that is used as a plaeholder for the future result of an asynchronous operation.
- A container for an asynchronous delivered value.
- A container for a future value. (Response coming from AJAX calls)
- Ex: Lottery ticket
- I buy a lottery ticket(promise)
- Lottery draw happens asynchronously.
- If correct outcome, I receive money.
- **Advantages**:
- Promises eliminate the need to rely on events and callback functions to handle asynchronous results, which can sometimes cause unpredictable behavior.
- Promises allow chaining for sequences of asynchronous operations instead of nesting callbacks. This chaining capability helps us finally escape Callback Hell.
- **Life Cycle of a Promise**:
- Promises are time-sensitive and change states over time. The life cycle of a promise includes:
- **Pending**: The initial state before any value is available. The asynchronous task is **still running**.
- **Settled**: The promise has **finished** and is either:
- *Fulfilled*: The asynchronous task succeeded, and the expected value is available.
- *Rejected*: The asynchronous task failed, such as when a user is offline and cannot connect to an API.
- Once a promise is settled, its state remains unchanged forever.
- Returning to the lottery ticket analogy, the lottery draw is the asynchronous task determining the result. Once the result is available, the ticket (promise) is settled.
- If the guess was correct, the ticket is fulfilled and you receive money; if not, the ticket is rejected and you lose your money.
- Understanding these states is crucial because when using promises in code, we handle different states to perform actions based on success or failure.
- **Consume a promise** : When we already hav a promise.
- Build a promise: Fetch API returs a promise.
- And then we consume that promise returned fro the Fetch API .

```
/*const request = fetch('https://restcountries.com/v3.1/name/portugal');
console.log(request);*/
const getCountryData = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
};
getCountryData('portugal');
```
- here whats happening:
- The fetch function returns a promise.
- We handle that promise using the then method.
- To read the data from the response, we call the json method on the response object, which returns another promise.
- We return this promise and handle it with another then method.
- The resolved value of this second promise is the actual data we want.
- Finally, we render the first country from the data array by calling `renderCountry(data[0])`.
- This completes the process of fetching and consuming data using promises.
- The code almost reads like English sentences: `fetch` something, get a `response`, transform it to `JSON`, then `render` the country to the DOM.
- Promises do not eliminate callbacks but help avoid callback hell, especially as complexity increases, such as when loading neighboring countries.

## Chainig promises
- Promises can be chained to perform sequential asynchronous operations, such as multiple Ajax calls.
- The then method always returns a new promise, allowing for flat and readable chains instead of nested callbacks.
- Returning a promise inside a then handler enables chaining the next then on the returned promise's fulfillment value.
- Avoid nesting then calls inside other then handlers to prevent callback hell; instead, return promises and chain externally.
# 🚀 Understanding Promise Chaining in JavaScript

Promises make asynchronous JavaScript cleaner and easier to manage — especially when performing multiple async operations in sequence (like API calls).

This guide explains:
- How Promise chaining works
- Why `.then()` always returns a new Promise
- How to return Promises correctly
- How to avoid nesting (callback hell)

---

## 🧩 1️⃣ Promises Can Be Chained for Sequential Operations

Imagine you need to:
1. Fetch user data  
2. Then fetch that user’s posts  
3. Then fetch post comments  

Instead of deeply nested callbacks 👇

### ❌ Callback Hell Example
```js
getUser(1, (user) => {
  getPosts(user.id, (posts) => {
    getComments(posts[0].id, (comments) => {
      console.log(comments);
    });
  });
});


