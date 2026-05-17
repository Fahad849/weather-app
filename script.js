const cityInput = document.getElementById("cityInput");

const searchBtn = document.getElementById("searchBtn");

const cityName = document.getElementById("cityName");

const temperature = document.getElementById("temperature");

const description = document.getElementById("description");

const humidity = document.getElementById("humidity");

const wind = document.getElementById("wind");

searchBtn.addEventListener("click", async () => {

    const city = cityInput.value;

    if(city === ""){
        return;
    }

    const apiKey = "YOUR_API_KEY";

    const url = https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric;

    try{

        const response = await fetch(url);

        const data = await response.json();

        cityName.textContent = data.name;

        temperature.textContent = Temperature: ${data.main.temp}°C;

        description.textContent = Condition: ${data.weather[0].description};

        humidity.textContent = Humidity: ${data.main.humidity}%;

        wind.textContent = Wind Speed: ${data.wind.speed} km/h;

    }

    catch(error){

        alert("City not found");

    }

});
