const apiKey = "a40c3799b23b4d6787e7fa38417463be"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="
const cityName = document.querySelector('.city')
const cityTemp = document.querySelector('.temp')
const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherIcon = document.getElementById('weather-icon');
const cloudsIcon = "fa-solid fa-cloud"
const rainIcon = "fa-solid fa-cloud-rain"
const clearIcon = "fa-solid fa-sun"
const drizzleIcon = "fa-solid fa-cloud-rain"
const mistIcon = "fa-solid fa-cloud"



async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    
    if(response.status == 404 || response.status == 400 ){
        document.querySelector('.error').style.display = "block"
        document.querySelector('.weather').style.display = "none"
    }
    
    let data = await response.json();

    cityName.innerHTML = data.name
    cityTemp.innerHTML = Math.round(data.main.temp) + " °C"

    if(data.weather[0].main === 'Clouds'){
        weatherIcon.className = cloudsIcon;
    }
    else if(data.weather[0].main === 'Clear'){
        weatherIcon.className = clearIcon;
    }
    else if(data.weather[0].main === 'Rain'){
        weatherIcon.className = rainIcon;
    }
    else if(data.weather[0].main === 'Drizzle'){
        weatherIcon.className = drizzleIcon;
    }
    else if(data.weather[0].main === 'Mist'){
        weatherIcon.className = mistIcon;
    }
    document.querySelector('.weather').style.display = "block"
    searchBox.value ="";
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})




