const slider = document.getElementById("bckSlider");

let i = 0; //Starter på 0 for at vise det første array element
let billeder = []; //Tomt array
let timer = 5000; //Hvor ofte billedet skifter i milisekunder

//Baggrundsbilleder sat ind i vores array
billeder[0] = "url(./images/bilBck.webp";
billeder[1] = "url(./images/kneelitBck.webp";
billeder[2] = "url(./images/shirtBck.webp";
billeder[3] = "url(./images/bil2Bck.webp";
billeder[4] = "url(./images/lumberBck.webp";


//Automatisk billed-slider
function billedSlider(){
    slider.style.backgroundImage = billeder[i];

    if(i < billeder.length - 1){ //Itererer gennem de forskellige array elementer
        i++;
    } else {
        i = 0;
    }
    setTimeout("billedSlider()", timer); 
    //Starter en timer, som baseret på timer variablen, skifter billede hvert 5. sekundt
}

window.onload = billedSlider; //Eksekverer funktionen når siden loades