function initPointage(){
    const date = new Date();
   
    objPointage = new Object();
    objPointage.temps= date.getTime();
    objPointage.binEnMarche=false;
    objPointage.scoreCumul = 0;
}

function initMurs(){
    tabObjMurs = new Array();
    let objMur = null;

    
}
/*
    États:
        0 = marche
        1 = monter/descendre
        2 = chuter
        3 = grimper
        4 = mort
*/
function initObjLodeRunner(){
    objLodeRunner = new Object();
    objLodeRunner.nbLingots = 0;
    objLodeRunner.posX = cellulesX/2 * largeurCellule;
    objLodeRunner.posY = 14*hauteurCellule +50;
    objLodeRunner.nbVies = 5;
    objLodeRunner.vitesse = largeurCellule/3;
    objLodeRunner.strCouleur = 'cornflowerblue';
    objLodeRunner.etat = 0;
}

function initObjTabGardes(){
    tabObjGardes = new Array();

    let nbGardes = objNiveau.numero +2;
    let objGarde = null;
    // let tabCouleur = [];
    for(let i=0;i<nbGardes;i++){
        objGarde = new Object();
        //objGarde.posX ;
        //objGarde.posY ;
        /*
            dans une fonction a part, parcourir le tableau de symboles et garder tous les 
            emplacement OK pour débuter (au dessus d'une passerelle, où aucun objet n'est placé.
            situé avec les '_') => insérer dans objNiveau.tabEmplacements

            utiliser un random pour chercher l'index d'une position OK dans objNiveau.tabEmplacement. 
            assigner cette position X et Y au garde si pour chaque garde dans tabObjGardes, 
            la position n'est pas déjà prise.
        */
        objGarde.binLingot = false;
        objGarde.etat = 0;
        objGarde.strCouleur = 'red';
        objGarde.vitesse = largeurCellule/6;

        tabObjGardes.push(objGarde);
    }
}

function initObjNiveau(){
    objNiveau = new Object();
    
    /*
    Légende
     échelles: '#'
     échelle secrète : '!'
     lingots: '*'
     brique: '='
     barres: '-'
     beton = 'B'
     Lode Runner ='L'
    */
    objNiveau.numero = 1;
    objNiveau.scoreNiveau = 0;
    objNiveau.tableau = [
        //       0   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27
        /* 0 */[' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','!',' ',' ',' ',' ',' ',' ',' ',' ',' '],
        /* 1 */[' ',' ',' ',' ','*',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','!',' ',' ',' ',' ',' ',' ',' ',' ',' '],
        /* 2 */['=','=','=','=','=','=','=','#','=','=','=','=','=','=','=',' ',' ',' ','!',' ',' ',' ',' ',' ',' ',' ',' ',' '],
        /* 3 */[' ',' ',' ',' ',' ',' ',' ','#','-','-','-','-','-','-','-','-','-','-','!',' ',' ',' ',' ','*',' ',' ',' ',' '],
        /* 4 */[' ',' ',' ',' ',' ',' ',' ','#',' ',' ',' ',' ','=','=','#',' ',' ',' ','=','=','=','=','=','=','=','#','=','='],
        /* 5 */[' ',' ',' ',' ',' ',' ',' ','#',' ',' ',' ',' ','=','=','#',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','#',' ',' '],
        /* 6 */[' ',' ',' ',' ',' ',' ',' ','#',' ',' ',' ',' ','=','=','#',' ',' ',' ',' ',' ',' ',' ','*',' ',' ','#',' ',' '],
        /* 7 */['=','=','#','=','=','=','=','=',' ',' ',' ',' ','=','=','=','=','=','=','=','=','#','=','=','=','=','=','=','='],
        /* 8 */[' ',' ','#',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','#',' ',' ',' ',' ',' ',' ',' '],
        /* 9 */[' ',' ','#',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','#',' ',' ',' ',' ',' ',' ',' '],
        /*10 */['=','=','=','=','=','=','=','=','=','#','=','=','=','=','=','=','=','=','=','=','#',' ',' ',' ',' ',' ',' ',' '],
        /*11 */[' ',' ',' ',' ',' ',' ',' ',' ',' ','#',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','#',' ',' ',' ',' ',' ',' ',' '],
        /*12 */[' ',' ',' ',' ',' ',' ',' ','*',' ','#','-','-','-','-','-','-','-','-','-','-','#',' ',' ',' ','*',' ',' ',' '],
        /*13 */[' ',' ',' ',' ','#','=','=','=','=','=','=',' ',' ',' ',' ',' ',' ',' ',' ',' ','=','=','=','=','=','=','=','#'],
        /*14 */[' ',' ',' ',' ','#',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','*',' ',' ',' ',' ',' ',' ',' ',' ','#'],
        /*15 */['=','=','=','=','=','=','=','=','=','=','=','=','=','=','=','=','=','=','=','=','=','=','=','=','=','=','=','='],
        /*16 */['B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B']
        ];
}