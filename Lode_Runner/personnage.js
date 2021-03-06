function dessinerGardes() {
    for (let i = 0; i < tabObjGardes.length; i++) {
        dessinerGarde(tabObjGardes[i]);
    }
}

function dessinerLodeRunner() {
    objC2D.save();

    objC2D.fillStyle = '#a09794';
    objC2D.translate(objLodeRunner.posX, objLodeRunner.posY);

    //Changer de côté ?
    if (objLodeRunner.intDirection == -1) {
        objC2D.scale(-1, 1);
        objC2D.translate(-30, 0);
    }

    objC2D.beginPath();
    objC2D.arc(15, 6, 5, 0, 2 * Math.PI);
    objC2D.fill();

    objC2D.fillStyle = objLodeRunner.strCouleur;

    //milieu du corps
    objC2D.fillRect(13, 11, 4.5, 10);

    dessinerLodeRunnerHorizontal();
    dessinerLodeRunnerVertical();
    
    objC2D.restore();
}

function dessinerLodeRunnerHorizontal() {
    //État 0 :marche 
    if (objLodeRunner.intNbDeplacementH % 2 != 0 && objLodeRunner.etat == 0) {
        //bras gauche
        objC2D.save();
        objC2D.rotate(2 * Math.PI / 16);
        objC2D.fillRect(12, 6, 5.5, 3.3);
        objC2D.restore();
        
        objC2D.save();
        objC2D.rotate(-1 * Math.PI / 8);
        objC2D.fillRect(-1, 13, 5, 3.3);

        objC2D.restore();

        //bras droit
        objC2D.save();
        objC2D.rotate(-2 * Math.PI / 16);
        objC2D.fillRect(10, 18, 5.5, 3.3);
        objC2D.restore();

        objC2D.save();
        objC2D.rotate(-2 * Math.PI / 8);
        objC2D.fillRect(5, 22, 5, 3.3);
        objC2D.restore();

        objC2D.fillStyle = '#a09794';
        //jambe gauche
        objC2D.save();
        objC2D.rotate(3.5 * Math.PI / 16);
        objC2D.fillRect(22, 7, 3.5, 7);
        objC2D.rotate(7 * Math.PI / 16);
        objC2D.fillRect(16, -22, 3.5, 7);
        objC2D.restore();

        //jambe droite
        objC2D.save();
        objC2D.rotate(-7 * Math.PI / 16);
        objC2D.fillRect(-20, 18, 3.5, 7);
        objC2D.rotate(-7 * Math.PI / 16);
        objC2D.fillRect(-30, -20, 3.5, 8);
        objC2D.restore();

        objC2D.restore();
        //état 0: marche 
    } else if (objLodeRunner.intNbDeplacementH % 2 == 0 && objLodeRunner.etat == 0) {
        //bras gauche
        objC2D.save();
        objC2D.rotate(6 * Math.PI / 16);
        objC2D.fillRect(17, -4, 5.5, 3.3);
        objC2D.restore();

        objC2D.save();
        objC2D.rotate(-1.5 * Math.PI / 8);
        objC2D.fillRect(-1, 17, 5, 3.3);
        objC2D.restore();

        //bras droit
        objC2D.save();
        objC2D.rotate(3.5 * Math.PI / 16);
        objC2D.fillRect(21, -1, 5.5, 3.3);
        objC2D.restore();
        objC2D.save();
        objC2D.rotate(-2 * Math.PI / 8);
        objC2D.fillRect(1, 24, 5, 3.3);
        objC2D.restore();

        objC2D.fillStyle = '#a09794';

        //jambe droite
        objC2D.save();
        objC2D.rotate(-2 * Math.PI / 16);
        objC2D.fillRect(5, 26, 3.5, 5);
        objC2D.rotate(3 * Math.PI / 16);
        objC2D.fillRect(21, 21, 3.5, 5);
        objC2D.restore();

        //jambe gauche
        objC2D.save();
        objC2D.rotate(2 * Math.PI / 16);
        objC2D.fillRect(20, 13, 3.5, 7);
        objC2D.rotate(2 * Math.PI / 16);
        objC2D.fillRect(26, 10, 3.5, 5);
        objC2D.restore();

        objC2D.restore();
    } else if (objLodeRunner.etat == 3) {
        //état 3: barre de franchissement
        objC2D.fillStyle = '#a09794';

        if (objLodeRunner.intNbDeplacementH % 2 == 0) {
            objC2D.save();
            objC2D.rotate(-2 * Math.PI / 16);
            objC2D.fillRect(5, 25, 3.5, 6);
            objC2D.rotate(3 * Math.PI / 16);
            objC2D.fillRect(22, 21, 3.5, 5);
            objC2D.restore();

            objC2D.scale(-1, 1);
            objC2D.translate(-30, 0);

            objC2D.save();
            objC2D.rotate(-2 * Math.PI / 16);
            objC2D.fillRect(5, 25, 3.5, 5);
            objC2D.rotate(3 * Math.PI / 16);
            objC2D.fillRect(21, 20, 3.5, 5);
            objC2D.restore();
        } else {
            objC2D.save();
            objC2D.rotate(-2 * Math.PI / 16);
            objC2D.fillRect(5, 26, 3.5, 5);
            objC2D.rotate(3 * Math.PI / 16);
            objC2D.fillRect(21, 22, 3.5, 5);
            objC2D.restore();

            objC2D.save();
            objC2D.rotate(2 * Math.PI / 16);
            objC2D.fillRect(20, 13, 3.5, 7);
            objC2D.rotate(2 * Math.PI / 16);
            objC2D.fillRect(26, 10, 3.5, 5);
            objC2D.restore();
        }

        objC2D.fillStyle = objLodeRunner.strCouleur;
        //bras gauche
        objC2D.save();
        objC2D.rotate(6 * Math.PI / 16);
        objC2D.fillRect(17, -4, 5.5, 3.3);
        objC2D.restore();

        objC2D.save();
        objC2D.rotate(-1.5 * Math.PI / 8);
        objC2D.fillRect(-1, 17, 5, 3.3);

        objC2D.restore();

        //bras droit
        objC2D.save();
        objC2D.rotate(-2 * Math.PI / 16);
        objC2D.fillRect(10, 18, 5.5, 3.3);
        objC2D.restore();

        objC2D.save();
        objC2D.rotate(-2 * Math.PI / 8);
        objC2D.fillRect(5, 22, 5, 3.3);
        objC2D.restore();

        objC2D.restore();
    } else if (objLodeRunner.etat == 5) {
        //état 5: creuser un trou
        //bras gauche
        objC2D.save();
        objC2D.rotate(5 * Math.PI / 16);
        objC2D.fillRect(17, -4, 5.5, 3.3);
        objC2D.restore();

        objC2D.save();
        objC2D.rotate(-1.5 * Math.PI / 8);
        objC2D.fillRect(-1, 17, 5, 3.3);
        objC2D.restore();

        //bras droit
        objC2D.save();
        objC2D.rotate(3.5 * Math.PI / 16);
        objC2D.fillRect(21, -1, 5.5, 3.3);
        objC2D.restore();

        objC2D.save();
        objC2D.rotate(-4 * Math.PI / 8);
        objC2D.fillRect(-19, 20, 5, 3.3);
        objC2D.restore();

        objC2D.fillStyle = '#a09794';

        //jambe droite
        objC2D.save();
        objC2D.rotate(-2 * Math.PI / 16);
        objC2D.fillRect(5, 26, 3.5, 5);
        objC2D.rotate(3 * Math.PI / 16);
        objC2D.fillRect(21, 21, 3.5, 5);
        objC2D.restore();

        //jambe gauche
        objC2D.save();
        objC2D.rotate(2 * Math.PI / 16);
        objC2D.fillRect(20, 13, 3.5, 7);
        objC2D.rotate(2 * Math.PI / 16);
        objC2D.fillRect(26, 10, 3.5, 5);
        objC2D.restore();

        objC2D.restore();
    }
}

