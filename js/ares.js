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

    const list = ARES[category];

    if(!list) return;

    const message =
        list[Math.floor(Math.random()*list.length)];

    showNotification("ARES • " + message);

    aresLog(message);

}