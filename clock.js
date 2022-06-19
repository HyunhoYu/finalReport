/*
const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours());
    const minutes = String(date.getMinutes());
    const seconds = String(date.getSeconds());
    clock.innerText = `${hours.padStart(2,0)}:${minutes.padStart(2,0)}:${seconds.padStart(2,0)}`;
}

getClock()
setInterval(getClock, 1000);
*/

function setClock(){
    const dateInfo = new Date(); 
    const hour = modifyNumber(dateInfo.getHours());
    const min = modifyNumber(dateInfo.getMinutes());
    const sec = modifyNumber(dateInfo.getSeconds());
    const year = dateInfo.getFullYear();
    const month = dateInfo.getMonth()+1; 
    const date = dateInfo.getDate();
    document.getElementById("time").innerHTML = hour + ":" + min  + ":" + sec;
    document.getElementById("date").innerHTML = year + "년 " + month + "월 " + date + "일";
}
function modifyNumber(time){
    if(parseInt(time)<10){
        return "0"+ time;
    }
    else
        return time;
}
window.onload = function(){
    setClock();
    setInterval(setClock,1000); 
}