function dessinerLodeRunnerVertical() {
    if (objLodeRunner.etat == 1 || objLodeRunner.etat == 2) {
        //état 2 : chuter
        //état 1: monter/descendre et sortir du trou

        if (objLodeRunner.intNbDeplacementV % 2 == 0) {
            objC2D.scale(-1, 1);
            objC2D.translate(-30, 0);
        }
        //bras gauche
        objC2D.save();
        objC2D.rotate(7 * Math.PI / 16);
        objC2D.fillRect(14, -7, 5.5, 3.3);
        objC2D.restore();

        objC2D.save();
        objC2D.rotate(-2 * Math.PI / 8);
        objC2D.fillRect(-5, 17, 5, 3.3);
        objC2D.restore();

        //bras gauche
        objC2D.save();
        objC2D.rotate(-4 * Math.PI / 16);
        objC2D.fillRect(2, 21, 5, 3.3);
        objC2D.restore();
        objC2D.save();
        objC2D.rotate(-2.5 * Math.PI / 8);
        objC2D.fillRect(2, 22, 5, 3.3);
        objC2D.restore();

        objC2D.fillStyle = '#a09794';

        //jambe gauche
        objC2D.save();
        objC2D.rotate(1.5 * Math.PI / 16);
        objC2D.fillRect(25, 10, 3.5, 7);
        objC2D.rotate(2 * Math.PI / 16);
        objC2D.fillRect(26, 0, 3.5, 8);
        objC2D.restore();

        //jambe droite
        objC2D.save();
        objC2D.rotate(1 * Math.PI / 16);
        objC2D.fillRect(17, 22, 3.5, 7);
        objC2D.rotate(2 * Math.PI / 16);
        objC2D.fillRect(24, 9, 4, 5);
        objC2D.restore();

        objC2D.restore();
    }
}

