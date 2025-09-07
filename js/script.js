const myLampOff = document.querySelector(".off-lamp");
const myLampOn = document.querySelector(".on-lamp");
const myButton = document.querySelector(".my-button");

myButton.addEventListener('click', lampOnOff);


//funzione per accendere e spegnere la lampadina
function lampOnOff () {

    if (myLampOff.src.includes("white")) {

        myLampOff.src = "img/yellow_lamp.png"
        

        myButton.textContent = "SPEGNI";
    
    } else {

        myLampOff.src = "img/white_lamp.png";

        myButton.textContent = "ACCENDI";
    }
}




