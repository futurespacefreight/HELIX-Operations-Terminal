/* ======================================================
   USER INTERFACE
====================================================== */

function showPage(page){

    const pages=document.querySelectorAll(".page");

    pages.forEach(p=>{

        p.style.display="none";

    });

    document.getElementById(page).style.display="block";

    if(page==="shipcontrol"){

        loadShipControl();

    }

}

function showNotification(text){

    const note=document.createElement("div");

    note.textContent=text;

    note.style.position="fixed";
    note.style.right="20px";
    note.style.bottom="20px";
    note.style.padding="15px";
    note.style.background="#183042";
    note.style.color="white";
    note.style.border="1px solid #7ec9ff";
    note.style.borderRadius="8px";
    note.style.zIndex="9999";

    document.body.appendChild(note);

    setTimeout(()=>{

        note.remove();

    },2500);

}