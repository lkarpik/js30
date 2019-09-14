const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

let cities = []

fetch(endpoint)
    .then(data => data.json())
    .then(result => {
        cities.push(...result);
    });

const domItems = {
    input: document.querySelector(".search"),
    suggestions: document.querySelector(".suggestions")
}

domItems.input.addEventListener("keyup", () => {
    search(cities, domItems.input.value);
});

function search(cities, value) {
    const reg = new RegExp(value, "gi");
    const matchedCities = cities.filter(city => {
        if (city.city.match(reg)) {
            return city;
        }
    });
    console.log(matchedCities);
    const htmlSuggestions = matchedCities.map(el => {
        el.city.replace(reg, `<span class="hl">${value}</span>`);
        const newEl = `<li><span>${el.city.replace(reg, `<span class="hl">${value}</span>`)}</span><span class="population">${el.population}</span></li>`;

        return newEl;
    }).join(" ");
    domItems.suggestions.innerHTML = htmlSuggestions;
}