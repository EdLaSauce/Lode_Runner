

function dessinerLodeRunner() {
    objC2D.save();

    objC2D.fillStyle = '#a09794';
    objC2D.translate(objLodeRunner.posX, objLodeRunner.posY);

    objC2D.beginPath();
    objC2D.arc(6, 8, 4, 0, 2 * Math.PI);
    objC2D.fill();

    objC2D.fillStyle = objLodeRunner.strCouleur;

    objC2D.fillRect(4.5, 12, 3.5, 8);

    //bras gauche
    objC2D.save();
    objC2D.rotate(2 * Math.PI / 16);
    objC2D.fillRect(6, 12, 5, 2.5);
    objC2D.restore();
    objC2D.save();
    objC2D.rotate(-1 * Math.PI / 8);
    objC2D.fillRect(-8, 13, 5, 2.5);

    objC2D.restore();

    objC2D.fillStyle = objLodeRunner.strCouleur;
    //bras droit
    objC2D.save();
    objC2D.rotate(-2 * Math.PI / 16);
    objC2D.fillRect(0, 17, 5, 2.5);
    objC2D.restore();
    objC2D.save();
    objC2D.rotate(-2 * Math.PI / 8);
    objC2D.fillRect(-3, 17, 5, 2.5);
    objC2D.restore();

    objC2D.fillStyle = '#a09794';
    //jambe gauche
    objC2D.save();
    objC2D.rotate(3.5 * Math.PI / 16);
    objC2D.fillRect(16, 13, 3, 6);
    objC2D.rotate(7 * Math.PI / 16);
    objC2D.fillRect(20, -14, 3, 6);
    objC2D.restore();

    //jambe droite
    objC2D.save();
    objC2D.rotate(-7 * Math.PI / 16);
    objC2D.fillRect(-21, 9, 3, 6);
    objC2D.rotate(-7 * Math.PI / 16);
    objC2D.fillRect(-21, -21, 3, 6);
    objC2D.restore();

    objC2D.restore();
}