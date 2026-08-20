/* ======================================================
   HELIX APP
====================================================== */

const bootMessages = [

"Initializing Core...",
"Loading Navigation...",
"Loading DataCore...",
"Connecting ARES...",
"Loading Crew Database...",
"Loading Mission Control...",
"Synchronizing Station Link...",
"System Online"

];

let bootIndex = 0;

document.getElementById("app").style.display="none";

const bootInterval = setInterval(()=>{

    document.getElementById("bootStatus").textContent =
    bootMessages[bootIndex];

    bootIndex++;

    if(bootIndex>=bootMessages.length){

        clearInterval(bootInterval);

        setTimeout(()=>{

            document.getElementById("bootScreen").style.display="none";

            document.getElementById("app").style.display="flex";

        },700);

    }

},400);

/* ==================================== */

loadData();

updateDashboard();