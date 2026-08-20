/* ======================================================
   SHIP CONTROL
====================================================== */

function loadShipControl(){

    document.getElementById("inputLocation").value =
    DataCore.ship.location;

    document.getElementById("inputArea").value =
    DataCore.ship.area;

    document.getElementById("inputDocked").checked =
    DataCore.ship.docked;

}

function saveShipControl(){

    DataCore.ship.location =
    document.getElementById("inputLocation").value;

    DataCore.ship.area =
    document.getElementById("inputArea").value;

    DataCore.ship.docked =
    document.getElementById("inputDocked").checked;

    refreshInterface();

    showNotification("ARES • Schiffsdaten aktualisiert");

}