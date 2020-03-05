function dessinerGardes(){
    for(let i=0;i<tabObjGardes.length;i++){
        dessinerGarde(tabObjGardes[i]);
    }
}

function dessinerLodeRunner() {
    objC2D.save();

    objC2D.fillStyle = '#a09794';
    objC2D.translate(objLodeRunner.posX, objLodeRunner.posY);
    
    //Changer de côté ?
    if(objLodeRunner.intDirection == -1){
        objC2D.scale(-1,1);
        objC2D.translate(-30,0);
    }

    objC2D.beginPath();
    objC2D.arc(15, 6, 5, 0, 2 * Math.PI);
    objC2D.fill();

    objC2D.fillStyle = objLodeRunner.strCouleur;

    //milieu du corps
    objC2D.fillRect(13, 11, 4.5, 10);

    //bras gauche
    objC2D.save();
    objC2D.rotate(2 * Math.PI / 16);
    objC2D.fillRect(12 , 6, 5.5, 3.3);
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
}

function dessinerGarde(objGarde) {
    objC2D.save();

    objC2D.fillStyle = '#a09794';

    objC2D.translate(objGarde.posX, objGarde.posY);

    if(objGarde.intDirection == -1){
        objC2D.scale(-1,1);
        objC2D.translate(-30,0);
    }

    objC2D.beginPath();
    objC2D.arc(15, 6, 5, 0, 2 * Math.PI);
    objC2D.fill();

    objC2D.fillStyle = objGarde.strCouleur;

    //milieu du corps
    objC2D.fillRect(13, 11, 4.5, 10);

     //bras gauche
     objC2D.save();
     objC2D.rotate(2 * Math.PI / 16);
     objC2D.fillRect(12 , 6, 5.5, 3.3);
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
}

function dessinerJet(){
    objC2D.save();
    
    const numCelluleXTrouer = Math.round((objLodeRunner.posX -50) / 30) + objLodeRunner.intDirection;
    const numCelluleYTrouer = Math.ceil((objLodeRunner.posY-50)/30) +1;
    const milieuXLodeRunner = objLodeRunner.posX + largeurCellule/2;
    const milieuYLodeRunner = objLodeRunner.posY + hauteurCellule/2;
    objC2D.fillStyle = 'yellow';
    //objC2D.translate(milieuXLodeRunner,milieuYLodeRunner);
    objC2D.beginPath();
    objC2D.moveTo(milieuXLodeRunner,milieuYLodeRunner);
    objC2D.lineTo(numCelluleXTrouer*30 + 50,numCelluleYTrouer*30+50);
    objC2D.lineTo(numCelluleXTrouer*30 + 50 + 30,numCelluleYTrouer*30+50);
    objC2D.closePath();
    objC2D.fill();
    //objC2D.translate(numCelluleXTrouer*30+50,numCelluleYTrouer*30+50);
    //console.log("Je dessine un jet à "+numCelluleXTrouer*30+50+","+numCelluleYTrouer*30+50);

    objC2D.restore();
}