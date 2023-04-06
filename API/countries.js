const getCountries = () => {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(countries => displayCountries(countries));
}

const displayCountries = (countries) => {
    console.log(countries);
    const countriesDiv = document.getElementById('countries');
    countries.forEach(country => {
        const div = document.createElement('div');
        div.innerHTML = `
            <p>${country.name}</p>
            <img src='${country.flag}'>
            <button onClick='loadCountryByName()'>Click for Details</button>
        `;
        div.classList = 'country'
        countriesDiv.appendChild(div);

        // const p = document.createElement('p');
        // p.innerText = country.name;
        // p.classList = 'country';
        // countriesDiv.appendChild(p);
        // const img = document.createElement('img');
        // img.setAttribute('src', country.flag)
        // countriesDiv.appendChild(img);
    });
}

const loadCountryByName = name => {
    console.log(name);
}

getCountries();