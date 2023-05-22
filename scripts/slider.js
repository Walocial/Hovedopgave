const slider = document.getElementById("bckSlider");

let i = 0;
let billeder = [];
let timer = 5000;

//Baggrundsbilleder
billeder[0] = "url(./images/bilBck.webp";
billeder[1] = "url(./images/kneelitBck.webp";
billeder[2] = "url(./images/shirtBck.webp";
billeder[3] = "url(./images/bil2Bck.webp";
billeder[4] = "url(./images/lumberBck.webp";


//Automatisk billed-slider
function billedSlider(){
    slider.style.backgroundImage = billeder[i];

    if(i < billeder.length - 1){
        i++;
    } else {
        i = 0;
    }
    setTimeout("billedSlider()", timer);
}

window.onload = billedSlider;