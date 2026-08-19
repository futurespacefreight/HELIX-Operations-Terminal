function updateClock(){

    const now = new Date();

    document.getElementById("currentTime").textContent =
        now.toLocaleTimeString("de-DE");

    document.getElementById("currentDate").textContent =
        now.toLocaleDateString("de-DE");

}

updateClock();

setInterval(updateClock,1000);

function showPage(page){

const pages=document.querySelectorAll(".page");

pages.forEach(p=>{

p.style.display="none";

});

document.getElementById(page).style.display="block";

}
