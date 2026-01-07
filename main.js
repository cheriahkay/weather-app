const apiKey = "b7cdade18d48541790c11fd19d7cad94";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    
    if(response.status == 404) {
        alert("Invalid city name!");
    } else {
        var data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = "Humidity: " + data.main.humidity + "%";
        document.querySelector(".description").innerHTML = data.weather[0].description;

        // NEW: This line erases what you typed after the search is successful
        searchBox.value = ""; 
    }
}

// 1. Logic for clicking the Search Button
searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});

// 2. NEW: Logic for pressing the "Enter" key
searchBox.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        checkWeather(searchBox.value);
    }
});