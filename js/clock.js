'use strict';

let fullName = prompt("Adınız nedir? ");
let myName = document.querySelector("#myName");

myName.innerHTML = `${fullName}`

function showTime(){
    const clockElement = document.querySelector("#myClock");

   setInterval(() => {
    const currentTime = new Date();

    //Saat, dakika ve saniyeyi al
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();

    //Gün ismini al
    const days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
    const dayName = days[currentTime.getDay()];

    //Tek haneli değerleri çift haneli yapmak için başlarına "0" ekle
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds <10 ? "0" + seconds :seconds;

    const timeString = `${hours} : ${minutes} : ${seconds} ${dayName}`;

    clockElement.innerHTML = timeString;

   },)

}

showTime();