function dessinerGarde(objGarde) {

    objC2D.save();

    objC2D.translate(objGarde.posX, objGarde.posY);
    
    objC2D.fillStyle = '#a09794';
    objC2D.beginPath();
    objC2D.arc(15, 6, 5, 0, 2 * Math.PI);
    objC2D.fill();

    if(objGarde.binLingot){
        objC2D.fillStyle = 'GoldenRod';
    }else{
        objC2D.fillStyle = objGarde.strCouleur;
    }

    //milieu du corps
    objC2D.fillRect(13, 11, 4.5, 10);

    if (objGarde.intDirection == -1) {
        objC2D.scale(-1, 1);
        objC2D.translate(-30, 0);
    }

    dessinerGardeHorizontale(objGarde);
    dessinerGardeVertical(objGarde);

    objC2D.restore();
   
}

function dessinerGardeHorizontale(objGarde){
  //État 0 :marche 
  if (objGarde.intNbDeplacementH % 15 < 7 && objGarde.etat == 0) {
         //bras gauche
         objC2D.save();
         objC2D.rotate(6 * Math.PI / 16);
         objC2D.fillRect(17, -4, 5.5, 3.3);
         objC2D.restore();

         objC2D.save();
         objC2D.rotate(-1.5 * Math.PI / 8);
         objC2D.fillRect(-1, 17, 5, 3.3);
         objC2D.restore();
 
         //bras droit
         objC2D.save();
         objC2D.rotate(3.5 * Math.PI / 16);
         objC2D.fillRect(21, -1, 5.5, 3.3);
         objC2D.restore();

         objC2D.save();
         objC2D.rotate(-2 * Math.PI / 8);
         objC2D.fillRect(1, 24, 5, 3.3);
         objC2D.restore();
 
         objC2D.fillStyle = '#a09794';
 
         //jambe droite
         objC2D.save();
         objC2D.rotate(-2 * Math.PI / 16);
         objC2D.fillRect(5, 26, 3.5, 5);
         objC2D.rotate(3 * Math.PI / 16);
         objC2D.fillRect(21, 21, 3.5, 5);
         objC2D.restore();
 
         //jambe gauche
         objC2D.save();
         objC2D.rotate(2 * Math.PI / 16);
         objC2D.fillRect(20, 13, 3.5, 7);
         objC2D.rotate(2 * Math.PI / 16);
         objC2D.fillRect(26, 10, 3.5, 5);
         objC2D.restore();
 

    }else if (objGarde.intNbDeplacementH % 15 >= 7 && objGarde.etat == 0) {
        //bras gauche
        objC2D.save();
        objC2D.rotate(2 * Math.PI / 16);
        objC2D.fillRect(12, 6, 5.5, 3.3);
        objC2D.restore();

        objC2D.save();
        objC2D.rotate(-1 * Math.PI / 8);
        objC2D.fillRect(-1, 13, 5, 3.3);
        objC2D.restore();

        //bras droit
        objC2D.save();
        objC2D.rotate(-2 * Math.PI / 16);
        objC2D.fillRect(10, 18, 5.5, 3.3);
        objC2D.restore();

        objC2D.save();
        objC2D.rotate(-2 * Math.PI / 8);
        objC2D.fillRect(5, 22, 5, 3.3);
        objC2D.restore();

        objC2D.fillStyle = '#a09794';
        //jambe gauche
        objC2D.save();
        objC2D.rotate(3.5 * Math.PI / 16);
        objC2D.fillRect(22, 7, 3.5, 7);
        objC2D.rotate(7 * Math.PI / 16);
        objC2D.fillRect(16, -22, 3.5, 7);
        objC2D.restore();

        //jambe droite
        objC2D.save();
        objC2D.rotate(-7 * Math.PI / 16);
        objC2D.fillRect(-20, 18, 3.5, 7);
        objC2D.rotate(-7 * Math.PI / 16);
        objC2D.fillRect(-30, -20, 3.5, 8);
        objC2D.restore();

    }else if (objGarde.etat == 3) {
        //état 3: barre de franchissement
        objC2D.fillStyle = '#a09794';

        if (objGarde.intNbDeplacementH % 15 < 7) {
            objC2D.save();
            objC2D.rotate(-2 * Math.PI / 16);
            objC2D.fillRect(5, 25, 3.5, 6);
            objC2D.rotate(3 * Math.PI / 16);
            objC2D.fillRect(22, 21, 3.5, 5);
            objC2D.restore();

            objC2D.scale(-1, 1);
            objC2D.translate(-30, 0);

            objC2D.save();
            objC2D.rotate(-2 * Math.PI / 16);
            objC2D.fillRect(5, 25, 3.5, 5);
            objC2D.rotate(3 * Math.PI / 16);
            objC2D.fillRect(21, 20, 3.5, 5);
            objC2D.restore();
        } else {
            objC2D.save();
            objC2D.rotate(-2 * Math.PI / 16);
            objC2D.fillRect(5, 26, 3.5, 5);
            objC2D.rotate(3 * Math.PI / 16);
            objC2D.fillRect(21, 22, 3.5, 5);
            objC2D.restore();

            objC2D.save();
            objC2D.rotate(2 * Math.PI / 16);
            objC2D.fillRect(20, 13, 3.5, 7);
            objC2D.rotate(2 * Math.PI / 16);
            objC2D.fillRect(26, 10, 3.5, 5);
            objC2D.restore();
        }
        if(objGarde.binLingot){
            objC2D.fillStyle = 'GoldenRod';
        }else{
            objC2D.fillStyle = objGarde.strCouleur;
        }
       
        //bras gauche
        objC2D.save();
        objC2D.rotate(6 * Math.PI / 16);
        objC2D.fillRect(17, -4, 5.5, 3.3);
        objC2D.restore();

        objC2D.save();
        objC2D.rotate(-1.5 * Math.PI / 8);
        objC2D.fillRect(-1, 17, 5, 3.3);
        objC2D.restore();

        //bras droit
        objC2D.save();
        objC2D.rotate(-2 * Math.PI / 16);
        objC2D.fillRect(10, 18, 5.5, 3.3);
        objC2D.restore();

        objC2D.save();
        objC2D.rotate(-2 * Math.PI / 8);
        objC2D.fillRect(5, 22, 5, 3.3);
        objC2D.restore();

    } 
}

