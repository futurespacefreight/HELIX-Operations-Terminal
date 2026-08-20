/* ======================================================
   DASHBOARD
====================================================== */

function updateDashboard() {

    document.getElementById("credits").textContent =
        DataCore.finance.credits.toLocaleString("de-DE") + " CR";

    const locationElement = document.getElementById("location");

/* ======================================================
   ARES STATUS
====================================================== */

document.getElementById("statusText").textContent =
"ONLINE";

document.getElementById("aresStatus").textContent =
"● ONLINE";

document.getElementById("commStatus").textContent =
"● NOMINAL";

document.getElementById("lifeSupportStatus").textContent =
"● STABIL";

document.getElementById("reactorStatus").textContent =
"● 100 %";

if(DataCore.ship.docked){

    document.getElementById("dockStatus").textContent =
    "● ANGEDOCKT";

    document.getElementById("dockStatus").className =
    "status-green";

}else{

    document.getElementById("dockStatus").textContent =
    "● IM FLUG";

    document.getElementById("dockStatus").className =
    "status-yellow";

}

    if(DataCore.ship.area){

        locationElement.textContent =
        DataCore.ship.location + " • " + DataCore.ship.area;

    }else{

        locationElement.textContent =
        DataCore.ship.location;

    }

    document.getElementById("mission").textContent =
        DataCore.mission.title;

    saveData();

}

function refreshInterface(){

    updateDashboard();

    saveData();

}