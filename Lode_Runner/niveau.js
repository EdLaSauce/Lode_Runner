
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

function dessinerEchelle(){
    objC2D.save();
    objC2D.fillStyle= '#336600';

    objC2D.beginPath();
    objC2D.fillRect(0,0,5,30);
    objC2D.fillRect(25,0,5,30);
    objC2D.fillRect(0,5,30,3);
    objC2D.fillRect(0,15,30,3);
    objC2D.fillRect(0,25,30,3);

    objC2D.restore();
}

function dessinerLingot(){
    objC2D.save();

    let objDegrade=objC2D.createLinearGradient(5,16,25,30);

    objDegrade.addColorStop(0,'#F7BC35');
    objDegrade.addColorStop(0.5,'#E1DEDD');
    objDegrade.addColorStop(1,'#F7BC35');

    objC2D.fillStyle=objDegrade;
    objC2D.beginPath();
    objC2D.fillRect(5,16,20,14);

    objC2D.restore();
}

function dessinerBeton(){
    objC2D.save();

    objC2D.fillStyle='#9e9c9c';
    objC2D.beginPath();
    objC2D.fillRect(0,0,30,30);

    objC2D.fillStyle='#CBC9CD';
    objC2D.beginPath();
    objC2D.fillRect(5,5,20,20);

    objC2D.restore();

}

function dessinerBarre(){
    objC2D.save();

    objC2D.fillStyle='#a09794';

    objC2D.beginPath();
    objC2D.fillRect(0,5,30,3);

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
                case '*':
                    dessinerLingot();
                    break;
                case 'B':
                    dessinerBeton();
                    break;
                case '-':
                    dessinerBarre();
                    break;
                case '#':
                    dessinerEchelle();
                    break;
                case 'T':
                    dessinerTrou();
                    break;
            }
            objC2D.restore();
        }
    }
    objC2D.restore();
}

function dessinerTrou(){
    objC2D.save();
    objC2D.fillStyle = 'black';
    objC2D.fillRect(0,0,30,30);
    objC2D.restore();
}

function retirerObjet(celluleX,celluleY){
    objNiveau.tableau[celluleY][celluleX] = ' ';
}

function mettreObjet(celluleX,celluleY,char){
    objNiveau.tableau[celluleY][celluleX] = char;
}

function echelleSecrete(){
    if(objNiveau.lingots == 0){
        for(let y = 0;y<cellulesY; y++){
            for(let x = 0;x<cellulesX;x++){
                if(objNiveau.tableau[y][x] == '!'){
                    objNiveau.tableau[y][x] = '#';
                    console.log(x+", "+y);
                }
            }
        }
    }
}

function niveauReussi(){
    objSons.niveauTermine.play();
    objPointage.binEnMarche = false;
    //Ajouter le score au niveau
    objNiveau.scoreNiveau += 1500;
    //Ajouter le score du niveau au cumul de score
    objPointage.scoreCumul += objNiveau.scoreNiveau;
    //Le numero du prochain niveau
    const niveauSuivant = objNiveau.numero +1 ;
    //Garder le nombre de vie de lode runner
    const viesRestantes = objLodeRunner.nbVies;
    
    //Re init le niveau
    initObjNiveau();
    objNiveau.numero = niveauSuivant;

    //Re init les trous
    initTabTrous();

    //Re init le temps 
    //Peut-être non nécessaire

    //Re init lodeRunner
    initObjLodeRunner();
    objLodeRunner.nbVies = viesRestantes;

    //Re init les gardes
    initObjTabGardes();
}