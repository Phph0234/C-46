//Crie aqui as variáveis dos personagens e cenário
var fundo,fundoImg;
var nave,naveImg;
var astronauta,astronautaImg;
var chao;

var vx = 0;
var g = 0.05;
var vy = 0;

function preload(){
  //Carregar imagens e sons
  fundoImg = loadImage("bg.png")
  naveImg = loadImage("normal.png")
  astronautaImg = loadImage("astronauta.png")
}

function setup(){
  //Configurar jogo
  createCanvas(windowWidth,windowHeight);
  frameRate(80);


  //Crie sprites e adicione suas imagens
  nave = createSprite(540,50,30,30)
  nave.addImage(naveImg)
  nave.scale = 0.1
  nave.setCollider("rectangle",0,0,100,500)

  astronauta = createSprite(width-400,180,20,20)
  astronauta.addImage(astronautaImg)
  astronauta.scale = 0.1
  
  chao = createSprite(543,544,110,20)
  chao.shapeColor = "blue"
}

function draw() {
  background("white");
  image(fundoImg,0,0);
  
  push();
  fill("white")
  text(mouseX+" , "+mouseY, mouseX, mouseY)
  text("Velocidade vertical: "+Math.round(vy), 800, 75)
  pop();
  
  //descida
  vy = vy+g;
  nave.position.y = nave.position.y+vy;
  if(nave.collide(chao)){
    vy = 0
  }
  
  nave.collide(chao)

  drawSprites();
    
}


function impulso(){
 vy = -1 
}

function keyPressed(){
  if(keyCode == UP_ARROW){
    impulso();

  }
  if(keyCode == LEFT_ARROW){
    nave.x = nave.x-3

  }
  if(keyCode == RIGHT_ARROW){
    nave.x = nave.x+5

  }

}