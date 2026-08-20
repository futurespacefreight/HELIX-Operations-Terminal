/* ======================================================
   CLOCK
====================================================== */

function updateClock(){

    const now = new Date();

    document.getElementById("currentTime").textContent =
        now.toLocaleTimeString("de-DE");

    document.getElementById("currentDate").textContent =
        now.toLocaleDateString("de-DE");

}

