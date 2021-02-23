const clockContainer = document.querySelector(".js-clock"),
    clockTitle = clockContainer.querySelector("h1");

function getTime(){
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDay();
    const minute = date.getMinutes();
    const hour = date.getHours();
    const second = date.getSeconds();
    clockTitle.innerText = `${year}년 ${month}월 ${day}일
        ${hour<10?`0${hour}`:hour}:${minute<10?`0${minute}`:minute}:${second<10?`0${second}`:second}`;
}
function init(){
    getTime();
    setInterval(getTime,1000)
}
init();