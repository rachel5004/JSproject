const clockContainer = document.querySelector(".js-clock"),
    clockTitle = clockContainer.querySelector("h1");

function getTime(){
    const date = new Date();
    const minute = date.getMinutes();
    const hour = date.getHours();
    clockTitle.innerText = `${hour}:${minute}`;
}
function init(){
    getTime();
}
init();