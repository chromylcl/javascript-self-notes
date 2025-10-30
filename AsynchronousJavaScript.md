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
<img width="492" height="285" alt="image" src="https://github.com/user-attachments/assets/6e57af99-ef34-4f77-b8fc-6176b9b8b1d7" />

- here whats happening:
- **The fetch function returns a promise.**
- **We handle that promise using the then method.**
- **To read the data from the response, we call the json method on the response object, which returns another promise.**
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

## error handling
```
'use strict';
const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
const renderCountry = function (data, className = '') {
  const html = `
      <article class="country ${className}">
        <img class="country__img" src="${data.flags.png}" />
        <div class="country__data">
          <h3 class="country__name">${data.name.common}</h3>
          <h4 class="country__region">${data.region}</h4>
          <p class="country__row"><span>👫</span>${(
            data.population / 1000000
          ).toFixed(1)}M people</p>
          <p class="country__row"><span>🗣️</span>${
            Object.values(data.languages)[0]
          }</p>
          <p class="country__row"><span>💰</span>${
            Object.values(data.currencies)[0].name
          }</p>
        </div>
      </article>`;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};
const request = fetch('https://restcountries.com/v3.1/name/portugal');
console.log(request);
const renderError = function (msg) {
  countriesContainer.insertAdjacentElement('beforeend', msg);
  countriesContainer.style.opacity = 1;
};
const getData = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(
      (response) => response.json(),
      (err) => alert(err)
    )
    .then(function (data) {
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];
      if (!neighbour) return;
      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
    })

    .then((response) => response.json())
    .then((data) => renderCountry(data[0], 'neighbour'))
    .catch((err) => {
      console.log('error');
      renderError(`something went wrong ${err.msg}.Try again`);
    });
};
getData('india');
btn.addEventListener('click', function () {
  getData('india');
});
```

- `.then()` is always called after the promise is fullfilled.
- `.catch()` is always called when promise is rejected.
- `.finally()` finally method executes a callback regardless of promise fulfillment or rejection. like the **loading circle**.






# 🧠 1️⃣ The Problem --- Why We Need to "Throw" Errors Manually

When we use `fetch()` in JavaScript like this:

``` js
fetch('https://restcountries.com/v3.1/name/xyzcountry')
```

If that country doesn't exist, the API gives a 404 error (resource not
found).\
BUT --- here's the surprise 👇

❗Even though it's a 404 (error on the server), the `fetch()` Promise
does **NOT** reject.

Instead, it resolves successfully, giving you a "Response" object with:

    response.ok = false
    response.status = 404

So your `.then()` still runs --- even though your request failed.\
That's why your next `.then()` tries to read `data.flags.png` --- but
data is empty ---\
and you get:

    Cannot read properties of undefined.

------------------------------------------------------------------------

## 🧱 2️⃣ The Fix --- "Throwing" Your Own Error

Since `fetch()` doesn't automatically reject,\
we must manually reject the Promise when something is wrong.

That's done by using:

``` js
if (!response.ok) throw new Error(`Country not found (${response.status})`);
```

`throw new Error()` → creates and throws a new error object\
Throwing an error inside `.then()` → immediately rejects the current
Promise\
The rejection is caught by the nearest `.catch()`

✅ **Example:**

``` js
fetch('https://restcountries.com/v3.1/name/xyzcountry')
  .then(response => {
    if (!response.ok)
      throw new Error(`Country not found (${response.status})`);
    return response.json();
  })
  .then(data => console.log(data))
  .catch(err => console.error(`${err.message} 💥`));
```

🧩 **Output:**

    Country not found (404) 💥

No weird "Cannot read undefined" errors anymore.\
You've created a clean, readable, intentional rejection.

------------------------------------------------------------------------

## ⚙️ 3️⃣ What Happens Behind the Scenes

When `throw new Error()` executes:

1.  The current `.then()` handler stops immediately\
2.  The Promise becomes **rejected**\
3.  The control "jumps down" to the nearest `.catch()` handler

This flow is just like `try...catch` in synchronous code,\
but here it's asynchronous --- inside Promises.

------------------------------------------------------------------------

