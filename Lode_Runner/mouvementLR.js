let intDirection=0;
let fltTranslationLR;

let strDirection;

function gererClavier() {

    switch(event.keyCode){
         // gauche
        case 37:
            console.log('gauche')
            intDirection=-1;
            strDirection='gauche';
            objPointage.binEnMarche=true;
            break;
        // droite
        case 39:
            console.log('droite')
            intDirection=1;
            strDirection='droite';
            objPointage.binEnMarche=true;
            break;
        default :
            intDirection=0;
    }
        
}

function toucheRelachee(){
    intDirection=0;
}


function mettreAJourPositionLR() {
        if (fltTranslationLR == objCanvas.width-80) {
            if (strDirection=='droite')
                intDirection=0;
            else if (strDirection=='gauche')
                intDirection=-1;
        } else if (fltTranslationLR == 50) {
            if (strDirection=='gauche')
                intDirection=0;
            else if (strDirection=='droite')
                intDirection=1;
        } 
        fltTranslationLR=objLodeRunner.posX +objLodeRunner.vitesse * intDirection;
        objLodeRunner.posX=fltTranslationLR;
}