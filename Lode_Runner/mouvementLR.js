let intDirection = 0;
let fltTranslationLR;

let strDirection;

function gererClavier() {

    const tableau = objNiveau.tableau;
    let positionXTab = Math.round((objLodeRunner.posX - 50) / 30);

    console.log(parseInt((objLodeRunner.posX - 50) / 30));

    let binPasserelle=false;
    let binPasserelleDroite=false;
    let binPasserelleGauche=false;

    // à modifier
    //pour le moment les vérifications s'il y a une passerelle ne fonctionnent pas
    //je ne sais pas à quel endroit les mettre
    for (let i = 0; i < tableau.length; i++) {
        for (let j = 0; j < tableau[i].length; j++) {

            if (tableau[positionXTab][((objLodeRunner.posY - 50) / 30) + 1] == "=") {
                binPasserelle=true;
            }

            if (positionXTab != 27){
                if (tableau[positionXTab+1][((objLodeRunner.posY - 50) / 30) + 1] == "=") {
                    binPasserelleDroite=true;
                }
            }

            if (positionXTab !=0){
                if (tableau[positionXTab-1][((objLodeRunner.posY - 50) / 30) + 1] == "=") {
                    binPasserelleGauche=true;
                }
            }
        }
    }

    switch (event.keyCode) {
        // gauche
        case 37:
            if (binPasserelleGauche) {

                console.log('gauche')
                intDirection = -1;
                strDirection = 'gauche';
                objPointage.binEnMarche = true;
            }else intDirection=0;
            break;
        // droite
        case 39:
            if (binPasserelleDroite){
                console.log('droite')
                intDirection = 1;
                strDirection = 'droite';
                objPointage.binEnMarche = true;
            }else intDirection=0;
            break;
        default:
            intDirection = 0;
    }

}

function toucheRelachee() {
    intDirection = 0;
}


function mettreAJourPositionLR() {

    if (fltTranslationLR == objCanvas.width - 80) {
        if (strDirection == 'droite')
            intDirection = 0;
        else if (strDirection == 'gauche')
            intDirection = -1;
    } else if (fltTranslationLR == 50) {
        if (strDirection == 'gauche')
            intDirection = 0;
        else if (strDirection == 'droite')
            intDirection = 1;
    }

    fltTranslationLR = objLodeRunner.posX + objLodeRunner.vitesse * intDirection;
    objLodeRunner.posX = fltTranslationLR;
}