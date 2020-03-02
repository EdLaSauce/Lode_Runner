
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
            }
            objC2D.restore();
        }
    }
    objC2D.restore();
}

function retirerObjet(posX,posY){
    objNiveau.tableau[posY][posX] = ' ';
}

function remettreObjet(posX,posY,char){
    objNiveau.tableau[posY][posX] = char;
}