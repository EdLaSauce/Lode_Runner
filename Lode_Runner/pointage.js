
let minutes = 0;
let secondes = 0;
let millisecondes=0;

function dessinerPointage() {
    objC2D.save();
    let strTemps = minutes + ':' + secondes;

    objC2D.translate(50, 50 + cellulesY * hauteurCellule);
    var degrade = objC2D.createLinearGradient(0, 0, objCanvas.width - 100, 0);

    degrade.addColorStop("0", "#006600");
    degrade.addColorStop("0.5", "#00cc00");
    degrade.addColorStop("1", "#336600");
    objC2D.fillStyle = degrade;
    objC2D.fillRect(0, 0, objCanvas.width - 100, 100);

    objC2D.font = 'bold 20pt arial'
    objC2D.textBaseline = 'middle';

    objC2D.textAlign = 'left';

    objC2D.fillStyle = 'black';

    objC2D.translate(10, 50);
    objC2D.fillText("Score: "+(objPointage.scoreCumul+objNiveau.scoreNiveau), 0, 0);
    objC2D.translate((objCanvas.width - 100) / 3, 0);
    objC2D.fillText("Temps:" + String(strTemps), 0, 0);
    objC2D.translate((objCanvas.width - 100) / 3.5, 0);
    objC2D.fillText("Niveau: "+objNiveau.numero, 0, 0);
    objC2D.translate((objCanvas.width - 100) / 5, 0);
    objC2D.fillText("Vies: "+objLodeRunner.nbVies, 0, 0);

    objC2D.restore();
}

function dessinerContour() {
    objC2D.save();
    objC2D.fillStyle = '#e2a005';

    objC2D.fillRect(0, 0, 50, objCanvas.height); //contour gauche
    objC2D.fillRect(0, 0, objCanvas.width, 50); //contour haut
    objC2D.fillRect(0, objCanvas.height, objCanvas.width, -50); //contour bas
    objC2D.fillRect(objCanvas.width, 0, -50, objCanvas.height); //contour droit

    //Texte
    objC2D.strokeStyle = 'black';
    objC2D.font = 'bold 40pt arial'
    objC2D.textBaseline = 'middle';
    objC2D.textAlign = 'center';

    objC2D.strokeText("Lode Runner", objCanvas.width / 2, 25);
    objC2D.font = 'bold 30pt arial'
    objC2D.strokeText("Par Caroline Boudreau & Émil Dallaire", objCanvas.width / 2, objCanvas.height - 20);

    objC2D.restore();
}


function mettreAJourTemps() {
    let dateTemp;
    let tempsTemp;
    let intSecEcoulees;

    minutes = parseInt(minutes);
    secondes = parseInt(secondes);

    if (objPointage.binEnMarche) {
        dateTemp = new Date();
        tempsTemp = dateTemp.getTime();

        intSecEcoulees = tempsTemp - objPointage.temps;
        objPointage.temps = tempsTemp;

        millisecondes += intSecEcoulees;
        //console.log(secondes);
        if (millisecondes>=1002){
            secondes+=1;
            millisecondes=0;
        }
        if (secondes == 60) {
            minutes += 1;
            secondes = 0;
        }
    }

    minutes = String(minutes);
    secondes = String(secondes);

    if (minutes.length < 2) { minutes = '0' + minutes; }
    if (secondes.length < 2) { secondes = '0' + secondes; }
}