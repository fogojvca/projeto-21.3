var tela;
var bloco1,bloco2,bloco3,bloco4;
var bola, edges;
var music, musicPre;

function preload(){
    musicPre= loadSound("music.mp3");
}

function setup(){
    tela = createCanvas(800,600);

    bloco1 = createSprite(0,580,360,30);
    bloco1.shapeColor = "blue";

    bloco2 = createSprite(295,580,200,30);
    bloco2.shapeColor = "orange";

    bloco3 = createSprite(515,580,200,30);
    bloco3.shapeColor = "red";

    bloco4 = createSprite(740,580,220,30);
    bloco4.shapeColor = "green";



   

    bola = createSprite(random(20,750),100, 40,40);
    bola.shapeColor = rgb(255,255,255);
   
    bola.velocityX= 5;
    bola.velocityY= 5;
}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    bola.bounceOff(edges);
    
    //escreva o código de ricochete de bola para bloco1 
    if(bloco1.isTouching(bola) && bola.bounceOff(bloco1)){
        bola.shapeColor = "blue";
        music.play(musicPre);
        bola.velocityY= bola.velocityY * (-1);
        bola.bounceOff(bloco1);
    }


    if(bloco2.isTouching(bola)){
        bola.shapeColor = "orange";
        bola.velocityX=0;
        bola.velocityY=0;
    }

    if(bloco3.isTouching(bola) && bola.bounceOff(bloco3)){
        bola.shapeColor = "red";
        bola.velocityY= bola.velocityY * (-1);
        bola.bounceOff(bloco3);
    }

    if(bloco4.isTouching(bola) && bola.bounceOff(bloco4)){
        bola.shapeColor = "green";
        bola.velocityY= bola.velocityY * (-1);
        bola.bounceOff(bloco4);
    }

    drawSprites();
}