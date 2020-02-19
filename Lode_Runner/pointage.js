function dessinerPointage(){

}

function dessinerContour(){
    objC2D.save();
    objC2D.fillStyle = '#e2a005';

    objC2D.fillRect(0,0,50,objCanvas.height); //contour gauche
    objC2D.fillRect(0,0,objCanvas.width,50); //contour haut
    objC2D.fillRect(0,objCanvas.height,objCanvas.width,-50); //contour bas
    objC2D.fillRect(objCanvas.width,0,-50,objCanvas.height); //contour droit

    //Texte
    objC2D.strokeStyle = 'black';
    objC2D.font = 'bold 40pt arial'
    objC2D.textBaseline = 'middle';
    objC2D.textAlign = 'center';

    objC2D.strokeText("Lode Runner",objCanvas.width/2,25);
    objC2D.font = 'bold 30pt arial'
    objC2D.strokeText("Par Caroline Boudreau & Émil Dallaire",objCanvas.width/2,objCanvas.height-20);

    objC2D.restore();
}