function initPointage(){
    //const date = new Date();
   
    objPointage = new Object();
    //objPointage.temps= date.getTime();
    objPointage.temps = new Date().getTime();
    objPointage.binEnMarche=false;
    objPointage.scoreCumul = 0;
    objPointage.binFinPartie = false;
}

function initObjSons(){
    objSons = new Object();

    let objSon = document.createElement('audio');
    objSon.setAttribute('src','/sons/gameOver.mp3');
    objSon.load();
    objSons.gameOver = objSon;

    objSon = document.createElement('audio');
    objSon.setAttribute('src','/sons/chute.mp3');
    objSon.load();
    objSons.chute = objSon;

    objSon = document.createElement('audio');
    objSon.setAttribute('src','/sons/gardeDansTrou.mp3');
    objSon.load();
    objSons.gardeDansTrou = objSon;

    objSon = document.createElement('audio');
    objSon.setAttribute('src','/sons/gardeMort.mp3');
    objSon.load();
    objSons.gardeMort = objSon;

    objSon = document.createElement('audio');
    objSon.setAttribute('src','/sons/niveauTermine.mp3');
    objSon.load();
    objSons.niveauTermine = objSon;

    objSon = document.createElement('audio');
    objSon.setAttribute('src','/sons/perdVie.mp3');
    objSon.load();
    objSons.perdVie = objSon;

    objSon = document.createElement('audio');
    objSon.setAttribute('src','/sons/ramasserLingot.mp3');
    objSon.load();
    objSons.ramasserLingot = objSon;

    objSon = document.createElement('audio');
    objSon.setAttribute('src','/sons/trouCreuser.mp3');
    objSon.load();
    objSons.creuserTrou = objSon;

    objSon = document.createElement('audio');
    objSon.setAttribute('src','/sons/trouRempli.mp3');
    objSon.load();
    objSons.rempliTrou = objSon;
}

/*
    États:
        0 = marche
        1 = monter/descendre (sortir du trou aussi)
        2 = chuter
        3 = barre franchissement
        4 = mort
        5 = creuse un trou
*/
function initObjLodeRunner(){
    objLodeRunner = new Object();
    objLodeRunner.posX = cellulesX/2 * largeurCellule+50;
    objLodeRunner.posY = 14*hauteurCellule +50;
    objLodeRunner.nbVies = 5;
    objLodeRunner.vitesse = largeurCellule/4;
    //objLodeRunner.strCouleur = 'cornflowerblue';
    objLodeRunner.strCouleur = 'white';
    objLodeRunner.etat = 0;
    objLodeRunner.intDirection = 0;
    objLodeRunner.imageDroiteGauche = 0;
    objLodeRunner.intNbDeplacementH=0;
    objLodeRunner.intNbDeplacementV=0;
}

function initObjTabGardes(){
    tabObjGardes = new Array();

    let nbGardes = objNiveau.numero +2;
    
    /* A fin de tests uniquement */
    //let nbGardes = 1;
    /* */

    let objGarde = null;
    const tabCouleur = ['red','blue','green','OrangeRed','brown','indigo','lime'];
    for(let i=0;i<nbGardes;i++){
        objGarde = new Object();
        objGarde.posX;
        objGarde.posY;
        assignerPosition(objGarde);
        objGarde.binLingot = false;
        objGarde.etat = 0;
        objGarde.strCouleur = tabCouleur[i]; // Couleur différente pour chaque garde ?
        objGarde.vitesse = largeurCellule/20;
        objGarde.intDirection = 1;
        objGarde.intNbDeplacementH=0;
        objGarde.intNbDeplacementV=0;

        tabObjGardes.push(objGarde);
    }
}

