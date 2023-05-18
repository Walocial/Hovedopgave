const slider = document.getElementById("bckSlider");

let i = 0;
let billeder = [];
let timer = 5000;

//Baggrundsbilleder
billeder[0] = "url(./images/bilBck.jpg";
billeder[1] = "url(./images/shirtBck.jpg";
billeder[2] = "url(./images/measureBck.jpg";
billeder[3] = "url(./images/bil2Bck.png";
billeder[4] = "url(./images/lumberBck.jpg";


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