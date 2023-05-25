//Vis mobil menu
const mobilMenu = document.getElementById("mobilMenu");

function showMenu(){ //Sætter mobil menu's højre position til 0 (viser menuen)
    mobilMenu.style.right = "0";
}
function hideMenu(){ //Sætter mobil menu's højre position til -100vw (skjuler menuen)
    mobilMenu.style.right = "-100vw";
}

//Vis undermenu i mobil menu 
let openItem = (subMenu) =>{
    this.subMenu = document.getElementById(subMenu);

    if(this.subMenu.classList.contains("hidden")) {
        this.subMenu.classList.remove("hidden");
    } else {
        this.subMenu.classList.add("hidden");
    }
}

//Vis eller skjul søgefelt
const searchBar = document.getElementById("searchBar");

function showSearch() {
    if(searchBar.classList.contains("hidden")) {
        searchBar.classList.remove("hidden")
        searchBar.focus();
    } else {
        searchBar.classList.add("hidden");
    }
}

//Tilbage til top knap
const toTopBtn = document.getElementById("toTopKnap");

function showOnScroll() {
  let y = window.scrollY;
  if (y >= 800) {
    toTopBtn.classList.remove("hidden");
  } else {
    toTopBtn.classList.add("hidden")
  }
};
window.addEventListener("scroll", showOnScroll);

function backToTop() {
    window.scrollTo({top: 0});
}