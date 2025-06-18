alert("Clique no cenário")
alert("P1: W para subir e S para descer                                                                      P2: setinha para cima para subir e setinha para baixo para descer")
//cenário
let alturaCenario = 400;
let larguraCenario = 800;
let corCenario = 0;

//placar
let pontosP1 = 0;
let pontosP2 = 0;

//bolinha
let posBolinhaX = larguraCenario/2;
let posBolinhaY = alturaCenario/2;
let diametroBolinha = 20;
let raio = diametroBolinha/2;
let velocidadeBolinhaX = 5;
let velocidadeBolinhaY = 5;
let colisao = false;

//raquete
let alturaRaquete = 100;
let larguraRaquete = 15;

//P1
let posRaqueteX_P1 = 10;
let posRaqueteY_P1 = 150;
let velRaqueteP1 = 5;

//P2
let posRaqueteX_P2 = 775;
let posRaqueteY_P2 = 150;
let velRaqueteP2 = 5;

function setup(){
  createCanvas(larguraCenario, alturaCenario);
}

function draw(){
background(corCenario);
incluirPlacar();

//bordas
fill(255);
rect(0, 0, larguraCenario, 10);
fill(255);
rect(0, 390, larguraCenario, 10);

//raquetes
fill(255, 0, 0);
rect(posRaqueteX_P1, posRaqueteY_P1, larguraRaquete, alturaRaquete);
fill(0, 0, 255);
rect(posRaqueteX_P2, posRaqueteY_P2, larguraRaquete, alturaRaquete);

//bolinha
fill(236, 0, 255);
circle(posBolinhaX, posBolinhaY, diametroBolinha);
posBolinhaX += velocidadeBolinhaX;
posBolinhaY -= velocidadeBolinhaY;
  
//quicadas
if(posBolinhaX + raio >= larguraCenario){
   posBolinhaX = larguraCenario/2; posBolinhaY = alturaCenario/2 ;pontosP1++;
   velocidadeBolinhaX = 5
}
  if(posBolinhaX - raio <= 0){
   posBolinhaX = larguraCenario/2; posBolinhaY = alturaCenario/2; pontosP2++;
  velocidadeBolinhaX = 5
}
  if(posBolinhaY + raio > alturaCenario - 12){
   velocidadeBolinhaY *= -1;
}
  if(posBolinhaY - raio < 12){
   velocidadeBolinhaY *= -1;


}
//movimentação raquete
  if(keyIsDown(87) && posRaqueteY_P1 >= 12){
   posRaqueteY_P1 -= velRaqueteP1;
}
  if(keyIsDown(83)&& posRaqueteY_P1 <= (388 - alturaRaquete)){
   posRaqueteY_P1 += velRaqueteP1;
}
  if(keyIsDown(UP_ARROW) && posRaqueteY_P2 >= 12){
   posRaqueteY_P2 -= velRaqueteP2;
}
  if(keyIsDown(DOWN_ARROW)&& posRaqueteY_P2 <= (388 - alturaRaquete)){
   posRaqueteY_P2 += velRaqueteP2;
} 
//placar
  function incluirPlacar(){
  stroke(255);
  textSize(20);
  fill(color (255, 140, 0));
  fill(255);
  text(pontosP1, 170, 26);
  fill(255);
  text(pontosP2,620, 26);
}
  //quicada raquete
if(posBolinhaX <= posRaqueteX_P1 + larguraRaquete + raio){
  if(posBolinhaY > posRaqueteY_P1 && posBolinhaY < posRaqueteY_P1 + alturaRaquete){
     velocidadeBolinhaX *= -1.05
}
}
if(posBolinhaX >= posRaqueteX_P2 - raio){
   if(posBolinhaY > posRaqueteY_P2 && posBolinhaY < posRaqueteY_P2 + alturaRaquete){
    velocidadeBolinhaX *= -1.05
}
}
}  