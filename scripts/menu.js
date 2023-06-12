//Vis mobil menu
const mobilMenu = document.getElementById("mobilMenu");

function showMenu(){ //Sætter mobil menu's højre position til 0 (viser menuen)
    mobilMenu.style.right = "0";
}
function hideMenu(){ //Sætter mobil menu's højre position til -100vw (skjuler menuen)
    mobilMenu.style.right = "-100vw";
}

//Dropdown mobil menu
let mobileDropdwn = (thisBtn, targetSubNav) => {
  this.thisBtn = document.getElementById(thisBtn); //Henter ID på knappen
  this.targetSubNav = document.getElementById(targetSubNav); //Henter ID på den subnav menu som skal vises
  const allDrpIcons = document.querySelectorAll(".mbdpIcon"); //Henter alle drop down ikonerne
  const allSubNavs = document.querySelectorAll(".mobileSubNav"); //Henter alle subnavs
  let subnavClass = this.targetSubNav.classList; //Variable der gør functionen nedenfor mere overskuelig

  if (subnavClass.contains("hidden")) {
    allSubNavs.forEach((element) => { //Skjuler alle andre subnavs, så kun 1 er åben ad gangen
      element.classList.add("hidden");
    });
    allDrpIcons.forEach((element) => { //Drejer alle drop down ikonerne, så kun 1 er vender opad ad gangen
      element.style.transform = "rotate(0deg)";
    });
    subnavClass.remove("hidden"); //Viser den valgte subnav
    this.thisBtn.style.transform = "rotate(180deg)"; //Drejer knappen der blev trykket på
  } else {
    subnavClass.add("hidden"); //Skjuler den valgte subnav
    this.thisBtn.style.transform = "rotate(0deg)"; //Drejer knappen der blev trykket på tilbage til normal
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