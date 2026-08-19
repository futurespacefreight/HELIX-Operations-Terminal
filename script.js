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

const bootMessages = [

"Initializing Core...",
"Loading Navigation...",
"Loading DataCore...",
"Connecting ARES...",
"Loading Crew Database...",
"Loading Mission Control...",
"Synchronizing Station Link...",
"System Online"

];

let bootIndex = 0;

const bootInterval = setInterval(()=>{

document.getElementById("bootStatus").textContent=bootMessages[bootIndex];

bootIndex++;

if(bootIndex>=bootMessages.length){

clearInterval(bootInterval);

setTimeout(()=>{

document.getElementById("bootScreen").style.display="none";

document.getElementById("app").style.display="flex";

},700);

}

},400);

document.getElementById("app").style.display="none";
