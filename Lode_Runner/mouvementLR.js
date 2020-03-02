let intDirection = 0;
let fltTranslationLR;

let strDirection;

function gererClavier() {
    switch (event.keyCode) {
        // gauche
        case 37:

                console.log('gauche')
                intDirection = -1;
                strDirection = 'gauche';
                objPointage.binEnMarche = true;
            break;
        // droite
        case 39:
                console.log('droite')
                intDirection = 1;
                strDirection = 'droite';
                objPointage.binEnMarche = true;
            break;
        default:
            intDirection = 0;
    }


    chercherElemTab();

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

//Test pour trouver dans le tableau sur quels éléments Lode Runner est.
function chercherElemTab(){
    const tableau = objNiveau.tableau;
    let posXLRTab =Math.round((objLodeRunner.posX-50)/30);
    let posYLRTab =Math.round((objLodeRunner.posY-50)/30);

    for (let i = 0; i < tableau.length; i++) {
        for (let j = 0; j < tableau[i].length; j++) {
                console.log(tableau[posXLRTab][posYLRTab+1]);
        }
    }

    console.log('X: ' + posXLRTab + ' Y: ' + posYLRTab)
}