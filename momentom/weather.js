const API_KEYS = "39f5232638cd58db5a6285c51071c703";
const COORDS = 'coords';
const weather = document.querySelector(".js-weather");

function getWeather(lat,lon){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEYS}&units=metric`
    ).then(function(response){
        return response.json()
    }).then(function(json){
        const temp = json.main.temp;
        const place = json.name;
        weather.innerText = `${temp}℃ ${place}`;
    });
}

function saveCoords(coordobj){
    localStorage.setItem(COORDS,JSON.stringify(coordobj));
}

function handleGeoSuccess(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const coordobj = {
        lat,
        lon
    };
    saveCoords(coordobj);
    getWeather(lat,lon);
}
function handleGeoError(position){
    console.log("cant access geo")
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSuccess,handleGeoError)
}

function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null){
        askForCoords();
    }else{
        const parseCoords = JSON.parse(loadedCoords);
        getWeather(parseCoords.lat, parseCoords.lon)
    }
}

function init(){
    loadCoords();
}
init();