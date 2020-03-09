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
    let intCelluleBloqueGauche = 0;
    let intCelluleBloqueDroite = cellulesX;

    if(objNiveau.tableau[numCelluleY][numCelluleX]=='*' && objGarde.binLingot == false){
        objGarde.binLingot = true;
        retirerObjet(numCelluleX,numCelluleY);
    }

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
        //console.log("Monter! -> "+"numCelluleBut: "+numCelluleBut)

        /*
            Comment procéder selon l'état du garde
        */
        //if(numCelluleBut != null){
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
                    objGarde.posX = numCelluleX*30 + 50;
                }
    
                if(objGarde.etat != 1){
                    objGarde.posX = objGarde.posX + (objGarde.vitesse * objGarde.intDirection);
                    //objGarde.intNbDeplacementH++;
                }
    
            }else if(objGarde.etat == 1){
                //je monte une echelle
                if(objNiveau.tableau[numCelluleY][numCelluleX] == '#'){
                    objGarde.posY = objGarde.posY - objGarde.vitesse;
                    //objGarde.intNbDeplacementV++;
                }else if(objNiveau.tableau[numCelluleY+1][numCelluleX]== '#'
                            &&(objNiveau.tableau[numCelluleY][numCelluleX]== ' '
                                ||objNiveau.tableau[numCelluleY][numCelluleX]=='-')){
                    objGarde.posY = objGarde.posY - objGarde.vitesse;
                    //objGarde.intNbDeplacementV++;
                }else if(objNiveau.tableau[numCelluleY][numCelluleX] == 'G' ||
                            objNiveau.tableau[numCelluleY+1][numCelluleX]=='G'){
                    //objGarde.posY = objGarde.posY - objGarde.vitesse;
                    //objGarde.intNbDeplacementV++;
                }else{
                    objGarde.etat = 0;
                }
            }
            //console.log("etat: "+objGarde.etat+", cellule : "+objNiveau.tableau[numCelluleY][numCelluleX]);
        //}else{
        //    console.log("pas de cellule but")
        //}
        

    }else if(differenceY > 0){
        /*
            On veut descendre
        */

        /*
        trouver l'echelle la plus proche ou le vide le plus proche
        */

        //Voir blocages à gauche.
        let binGauche = false;
        for(let i =numCelluleX;i>=0&&!binGauche;i--){
            if(objNiveau.tableau[numCelluleY][i] == '='){
                intCelluleBloqueGauche = i;
                binGauche=true;
            }
        }

        let binDroite = false;
        for(let i =numCelluleX;i<cellulesX&&!binDroite;i++){
            if(objNiveau.tableau[numCelluleY][i] == '='){
                intCelluleBloqueDroite = i;
                binDroite=true;
            }
        }

        let diffCellule = cellulesX;
        for(let i = intCelluleBloqueGauche; i<intCelluleBloqueDroite;i++){
            if(objNiveau.tableau[numCelluleY+1][i] == '#' || objNiveau.tableau[numCelluleY+1][i] == ' '){
                if(Math.abs(i-numCelluleX)<diffCellule){
                    diffCellule = Math.abs(i-numCelluleX);
                    numCelluleBut = i;
                }
            }
        }

        //console.log("numCelluleBut:"+numCelluleBut);
       // console.log("Descendre! -> "+"numCelluleBut: "+numCelluleBut)
       const fltDifferenceX = (numCelluleBut*30 +50)-fltXGarde;
       

        if(objGarde.etat == 0){
            //Si je marche
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
                //objGarde.intNbDeplacementH++;
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
                //objGarde.intNbDeplacementV++;
            }else if(objNiveau.tableau[numCelluleY][numCelluleX] == 'G' ||
                    objNiveau.tableau[numCelluleY+1][numCelluleX]=='G'){
                        //objGarde.posY = objGarde.posY - objGarde.vitesse;
                        //objGarde.intNbDeplacementV++;
            }else if(objNiveau.tableau[numCelluleY+1][numCelluleX] == '='){
                // il y a une passerelle plus bas
                objGarde.etat = 0;
            }
        }
    }else{
        /*
            On est au même niveau que Lode Runner
        */
       const fltDifferenceLR = fltXLR - fltXGarde;
       if(fltDifferenceLR > 0){
           objGarde.intDirection = 1
       }else if(fltDifferenceLR < 0){
           objGarde.intDirection = -1;
       }

       if(objGarde.etat == 0){

            let binPeutBouger = true;
            if(objNiveau.tableau[numCelluleY][numCelluleX+objGarde.intDirection] == '='){
                binPeutBouger =false;
            }else if(objNiveau.tableau[numCelluleY][numCelluleX+objGarde.intDirection]=='-'){
                objGarde.etat = 3;
            }else if(objNiveau.tableau[numCelluleY+1][numCelluleX] == 'T'){
                objGarde.etat = 2;
                //binPeutBouger =false;
            }else if(objNiveau.tableau[numCelluleY+1][numCelluleX] == ' '){
                objGarde.etat =2;
            }
            
            if(binPeutBouger){
                objGarde.posX = objGarde.posX + (objGarde.vitesse * objGarde.intDirection);
                //objGarde.intNbDeplacementH++;
                console.log("vers LR");
            }else{
                console.log("Bloqué");
            }
        
       }else if(objGarde.etat == 1){
           console.log("etat garde: "+objGarde.etat);
           console.log("cell: "+objNiveau.tableau[numCelluleY+1][numCelluleX+objGarde.intDirection]);
           if(objNiveau.tableau[numCelluleY+1][numCelluleX+objGarde.intDirection] == '='
                ||objNiveau.tableau[numCelluleY+1][numCelluleX+objGarde.intDirection]=='T'
                    ||objNiveau.tableau[numCelluleY+1][numCelluleX+objGarde.intDirection]=='G'){
               //Y a-t-il une plateforme à gauche/droite?
               objGarde.etat = 0;
               //console.log("Passerelle gauche/droite");
           }else if(objNiveau.tableau[numCelluleY][numCelluleX+objGarde.intDirection] == '-'){
               //Y a-t-il une barre de franchissement à gauche/droite?
                objGarde.etat = 3;
                //console.log("Barre franchissement gauche/droite");
           }
       }else if(objGarde.etat == 3){
            objGarde.posX = objGarde.posX + (objGarde.vitesse * objGarde.intDirection);
            if(objNiveau.tableau[numCelluleY+1][numCelluleX+objGarde.intDirection]=='='){
                objGarde.etat = 0;
            }else if(objNiveau.tableau[numCelluleY+1][numCelluleX+objGarde.intDirection]=='T'){
                
                objGarde.etat  =2;
            }
       }
    }
    if (objGarde.etat == 3 || objGarde.etat == 0){
        objGarde.intNbDeplacementH++;
    }else if (objGarde.etat == 1){
        objGarde.intNbDeplacementV++;
    }
}

