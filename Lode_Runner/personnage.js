

function dessinerLodeRunner() {
    objC2D.save();

    objC2D.fillStyle = '#a09794';
    objC2D.translate(objLodeRunner.posX, objLodeRunner.posY);

    objC2D.beginPath();
    objC2D.arc(6, 6, 5, 0, 2 * Math.PI);
    objC2D.fill();

    objC2D.fillStyle = objLodeRunner.strCouleur;

    //milieu du corps
    objC2D.fillRect(4, 11, 4.5, 10);

    //bras gauche
    objC2D.save();
    objC2D.rotate(2 * Math.PI / 16);
    objC2D.fillRect(4.5, 11, 5.5, 3.3);
    objC2D.restore();
    objC2D.save();
    objC2D.rotate(-1 * Math.PI / 8);
    objC2D.fillRect(-10, 11, 5, 3.3);

    objC2D.restore();

    //bras droit
    objC2D.save();
    objC2D.rotate(-2 * Math.PI / 16);
    objC2D.fillRect(1, 17, 5.5, 3.3);
    objC2D.restore();
    objC2D.save();
    objC2D.rotate(-2 * Math.PI / 8);
    objC2D.fillRect(-2, 18, 5, 3.3);
    objC2D.restore();

    objC2D.fillStyle = '#a09794';
    //jambe gauche
    objC2D.save();
    objC2D.rotate(3.5 * Math.PI / 16);
    objC2D.fillRect(16, 11, 3.5, 7);
    objC2D.rotate(7 * Math.PI / 16);
    objC2D.fillRect(20, -15, 3.5, 7);
    objC2D.restore();

    //jambe droite
    objC2D.save();
    objC2D.rotate(-7 * Math.PI / 16);
    objC2D.fillRect(-22, 10, 3.5, 7);
    objC2D.rotate(-7 * Math.PI / 16);
    objC2D.fillRect(-22, -23, 3.5, 8);
    objC2D.restore();

    objC2D.restore();

    objC2D.restore();
}

function dessinerGardes() {
    objC2D.save();

    objC2D.fillStyle = '#a09794';

    //À changer lorsque nous allons avoir la position aléatoire des gardes
    objC2D.translate(objLodeRunner.posX - 60, objLodeRunner.posY);

    objC2D.beginPath();
    objC2D.arc(6, 6, 5, 0, 2 * Math.PI);
    objC2D.fill();

    // À changer lorsque initObjTabGardes sera appelé pour l'objet tabObjGardes[0].objGarde.strCouleur
    objC2D.fillStyle = 'red';

    //milieu du corps
    objC2D.fillRect(4, 11, 4.5, 10);

    //bras gauche
    objC2D.save();
    objC2D.rotate(2 * Math.PI / 16);
    objC2D.fillRect(5, 11, 5.5, 3.3);
    objC2D.restore();
    objC2D.save();
    objC2D.rotate(-1 * Math.PI / 8);
    objC2D.fillRect(-10, 11, 5, 3.3);

    objC2D.restore();

    //bras droit
    objC2D.save();
    objC2D.rotate(-2 * Math.PI / 16);
    objC2D.fillRect(1, 17, 5.5, 3.3);
    objC2D.restore();
    objC2D.save();
    objC2D.rotate(-2 * Math.PI / 8);
    objC2D.fillRect(-2, 18, 5, 3.3);
    objC2D.restore();

    objC2D.fillStyle = '#a09794';
    //jambe gauche
    objC2D.save();
    objC2D.rotate(3.5 * Math.PI / 16);
    objC2D.fillRect(16, 12, 3.5, 7);
    objC2D.rotate(7 * Math.PI / 16);
    objC2D.fillRect(20, -15, 3.5, 7);
    objC2D.restore();

    //jambe droite
    objC2D.save();
    objC2D.rotate(-7 * Math.PI / 16);
    objC2D.fillRect(-22, 10, 3.5, 7);
    objC2D.rotate(-7 * Math.PI / 16);
    objC2D.fillRect(-22, -23, 3.5, 8);
    objC2D.restore();

    objC2D.restore();

    objC2D.restore();
}