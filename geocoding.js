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
