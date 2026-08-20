/* ======================================================
   HELIX APP
====================================================== */

function initializeApplication(){

    console.log("HELIX OS Initialisierung...");

    // Anwendung zunächst ausblenden
    document.getElementById("app").style.display = "none";

    // Spielstand laden
    loadData();

    // Uhr starten
    updateClock();
    setInterval(updateClock, 1000);

    updateDashboard();

startARESBackground();

startBootSequence();
}

// HELIX starten
initializeApplication();