## 🧰 4️⃣ The Helper Function --- getJSON()

To avoid repeating this logic in every fetch, we create a reusable
helper function:

``` js
function getJSON(url, errorMessage = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok)
      throw new Error(`${errorMessage} (${response.status})`);
    return response.json();
  });
}
```

Now instead of writing 5 lines every time, we can simply do:

``` js
getJSON(`https://restcountries.com/v3.1/name/portugal`, 'Country not found')
  .then(data => console.log(data))
  .catch(err => console.error(err));
```

------------------------------------------------------------------------

## 🌍 5️⃣ Example: Country + Neighbor + Neighbor's Neighbor

Here's how the full flow works with error handling:

``` js
const getJSON = function (url, errorMessage = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok)
      throw new Error(`${errorMessage} (${response.status})`);
    return response.json();
  });
};

const getCountryData = function (country) {
  getJSON(`https://restcountries.com/v3.1/name/${country}`, 'Country not found')
    .then(data => {
      const neighbour = data[0].borders?.[0];
      if (!neighbour) throw new Error('No neighbor found!');
      return getJSON(
        `https://restcountries.com/v3.1/alpha/${neighbour}`,
        'Neighbor not found'
      );
    })
    .then(data => console.log(data[0]))
    .catch(err => console.error(`${err.message} 💥`));
};

getCountryData('india');
```

------------------------------------------------------------------------

## ⚡️ 6️⃣ What Happens Step by Step

  Step   Code Stage              What Happens
  ------ ----------------------- ----------------------------------
  1      `fetch()` runs          Sends HTTP request
  2      Response arrives        `response.ok` checked
  3      If ok == false          Throws new error
  4      Promise rejects         Jumps to `.catch()`
  5      If OK                   Continues with `.then()`
  6      If neighbor missing     Throws "No neighbor found" error
  7      `.catch()` catches it   Shows clean error message

------------------------------------------------------------------------

## 💡 Key Takeaways

  -----------------------------------------------------------------------
  Concept                             Meaning
  ----------------------------------- -----------------------------------
  `fetch()`                           Returns Promise → only rejects on
                                      network failure, not on 404

  `response.ok`                       Boolean → true if 200--299

  `throw new Error()`                 Manually rejects Promise

  `.catch()`                          Handles all thrown or automatic
                                      errors

  `getJSON()`                         Helper to make clean, reusable
                                      fetch logic

  `throw` inside `.then()`            Instantly jumps to `.catch()` below
  -----------------------------------------------------------------------

------------------------------------------------------------------------

✅ **Summary in one line:**\
`throw new Error()` inside `.then()` = instantly rejects that Promise,
skipping to `.catch()`, allowing you to handle failures cleanly.


## Geocoding challenge
```js
const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
const renderCountry = function (data, className = '') {
  const html = `
      <article class="country ${className}">
        <img class="country__img" src="${data.flag}" />
        <div class="country__data">
          <h3 class="country__name">${data.name}</h3>
          <h4 class="country__region">${data.region}</h4>
          <p class="country__row"><span>👫</span>${(
            data.population / 1000000
          ).toFixed(1)}M people</p>
          <p class="country__row"><span>🗣️</span>${
            Object.values(data.languages)[0]
          }</p>
          <p class="country__row"><span>💰</span>${
            Object.values(data.currencies)[0].name
          }</p>
        </div>
      </article>`;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};
const rendError = function (msg) {
  countriesContainer.insertAdjacentElement('beforeend', msg);
  countriesContainer.style.opacity = 1;
};
const whereAmI = function (lat, lng) {
  fetch(
    `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`
  )
    .then((res) => {
      if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
      return res.json();
    })
    .then((data) => {
      console.log(data);
      console.log(`You are in ${data.city} , ${data.countryCode}`);

      return fetch(`https://restcountries.com/v2/name/${data.countryName}`);
    })
    .then((res) => {
      if (!res.ok) throw new Error(`Country not found!`);
      return res.json();
    })
    .then((data) => renderCountry(data[0]))
    .catch((err) => console.log(`${err.message} 🔥`));
};
whereAmI(21.1458, 79.088155);
```
