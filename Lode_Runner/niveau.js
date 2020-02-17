const cellulesX = 28;
const cellulesY = 17;

function dessinerFond(){
    objC2D.save();
    objC2D.fillStyle = 'black';
    objC2D.fillRect(0, 0, objCanvas.width, objCanvas.height);
    objC2D.restore();
}

function dessinerPlateforme(){
    objC2D.save();

    objC2D.restore();
}