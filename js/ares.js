/* ======================================================
   ARES BORD AI SYSTEM
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

    ]

};

function aresNotify(category){
    
    console.log("ARES Notify:", category);

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

    const feed = document.getElementById("commandFeed");

    if(!feed) return;

    const time = new Date().toLocaleTimeString("de-DE");

    const line = document.createElement("div");

    line.textContent =
        time + "   ARES > " + message;

    feed.prepend(line);

    while(feed.children.length > 40){

        feed.removeChild(feed.lastChild);

    }

}