function initObjNiveau(){
    objNiveau = new Object();
    
    /*
    Légende
     échelles: '#'
     échelle secrète : '!'
     emplacement possible gardes : '_'
     lingots: '*'
     brique: '='
     barres: '-'
     beton = 'B'
     Lode Runner ='L'
    */
    objNiveau.numero = 1;
    objNiveau.scoreNiveau = 0;
    objNiveau.lingots = 6;
    objNiveau.tableau = [
        //       0   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27
        /* 0 */[' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','!',' ',' ',' ',' ',' ',' ',' ',' ',' '],
        /* 1 */['_','_','_','_','*','_','_',' ','_','_','_','_','_','_','_',' ',' ',' ','!',' ',' ',' ',' ',' ',' ',' ',' ',' '],
        /* 2 */['=','=','=','=','=','=','=','#','=','=','=','=','=','=','=',' ',' ',' ','!',' ',' ',' ',' ',' ',' ',' ',' ',' '],
        /* 3 */[' ',' ',' ',' ',' ',' ',' ','#','-','-','-','-','-','-','-','-','-','-','!','_','_','_','_','*','_',' ','_','_'],
        /* 4 */[' ',' ',' ',' ',' ',' ',' ','#',' ',' ',' ',' ','=','=','#',' ',' ',' ','=','=','=','=','=','=','=','#','=','='],
        /* 5 */[' ',' ',' ',' ',' ',' ',' ','#',' ',' ',' ',' ','=','=','#',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','#',' ',' '],
        /* 6 */['_','_',' ','_','_','_','_','#',' ',' ',' ',' ','=','=','#','_','_','_','_','_',' ','_','*','_','_','#','_','_'],
        /* 7 */['=','=','#','=','=','=','=','=',' ',' ',' ',' ','=','=','=','=','=','=','=','=','#','=','=','=','=','=','=','='],
        /* 8 */[' ',' ','#',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','#',' ',' ',' ',' ',' ',' ',' '],
        /* 9 */['_','_','#','_','_','_','_','_','_',' ','_','_','_','_','_','_','_','_','_','_','#',' ',' ',' ',' ',' ',' ',' '],
        /*10 */['=','=','=','=','=','=','=','=','=','#','=','=','=','=','=','=','=','=','=','=','#',' ',' ',' ',' ',' ',' ',' '],
        /*11 */[' ',' ',' ',' ',' ',' ',' ',' ',' ','#',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','#',' ',' ',' ',' ',' ',' ',' '],
        /*12 */[' ',' ',' ',' ',' ','_','_','*','_','#','-','-','-','-','-','-','-','-','-','-','#','_','_','_','*','_','_',' '],
        /*13 */[' ',' ',' ',' ','#','=','=','=','=','=','=',' ',' ',' ',' ',' ',' ',' ',' ',' ','=','=','=','=','=','=','=','#'],
        /*14 */[' ',' ',' ',' ','#',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','*',' ',' ',' ',' ',' ',' ',' ',' ','#'],
        /*15 */['=','=','=','=','=','=','=','=','=','=','=','=','=','=','=','=','=','=','=','=','=','=','=','=','=','=','=','='],
        /*16 */['B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B','B']
        ];
    objNiveau.tabEmplacements = new Array();
    emplacementsDepart();
    //console.log(objNiveau.tabEmplacements);
}

function initTabTrous(){
    tabTrous = new Array();
    setInterval(()=>{
        tabTrous.forEach(trou => {
            trou[2]++;
        });
    },1000)
    
}

function emplacementsDepart(){
    const tableau = objNiveau.tableau;
    for(let i=0;i<tableau.length;i++){
        for(let j=0;j<tableau[i].length;j++){
            if(tableau[i][j]=="_"){
                objNiveau.tabEmplacements.push([j,i]);
            }
        }
    }
}

function assignerPosition(objGarde){
    let random = Math.floor(Math.random()*objNiveau.tabEmplacements.length);
    let posX = objNiveau.tabEmplacements[random][0]*largeurCellule+50;
    let posY = objNiveau.tabEmplacements[random][1]*hauteurCellule+50;
    let binDejaAssigne = false;
   for(let i = 0; i < tabObjGardes.length;i++){
       if(tabObjGardes[i].posX == posX && tabObjGardes[i].posY == posY){
        binDejaAssigne = true;
       }
   }
   if(binDejaAssigne){
       assignerPosition(objGarde);
   }else{
       objGarde.posX = posX;
       objGarde.posY = posY;
   }
}