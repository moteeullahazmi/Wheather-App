const input = document.querySelector("input")
const btn = document.querySelector(".btn")
const icon = document.querySelector(".icon")
const weather = document.querySelector(".weather")
const tempreature = document.querySelector(".tempreature")
const description = document.querySelector(".description")

const apiKey = 'bf2d0f9a447be088a5c054ed30fd32f0';

btn.addEventListener("click", () => {
    let city = input.value;
    getWeather(city);
})

function getWeather(city) {
    console.log(city);
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const iconCode = data.weather[0].icon;
            icon.innerHTML = `<img src="http://openweathermap.org/img/wn/${iconCode}.png" alt="Weather_Icon">`;

            const weatherCity = data.name;
            const weatherCountry = data.sys.country;
            weather.innerHTML = `${weatherCity}, ${weatherCountry}`;

            const weatherTemp = data.main.temp;
            const tempC = weatherTemp - 273.15;
            const temp = tempC.toFixed(2);
            tempreature.innerHTML = `${temp} °C`;

            const weatherDesc = data.weather[0].description;
            description.innerHTML = weatherDesc;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}
