
const cellulesX = 28;
const cellulesY = 17;
const offset = 50;
const largeurCellule = 30;
const hauteurCellule = 30;

/*
    ATTENTION! Le niveau doit être dessiné à partir des coordonnées (50,50)
*/


function dessinerFond(){
    objC2D.save();
    objC2D.fillStyle = 'black';
    objC2D.fillRect(0, 0, largeurCellule*cellulesX, hauteurCellule*cellulesY);
    objC2D.restore();
}

function dessinerBrique(){
    objC2D.save();
    objC2D.fillStyle = '#768283';

    objC2D.beginPath();
    objC2D.fillRect(0,0,largeurCellule,hauteurCellule);

    objC2D.fillStyle = '#c61717';
    objC2D.beginPath();
    objC2D.fillRect(0,2,20,10);
    objC2D.fillRect(22,2,8,10);
    objC2D.fillRect(0,18,10,10);
    objC2D.fillRect(12,18,18,10)

    objC2D.restore();
}

function dessinerPlateforme(){
    objC2D.save();
    for(let i = 0;i<5;i++){
        objC2D.save();
        objC2D.translate(30*i,0);
        dessinerBrique();
       objC2D.restore();
    }
    objC2D.restore();
}

function dessinerNiveau(){
    objC2D.save();
    objC2D.translate(50,50);
    dessinerFond();
    for(let i=0;i<cellulesY;i++){
        for(let j=0;j<cellulesX;j++){
            objC2D.save();
            objC2D.translate(30*j,30*i);
            switch(objNiveau.tableau[i][j]){
                case '=':
                    dessinerBrique();
                    break;
                default:
                    //dessinerBrique();
                    break;
            }
            objC2D.restore();
        }
    }
    objC2D.restore();
}