function chuteGarde(objGarde){
    const fltTemporaireY = objGarde.posY + 2;
    const numCelluleX = Math.round((objGarde.posX -50) / 30);
    const numCelluleY = Math.ceil((fltTemporaireY-50) / 30);
    if(objGarde.etat == 2){
        
        //Centrer le garde dans la cellule
        objGarde.posX = numCelluleX * 30 + 50;
        if(objNiveau.tableau[Math.ceil((objGarde.posY-50)/30)][numCelluleX] != 'T'&&
        objNiveau.tableau[Math.ceil((objGarde.posY-50)/30)][numCelluleX] != 'G'){
            if(objNiveau.tableau[numCelluleY][numCelluleX] == ' '
                    || objNiveau.tableau[numCelluleY][numCelluleX] == '_'
                    || objNiveau.tableau[numCelluleY][numCelluleX]== '*'){
                objGarde.posY = fltTemporaireY;
            }else if(objNiveau.tableau[numCelluleY][numCelluleX] == '-'){
                objGarde.posY = numCelluleY * 30 +50;
                objGarde.etat = 3;
            }else if(objNiveau.tableau[numCelluleY][numCelluleX] == 'T'){
                console.log("dans un trou");
                mettreObjet(numCelluleX,numCelluleY,'G');
                objGarde.posY = numCelluleY * 30 + 50;
                //Compter puis sortir du trou
                if(objSons.gardeDansTrou.duration > 0){
                    objSons.gardeDansTrou.currentTime = 0;
                }
                objSons.gardeDansTrou.play();
                
                if(objGarde.binLingot){
                    mettreObjet(numCelluleX,numCelluleY-1,'*');
                    objGarde.binLingot = false;
                }
                setTimeout(()=>{
                    objGarde.etat =1;
                },4000)

                //ajout score lorsque garde tombe dans un trou
                objNiveau.scoreNiveau += 75;

            }else{
                objGarde.etat = 0;
            }
        }
    }else if(objGarde.etat ==1){
        if(objNiveau.tableau[Math.ceil((objGarde.posY-50)/30)][numCelluleX] == 'G'){
            //le garde est pris dans le trou
            objGarde.posY = objGarde.posY - objGarde.vitesse;
            console.log("Dans trou fltY: "+objGarde.posY);
        }else if(objNiveau.tableau[(Math.floor((objGarde.posY-50)/30))+1][numCelluleX] == 'G'){
            objGarde.posY = Math.floor((objGarde.posY-50)/30)*30 + 50;
            objGarde.etat = 0;
            console.log("Sorti du trou fltY: "+objGarde.posY);
            //mettreObjet(Math.floor((objGarde.posX-50)/30),Math.floor((objGarde.posY-50)/30),'T');
        }
    }
}

function mortGarde(objGarde){
    if(objGarde.etat == 4){
        console.log("Garde est mort");
        if(objSons.gardeMort.duration >0){
            objSons.gardeMort.currentTime = 0;
        }
        objSons.gardeMort.play();
        //setTimeout(()=>{
            //respawn
            let random = Math.floor(Math.random()*objNiveau.tabReapparition.length);
            objGarde.posX = objNiveau.tabReapparition[random][0] * largeurCellule + 50;
            objGarde.posY = objNiveau.tabReapparition[random][1] * hauteurCellule + 50;
            objNiveau.scoreNiveau += 75;
            objGarde.etat =0;
        //},350);
    }
}

function collision(objGarde){
    const numCelluleX = Math.round((objGarde.posX-50)/30);
    const numCelluleY = Math.round((objGarde.posY-50)/30);
    if(objNiveau.tableau[numCelluleY][numCelluleX] == '='){
        objGarde.etat = 4;
    }else if((objGarde.posX < (objLodeRunner.posX +(largeurCellule/2))&&(objGarde.posX+(largeurCellule/2))>objLodeRunner.posX)
        &&(objGarde.posY <(objLodeRunner.posY+(hauteurCellule/2))&&(objGarde.posY+(hauteurCellule/2))>objLodeRunner.posY)){
        objLodeRunner.etat = 4;
    }
}

function mettreAJourPositionGardes(){
    if(objPointage.binEnMarche){
        for(let i = 0; i< tabObjGardes.length; i++){
            chuteGarde(tabObjGardes[i]);
            bougerVersLodeRunner(tabObjGardes[i]);
            collision(tabObjGardes[i]);
            mortGarde(tabObjGardes[i]);
        }
    }
}