function dessinerGardeVertical(objGarde){
    if (objGarde.etat == 1 || objGarde.etat == 2) {
        //état 2 : chuter
        //état 1: monter/descendre et sortir du trou

        if ( objGarde.intNbDeplacementV % 15 < 7) {
            objC2D.scale(-1, 1);
            objC2D.translate(-30, 0);
        }
        //bras gauche
        objC2D.save();
        objC2D.rotate(7 * Math.PI / 16);
        objC2D.fillRect(14, -7, 5.5, 3.3);
        objC2D.restore();
        objC2D.save();
        objC2D.rotate(-2 * Math.PI / 8);
        objC2D.fillRect(-5, 17, 5, 3.3);

        objC2D.restore();

        //bras gauche
        objC2D.save();
        objC2D.rotate(-4 * Math.PI / 16);
        objC2D.fillRect(2, 21, 5, 3.3);
        objC2D.restore();
        objC2D.save();
        objC2D.rotate(-2.5 * Math.PI / 8);
        objC2D.fillRect(2, 22, 5, 3.3);
        objC2D.restore();

        objC2D.fillStyle = '#a09794';

        //jambe gauche
        objC2D.save();
        objC2D.rotate(1.5 * Math.PI / 16);
        objC2D.fillRect(25, 10, 3.5, 7);
        objC2D.rotate(2 * Math.PI / 16);
        objC2D.fillRect(26, 0, 3.5, 8);
        objC2D.restore();

        //jambe droite
        objC2D.save();
        objC2D.rotate(1 * Math.PI / 16);
        objC2D.fillRect(17, 22, 3.5, 7);
        objC2D.rotate(2 * Math.PI / 16);
        objC2D.fillRect(24, 9, 4, 5);
        objC2D.restore();

        objC2D.restore();
    }
}

function dessinerJet() {
    objC2D.save();

    const numCelluleXTrouer = Math.round((objLodeRunner.posX - 50) / 30) + objLodeRunner.intDirection;
    const numCelluleYTrouer = Math.ceil((objLodeRunner.posY - 50) / 30) + 1;
    const milieuXLodeRunner = objLodeRunner.posX + largeurCellule / 2;
    const milieuYLodeRunner = objLodeRunner.posY + hauteurCellule / 2;
    objC2D.fillStyle = 'yellow';
    objC2D.beginPath();
    objC2D.moveTo(milieuXLodeRunner, milieuYLodeRunner);
    objC2D.lineTo(numCelluleXTrouer * 30 + 50, numCelluleYTrouer * 30 + 50);
    objC2D.lineTo(numCelluleXTrouer * 30 + 50 + 30, numCelluleYTrouer * 30 + 50);
    objC2D.closePath();
    objC2D.fill();

    objC2D.restore();
}