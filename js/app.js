/* ======================================================
   HELIX APP
====================================================== */

function initializeApplication(){

    console.log("HELIX OS Initialisierung...");

    document.getElementById("app").style.display = "none";

    loadData();

    updateClock();

    setInterval(updateClock,1000);

    updateDashboard();

    startBootSequence();

}

initializeApplication();