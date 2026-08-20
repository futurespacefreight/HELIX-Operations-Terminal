/* ======================================================
   HELIX DATACORE v0.7
====================================================== */

const DataCore = {

    ship: {
        name: "Peregrine Horizon",
        class: "Explorer Class",
        registry: "PHX-01",
        location: "Mars-Station Armstrong",
        area: "Nordlager",
        docked: true,
        speed: 0
    },

    mission: {
        title: "Kuiper Expedition",
        objective: "Vorbereitung interstellarer Sonde",
        phase: "Mars Logistics",
        progress: 22
    },

    finance: {
        credits: 2847600
    },

    lifeSupport: {
        oxygen: 100,
        water: 100,
        temperature: 21,
        humidity: 45
    },

    crew: {

        captain: "Captain Michael Grudda",

        firstOfficer: "Lena Voss",

        engineer: "Kai Nakamura",

        science: "Dr. Carson Hale",

        security: "Laura Petrova",

        navigator: "Alex Nivora",

        android: "Elias Seven",

        ai: "ARES"

    }

}
/* ======================================================
   Local Storage
====================================================== */

function saveData() {

    localStorage.setItem(
        "HELIX_DataCore",
        JSON.stringify(DataCore)
    );

}

function loadData() {

    const savedData = localStorage.getItem("HELIX_DataCore");

    if (!savedData) return;

    const loaded = JSON.parse(savedData);

    Object.assign(DataCore.ship, loaded.ship);
    Object.assign(DataCore.mission, loaded.mission);
    Object.assign(DataCore.finance, loaded.finance);
    Object.assign(DataCore.lifeSupport, loaded.lifeSupport);
    Object.assign(DataCore.crew, loaded.crew);

};

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

/* ======================================================
   Dashboard aktualisieren
====================================================== */

function updateDashboard() {

    document.getElementById("credits").textContent =
        DataCore.finance.credits.toLocaleString("de-DE") + " CR";

    document.getElementById("location").textContent =
        DataCore.ship.location;

    document.getElementById("mission").textContent =
        DataCore.mission.title;
        
        saveData();
        

}

loadData();

updateDashboard();

saveData();