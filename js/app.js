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

    // Dashboard aktualisieren
    updateDashboard();

    // Bootsequenz starten
    startBootSequence();

}

// HELIX starten
initializeApplication();