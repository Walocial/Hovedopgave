//Vis mobil menu
const mobilMenu = document.getElementById("mobilMenu");

function showMenu(){ //Sætter mobil menu's højre position til 0 (viser menuen)
    mobilMenu.style.right = "0";
}
function hideMenu(){ //Sætter mobil menu's højre position til -100vw (skjuler menuen)
    mobilMenu.style.right = "-100vw";
}
