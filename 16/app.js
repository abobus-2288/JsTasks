const list = document.getElementById('list')

const createLi = (country) => {
    const li = document.createElement('li')
    
    const template = `
        <li class="item">
            <img alt="" src="${country.flags.png}"/>
            <div class="info">
                <h2 class="name">${country.name.common}</h2>
                <p class="continent">${country.region}</p>

                <p class="populationContainer">👨‍👩‍👧‍👦 ${(country.population / 1000000).toFixed(1)} млн</p>
                <p class="language">🗣️ ${Object.values(country.languages).join(', ')}</p>
                <p class="currency">💰 ${Object.values(country.currencies)[0].name}</p>
            </div>
        </li>
    `
    
    li.innerHTML = template
    
    list.appendChild(li)
}

fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(countries => {
        countries.forEach(country => {
            createLi(country)
        })
    })