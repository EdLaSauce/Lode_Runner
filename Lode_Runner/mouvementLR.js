let intDirection = 0;
let fltTranslationLR;

let strDirection;

function gererClavier() {
   event.preventDefault();
    //Appuyer sur une touche pour débuter le jeu
    if(objPointage.binEnMarche = false){
        objPointage.binEnMarche = true;
    }

    switch (event.keyCode) {
        // gauche
        case 37:
           if(objLodeRunner.etat == 0 || objLodeRunner.etat == 3){
            console.log('gauche')
            objLodeRunner.intDirection = -1;
            gaucheDroite();
           }else{
               console.log("Impossible de bouger gauche droite");
           }
            
        break;
        // droite
        case 39:
           if(objLodeRunner.etat == 0 || objLodeRunner.etat == 3){
            console.log('droite')
            objLodeRunner.intDirection = 1;
            gaucheDroite();
           }else{
            console.log("Impossible de bouger gauche droite");
           }
        break;

        //bas
        case 40:
            console.log("down arrow");
            objLodeRunner.intDirection = 1;
           hautBas();
        break;

        //haut
        case 38:
            objLodeRunner.intDirection = -1;
           hautBas();
        break;
    }

}

function hautBas(){
    let fltYTemporaire = objLodeRunner.posY + (objLodeRunner.vitesse * objLodeRunner.intDirection);
    if(objLodeRunner.etat == 3){
        //Barre de franchissement
        objLodeRunner.etat = 2;
        console.log("Je **devrais** tomber de la barre de franchissement");
    }else if(objLodeRunner.etat == 0){
        //Je marchais

        //lorsque je peux monter ou descendre
        //objLodeRunner.etat = 1;
    }else if(objLodeRunner.etat == 1){
        //Je suis déjà sur l'échelle

        //lorsque je suis arrivé en haut ou bas
        //objLodeRunner.etat = 0;
    }
}

function gaucheDroite(){
    
    let fltXTemporaire = objLodeRunner.posX + (objLodeRunner.vitesse * objLodeRunner.intDirection);
    let binPeutBouger = true;
    //Vérifications

    //Plus petit que la limite gauche ou droite?
    if(fltXTemporaire < 50){
        fltXTemporaire = 50;
    }else if(fltXTemporaire > objCanvas.width -(50+largeurCellule)){
        fltXTemporaire = objCanvas.width - (50 +largeurCellule);
    }
    
    const numCelluleX = Math.round((fltXTemporaire-50)/30);
    const numCelluleY = Math.round((objLodeRunner.posY-50)/30);

    if(objNiveau.tableau[numCelluleY][numCelluleX] == '*'){
        console.log("J'ai attrapé un lingot!");
        retirerObjet(numCelluleX,numCelluleY);
        objSons.ramasserLingot.play();
    }

    if(objNiveau.tableau[numCelluleY][numCelluleX] == '='){
        binPeutBouger = false;
    }

    if(objNiveau.tableau[numCelluleY+1][numCelluleX] == ' '){
        if(objNiveau.tableau[numCelluleY][numCelluleX] == '-'){
            console.log("Je suis sur la barre de franchissement");
            objLodeRunner.etat = 3;
        }else{
            console.log("Je tombe");
            binPeutBouger = false;
            //Mettre coordonnées de lode runner au milieu de la cellule
            objLodeRunner.posX = numCelluleX * 30 + 50;
            objLodeRunner.etat = 2;
        }
    }else if(objNiveau.tableau[numCelluleY+1][numCelluleX] == '='){
        console.log("Je marche sur une plateforme");
        objLodeRunner.etat = 0;
    }

    if(binPeutBouger){
        objLodeRunner.posX = fltXTemporaire;
    }
}

function chuter(){
    let fltYTemporaire = objLodeRunner.posY + 1;
    const numCelluleX = Math.round((objLodeRunner.posX-50)/30);
    const numCelluleY = Math.ceil((fltYTemporaire-50)/30);

    if(objNiveau.tableau[numCelluleY][numCelluleX] == ' '){
        objLodeRunner.posY = fltYTemporaire;
    }else if(objNiveau.tableau[numCelluleY][numCelluleX] == 'B'){
        //Dans un trou
    }else if(objNiveau.tableau[numCelluleY][numCelluleX] == '-'){
        objLodeRunner.etat = 3;
        objLodeRunner.posY = (numCelluleY-1) *30 + 50;
    }else{
        objLodeRunner.etat = 0;
        objLodeRunner.posY = (numCelluleY-1) *30 + 50
    }

    console.log("numCelluleY : "+numCelluleY);
    
}

function mettreAJourPositionLR() {

    //Faire chuter si l'etat est 2
    if(objLodeRunner.etat == 2){
        chuter();
        //play son de la chute
        //if(objSons.chute.pause()){
            objSons.chute.play();
        //}
    }else{
        //stop son de la chute
        //if(!objSons.chute.pause()){
            objSons.chute.pause();
        //}
    }
    
}


//Test pour trouver dans le tableau sur quels éléments Lode Runner est.
function chercherElemTab(){
    const tableau = objNiveau.tableau;
    let posXLRTab =Math.round((objLodeRunner.posX-50)/30);
    let posYLRTab =Math.round((objLodeRunner.posY-50)/30);
    console.log("fltXLD = "+(objLodeRunner.posX-50)/30 + ", fltYLD = "+(objLodeRunner.posY-50)/30);
    for (let i = 0; i < tableau.length; i++) {
        for (let j = 0; j < tableau[i].length; j++) {
                console.log(tableau[posXLRTab][posYLRTab+1]);
        }
    }

    console.log('X: ' + posXLRTab + ' Y: ' + posYLRTab)
}