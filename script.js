/*Here is the navegator search*/
const search = document.getElementById("search");
const buttonSearch = document.getElementById("button");

/*The part of configurations - Api Key*/
const keyApi = "0b4b63f9d7cd6fc30021b288753331ee";

/*Innterface config.*/
const title = document.querySelector("#content h1");
const temp = document.querySelector("#temp");
const icon = document.getElementById("icon");
const wind = document.getElementById("wind");
const humidity = document.getElementById("humidity");
const local = document.getElementById ("local");

async function findCity (){
    const searchInput = search.value; /*Get the value inside of the input*/
    const apiWeather = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchInput}&appid=${keyApi}&units=metric&lang=pt_br`).then (apiRepost => apiRepost.json()); /*For using the Api and transformat the response in json*/
    
    console.log(apiWeather)

    changeElements (apiWeather) /*To get the informations */
}

function changeElements (apiWeather) {
    title.innerText = apiWeather.name;
    temp.innerText = apiWeather.main.temp.toFixed(0) + '°c';
    icon.setAttribute("src", `https://openweathermap.org/img/wn/${apiWeather.weather[0].icon}.png`);
    wind.innerHTML = '<i class="bi bi-wind"></i> ' + Math.round(apiWeather.wind.speed) + 'km/h';
    humidity.innerHTML = '<i class="bi bi-droplet-fill"></i>' + apiWeather.main.humidity + '%';
    local.innerHTML = '<i class="bi bi-geo-alt-fill"></i>' + apiWeather.sys.country;
}


buttonSearch.addEventListener('click', findCity);
