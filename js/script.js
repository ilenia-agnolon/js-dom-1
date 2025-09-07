const myLampOff = document.querySelector(".off-lamp");
const myLampOn = document.querySelector(".on-lamp");
const myButton = document.querySelector(".my-button");


//aggiungo evento per far sì che al click venga svolta la funzione 
myButton.addEventListener('click', lampOnOff);


//funzione per accendere e spegnere la lampadina
function lampOnOff () {

    if (myLampOff.src.includes("white")) {

        myLampOff.src = "img/yellow_lamp.png"
        

        myButton.textContent = "SPEGNI"; //Al primo click la lampadina si accende (quindi compare/andiamo a prendere la source del png "yellow lamp") e nel bottone compare la scritta "Spegni"
    
    } else { 

        myLampOff.src = "img/white_lamp.png";

        myButton.textContent = "ACCENDI"; //Qui facciamo il contrario, al secondo click la lampadina si spegne e nel bottone compare la scritta "Accendi"
    }
}




