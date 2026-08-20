/* ======================================================
   ARES BORD AI SYSTEM v1.0
====================================================== */

const ARES = {

    mission: [

        "Mission database synchronized.",
        "Operational parameters updated.",
        "Mission objectives verified.",
        "Mission profile stored.",
        "Progress recalculated."

    ],

    ship: [

        "Ship parameters updated.",
        "Navigation database synchronized.",
        "Docking information verified.",
        "Internal systems updated.",
        "Flight status confirmed."

    ],

    system: [

        "DataCore synchronized.",
        "System integrity confirmed.",
        "All subsystems nominal.",
        "Background diagnostics complete.",
        "Core synchronization successful."

    ],

    crew: [

        "Crew manifest verified.",
        "Crew status updated.",
        "Personnel database synchronized."

    ],

    background: [

        "Passive sensor sweep completed.",
        "Deep space telemetry received.",
        "Communications relay synchronized.",
        "Long-range scanner online.",
        "Navigation beacons verified.",
        "Station uplink stable.",
        "Background diagnostics completed.",
        "Power distribution nominal.",
        "Environmental systems stable.",
        "Quantum clock synchronized.",
        "Internal network optimized.",
        "Cargo inventory verified.",
        "Scientific database indexed.",
        "Security systems operational.",
        "Reactor efficiency optimal."

    ]

};

/* ======================================================
   ARES NOTIFICATION
====================================================== */

function aresNotify(category){

    const list = ARES[category];

    if(!list) return;

    const message =
        list[Math.floor(Math.random()*list.length)];

    showNotification("ARES • " + message);

    aresLog(message);

}

/* ======================================================
   COMMAND FEED
====================================================== */

function aresLog(message){

    const feed =
        document.getElementById("commandFeed");

    if(!feed) return;

    const time =
        new Date().toLocaleTimeString("de-DE");

    const line =
        document.createElement("div");

    line.textContent =
        time + "   ARES > " + message;

    feed.prepend(line);

    while(feed.children.length > 40){

        feed.removeChild(feed.lastChild);

    }

}

/* ======================================================
   BACKGROUND SERVICE
====================================================== */

function startARESBackground(){

    setInterval(()=>{

        const list = ARES.background;

        const message =
        list[Math.floor(Math.random()*list.length)];

        aresLog(message);

    },90000);

}