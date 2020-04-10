// Séléctionner les aiguilles de montre
const deg = 6;
const AIGUILLEHR = document.querySelector("#hour");
const AIGUILLEMIN = document.querySelector("#minute");
const AIGUILLESEC = document.querySelector("#second");

setInterval(() => {
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;
    AIGUILLEHR.style.transform = `rotateZ(${hh+(mm/12)}deg)`;
    AIGUILLEMIN.style.transform = `rotateZ(${mm}deg)`;
    AIGUILLESEC.style.transform = `rotateZ(${ss}deg)`;
})