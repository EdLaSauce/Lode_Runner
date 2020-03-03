/*
    Synopsis: On retrouve les fonctions nécessaire aux mouvements de Lode Runner
*/

function gererClavier() {
   event.preventDefault();
    //Appuyer sur une touche pour débuter le jeu
    //Sans cette instruction, le temps démarre au chargement du niveau
    if(objPointage.binEnMarche == false){
        objPointage.binEnMarche = true;
    }

    switch (event.keyCode) {
        // gauche
        case 37:
           if(objLodeRunner.etat == 0 || objLodeRunner.etat == 3){
            objLodeRunner.intDirection = -1;
            gaucheDroite();
           }else{
               console.log("Impossible de bouger gauche droite");
           }
            
        break;
        // droite
        case 39:
           if(objLodeRunner.etat == 0 || objLodeRunner.etat == 3){
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
            console.log("up arrow");
            objLodeRunner.intDirection = -1;
           hautBas();
        break;
    }

}

function hautBas(){
    let fltYTemporaire = objLodeRunner.posY + (objLodeRunner.vitesse * objLodeRunner.intDirection);
    const numCelluleX = Math.round((objLodeRunner.posX-50)/30);
    const numCelluleY = Math.ceil((fltYTemporaire-50)/30);
    let binNiveauReussi = false;
    if(objLodeRunner.etat == 3 && fltYTemporaire > objLodeRunner.posY){
        objLodeRunner.etat = 2;
    }else if(objLodeRunner.etat == 0){
        //Je marchais
        if(objNiveau.tableau[numCelluleY+1][numCelluleX] == '#' && objLodeRunner.intDirection == 1){
            objLodeRunner.posX = numCelluleX * 30 + 50;
            objLodeRunner.posY = fltYTemporaire;
            objLodeRunner.etat =1;
        }else if(objNiveau.tableau[numCelluleY][numCelluleX] == '#' && objLodeRunner.intDirection == -1){
            objLodeRunner.posX = numCelluleX * 30 +50;
            objLodeRunner.posY = fltYTemporaire;
            objLodeRunner.etat =1;
        }
    }else if(objLodeRunner.etat == 1){
        //Je suis déjà sur l'échelle

        //Suis-je sorti du niveau (gagné) ?
        if(fltYTemporaire < 50){
            binNiveauReussi = true;
        }

        if(objNiveau.tableau[numCelluleY][numCelluleX] == '#'){
            objLodeRunner.posY = fltYTemporaire;
        }

        if(objNiveau.tableau[numCelluleY+1][numCelluleX] == '#' && objNiveau.tableau[numCelluleY][numCelluleX]!='#'){
            console.log("En haut?");
            objLodeRunner.posY = numCelluleY * 30 +50;
            objLodeRunner.etat = 0;
        }else if(objNiveau.tableau[numCelluleY][numCelluleX] == '='){
            console.log("En bas ?");
            objLodeRunner.posY = (numCelluleY-1) * 30 + 50;
            objLodeRunner.etat = 0;
            //TODO: paufiner le 'snaping', car ça prend un keydown de plus pour 'descendre' de l'échelle
        }
    }
    if(binNiveauReussi){
        niveauReussi();
    }
}

function gaucheDroite(){
    
    let fltXTemporaire = objLodeRunner.posX + (objLodeRunner.vitesse * objLodeRunner.intDirection);
    let binPeutBouger = true;
    //Vérifications

    //Tester limites du niveau
    if(fltXTemporaire < 50){
        fltXTemporaire = 50;
    }else if(fltXTemporaire > objCanvas.width -(50+largeurCellule)){
        fltXTemporaire = objCanvas.width - (50 +largeurCellule);
    }
    
    const numCelluleX = Math.round((fltXTemporaire-50)/30);
    const numCelluleY = Math.round((objLodeRunner.posY-50)/30);

    if(objNiveau.tableau[numCelluleY][numCelluleX] == '*'){
        retirerObjet(numCelluleX,numCelluleY);
        objSons.ramasserLingot.play();
        objNiveau.scoreNiveau += 250;
        objNiveau.lingots--;
        echelleSecrete();
    }

    // Vérifier qu'aucun obstacle est dans le chemin
    if(objNiveau.tableau[numCelluleY][numCelluleX] == '='){
        binPeutBouger = false;
        //TODO: ajuster la position X
    }

    //TODO: planifier à partir d'une échelle aller sur barre franchissement
    //TODO: arreter barre de franchissement vers echelle avant qu'il tombe

    if(objNiveau.tableau[numCelluleY+1][numCelluleX] == ' '){
        if(objNiveau.tableau[numCelluleY][numCelluleX] == '-'){
            console.log("Je suis sur la barre de franchissement");
            objLodeRunner.etat = 3;
        }else{
            console.log("Je tombe");
            binPeutBouger = false;
            //Mettre coordonnées de lode runner au milieu de la cellule
            // avant de tomber
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

    if(objNiveau.tableau[numCelluleY][numCelluleX] == ' '||
            objNiveau.tableau[numCelluleY][numCelluleX] == '_'){
        objLodeRunner.posY = fltYTemporaire;
    }else if(objNiveau.tableau[numCelluleY][numCelluleX] == 'B'){
        //Dans un trou
    }else if(objNiveau.tableau[numCelluleY][numCelluleX] == '-'){
        objLodeRunner.etat = 3;
        objLodeRunner.posY = numCelluleY *30 + 50;
    }else{
        objLodeRunner.etat = 0;
        objLodeRunner.posY = (numCelluleY-1) *30 + 50
    }
    
}

function mettreAJourPositionLR() {

    //Faire chuter si l'etat est 2
    if(objLodeRunner.etat == 2){
        chuter();
        //play son de la chute
        if(objSons.chute.paused){
            objSons.chute.currentTime = 0;
            objSons.chute.play();
        }
    }else{
        //stop son de la chute
        if(!objSons.chute.paused){
            objSons.chute.pause();
        }
    }
}