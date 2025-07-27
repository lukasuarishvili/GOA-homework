const API_key = "f63fbc0863a67df02b7f65583e266c62";

//virables
const cityInput = document.getElementById("city_input");
const addButton = document.querySelector("button");
let cityTitle = document.getElementById("city_Title");
let cityTemp = document.getElementById("city_temp");
let tempConteiner = document.getElementById("tempConteiner");
let descriptionConteiner = document.getElementById("temp_description");

function createDom(CityData) {
    //clear previus virables

    tempConteiner.innerHTML = "";
    descriptionConteiner.innerHTML = "";
    //virables
    cityTitle.textContent = `${CityData.name}`
    cityTemp.textContent = `${CityData.main.temp}°C`

    let cityTempMax = document.createElement("p");
    let cityTempMin = document.createElement("p");
    let cityTempFeels = document.createElement("p");
    let tempdescription = document.createElement("h3");


    //text content
    cityTempMax.textContent = `temp_max:${CityData.main.temp_max}°C`;
    cityTempMin.textContent = `temp_min:${CityData.main.temp_min}°C`;
    cityTempFeels.textContent = `feels_like:${CityData.main.feels_like}°C`;
    tempdescription.textContent = `${CityData.weather[0].description}`;

    //virables classes
    cityTempMax.className = "text-white font-semibold text-[19px]";
    cityTempMin.className = "text-white font-semibold text-[19px]";
    cityTempFeels.className = "text-white font-semibold text-[19px]";


    //displaing in dom
    tempConteiner.appendChild(cityTempMax)
    tempConteiner.appendChild(cityTempMin)
    tempConteiner.appendChild(cityTempFeels)

    descriptionConteiner.appendChild(tempdescription)
}
// Fetch weather
function getWeather(cityName) {
    const APIURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_key}&units=metric`;

    fetch(APIURL).then(response => response.json().then(data => {

        console.log(data);

        createDom(data)

    }))
}

//button click
function addClick() {
    const cityName = cityInput.value.trim();

    if (cityName === "") {
        alert("enter a city name.");
    }

    console.log(cityName);
    getWeather(cityName);
    cityInput.value = "";
}

function Clock() {
    // time virables useing date object 
    const now = new Date();
    let hours = now.getHours().toString().padStart(2, 0);
    const minutes = now.getMinutes().toString().padStart(2, 0);
    const secondes = now.getSeconds().toString().padStart(2, 0);
    const time = `${hours}:${minutes}:${secondes}`
    city_time.textContent = time
}

setInterval(Clock, 1000)


// Only this listener is needed
addButton.addEventListener("click", addClick);
