/*
    Consigner les fonctions nécessaires à tous les mouvements des gardes
*/

function bougerVersLodeRunner(objGarde){
    const fltXGarde = objGarde.posX;
    const fltYGarde = objGarde.posY;
    const fltXLR = objLodeRunner.posX;
    const fltYLR = objLodeRunner.posY;


    /*
        Déterminer la différence des 2 personnage en Y
        une différence négative indique que le garde doit aller en direction -1 Y
                        positive indique que le garde doit aller en direction 1 Y
                        nulle indique qu'ils sont à la même hauteur et qu'on devra
                            chercher en X.
    */
    let differenceY = fltYLR - fltYGarde;

    /*
        Cellules de réferences au garde
    */
    const numCelluleX = Math.round((fltXGarde-50)/30 );
    const numCelluleY = Math.floor((fltYGarde-50)/30);

    //La cellule recherchee (echelle, vide, barre, etc)
    let numCelluleBut = null;

    if(differenceY < 0){
        /*
            On veut monter
        */

        /*
        trouver l'echelle la plus proche au même niveau que le garde
        */
        let diffCellule = cellulesX;
        for(let i = 0; i<objNiveau.tableau[numCelluleY].length;i++){
            if(objNiveau.tableau[numCelluleY][i] == '#'){
                if(Math.abs(i-numCelluleX)<diffCellule){
                    diffCellule = Math.abs(i-numCelluleX);
                    numCelluleBut = i;
                }
            }
        }
        console.log("Monter! -> "+"numCelluleBut: "+numCelluleBut)

        /*
            Comment procéder selon l'état du garde
        */

        if(objGarde.etat == 0 || objGarde.etat == 3){
            //si je marche ou franchi une barre

            const fltDifferenceX = (numCelluleBut*30 + 50) - fltXGarde;
            if(fltDifferenceX < 0){
                objGarde.intDirection = -1;
            }else if(fltDifferenceX > 0){
                objGarde.intDirection = 1;
            }else{
                //je suis sur la case echelle pour monter
                objGarde.etat = 1;
            }

            if(objGarde.etat != 1){
                objGarde.posX = objGarde.posX + (objGarde.vitesse * objGarde.intDirection);
            }

        }else if(objGarde.etat == 1){
            //je monte une echelle

        }

    }else if(differenceY > 0){
        /*
            On veut descendre
        */

        /*
        trouver l'echelle la plus proche ou le vide le plus proche
        */
        let diffCellule = cellulesX;
        for(let i = 0; i<cellulesX;i++){
            if(objNiveau.tableau[numCelluleY+1][i] == '#' || objNiveau.tableau[numCelluleY+1][i] == ' '){
                if(Math.abs(i-numCelluleX)<diffCellule){
                    diffCellule = Math.abs(i-numCelluleX);
                    numCelluleBut = i;
                }
            }
        }
        console.log("Descendre! -> "+"numCelluleBut: "+numCelluleBut)

        if(objGarde.etat == 0){
            //Si je marche
            const fltDifferenceX = (numCelluleBut*30 +50)-fltXGarde;
            if(fltDifferenceX < 0){
                objGarde.intDirection = -1;
            }else if(fltDifferenceX > 0){
                objGarde.intDirection = 1;
            }
            else{
                //entamer la descente

                if(objNiveau.tableau[numCelluleY+1][numCelluleX] == '#'){
                    //En centrer garde pour descendre echelle
                    objGarde.posX = numCelluleX*30 +50;
                    objGarde.etat = 1;
                }else if(objNiveau.tableau[numCelluleY+1][numCelluleX] == ' '){
                    //En tombant
                    objGarde.etat = 2;
                }
            }

            if(objGarde.etat != 2 && objGarde.etat != 1){
                objGarde.posX = objGarde.posX + (objGarde.vitesse * objGarde.intDirection);
            }
        }
        else if(objGarde.etat == 3){
            //Si je franchi une barre

            //Se laisser tomber
            setTimeout(()=>{
                objGarde.etat =2;
            },250);

        }else if(objGarde.etat == 1){
            
            if(objNiveau.tableau[numCelluleY+1][numCelluleX] == '#'){
                //Il y a une échelle plus bas
                objGarde.posY = objGarde.posY + objGarde.vitesse;
            }else if(objNiveau.tableau[numCelluleY+1][numCelluleX] == '='){
                // il y a une passerelle plus bas
                objGarde.etat = 0;
            }
        }
    }else{
        /*
            On est au même niveau que Lode Runner
        */
       if(objGarde.etat == 0){

       }else if(objGarde.etat == 1){
            //Y a-t-il une barre de franchissement à gauche/droite?
            //Y a-t-il une plateforme à gauche/droite?
       }else if(objGarde.etat == 3){

       }
    }
}

function chuteGarde(objGarde){
    if(objGarde.etat == 2){
        const fltTemporaireY = objGarde.posY + 2;
        const numCelluleX = Math.round((objGarde.posX -50) / 30);
        const numCelluleY = Math.ceil((fltTemporaireY-50) / 30);
        //Centrer le garde dans la cellule
        objGarde.posX = numCelluleX * 30 + 50;

        if(objNiveau.tableau[numCelluleY][numCelluleX] == ' '
            || objNiveau.tableau[numCelluleY][numCelluleX] == '_'
            || objNiveau.tableau[numCelluleY][numCelluleX]== '*'){
            objGarde.posY = fltTemporaireY;
        }else if(objNiveau.tableau[numCelluleY][numCelluleX] == '-'){
            objGarde.posY = numCelluleY * 30 +50;
            objGarde.etat = 3;
        }else if(objNiveau.tableau[numCelluleY][numCelluleX] == 'T'){
            objGarde.posY = numCelluleY * 30 + 50;
            //Compter puis sortir du trou
        }else{
            objGarde.etat = 0;
        }
    }
}

function mettreAJourPositionGardes(){
    if(objPointage.binEnMarche){
        for(let i = 0; i< tabObjGardes.length; i++){
            bougerVersLodeRunner(tabObjGardes[i]);
            chuteGarde(tabObjGardes[i]);
            setInterval(()=>{
                //console.log("PosGarde "+i+" : "+tabObjGardes[i].posX+", "+tabObjGardes[i].posY);
                //console.log("etat: "+tabObjGardes[i].etat);
            },2000);
        }
    }
}