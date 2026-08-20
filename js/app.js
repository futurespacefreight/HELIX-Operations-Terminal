/* ======================================================
   HELIX APP
====================================================== */

function initializeApplication(){

    console.log("1");

    document.getElementById("app").style.display = "none";

    console.log("2");

    loadData();

    console.log("3");

    updateClock();

    console.log("4");

    setInterval(updateClock,1000);

    console.log("5");

    updateDashboard();

    console.log("6");

    startBootSequence();

    console.log("7");

}

initializeApplication();