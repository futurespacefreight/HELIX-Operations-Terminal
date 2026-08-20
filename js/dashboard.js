/* ======================================================
   DASHBOARD
====================================================== */

function updateDashboard() {

    document.getElementById("credits").textContent =
        DataCore.finance.credits.toLocaleString("de-DE") + " CR";

    const locationElement = document.getElementById("location");

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