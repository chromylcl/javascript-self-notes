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
[Here is the code].(AJAX.js)
