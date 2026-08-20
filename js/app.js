/* ======================================================
   HELIX APP
====================================================== */

function initializeApplication(){

    console.log("HELIX OS Initialisierung...");

    document.getElementById("app").style.display = "none";

    loadData();

    updateClock();

    updateDashboard();

    startBootSequence();

}

initializeApplication();