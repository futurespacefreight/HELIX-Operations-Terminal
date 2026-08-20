/* ======================================================
   BOOT SEQUENCE
====================================================== */
const BOOT_DELAY = 400;

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

function startBootSequence(){

    let bootIndex = 0;

    const bootInterval = setInterval(()=>{

        document.getElementById("bootStatus").textContent =
            bootMessages[bootIndex];

        bootIndex++;

        if(bootIndex >= bootMessages.length){

            clearInterval(bootInterval);

            setTimeout(()=>{

                document.getElementById("bootScreen").style.display = "none";

                document.getElementById("app").style.display = "flex";

           },BOOT_DELAY + 300);

        }

   },BOOT_DELAY);

}