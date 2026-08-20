/* ======================================================
   LOCAL STORAGE
====================================================== */

function saveData() {

    localStorage.setItem(
        "HELIX_DataCore",
        JSON.stringify(DataCore)
    );

}

function loadData() {

    const savedData = localStorage.getItem("HELIX_DataCore");

    if (!savedData) {

        console.log("Kein Spielstand gefunden. Neuer DataCore wird erstellt.");

        saveData();

        return;

    }

    const loaded = JSON.parse(savedData);

    Object.assign(DataCore.ship, loaded.ship);
    Object.assign(DataCore.mission, loaded.mission);
    Object.assign(DataCore.finance, loaded.finance);
    Object.assign(DataCore.lifeSupport, loaded.lifeSupport);
    Object.assign(DataCore.crew, loaded.crew);

    console.log("Spielstand erfolgreich geladen.");

}