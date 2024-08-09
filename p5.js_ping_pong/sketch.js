//variaveis da bola
let xBola = 300;
let yBola = 200;
let Diametro = 18;
let Raio = Diametro / 2;

//velocidade da bola
let SpeedBolly = -5;
let SpeedBollx = 5;
let RaqueteLagura = 10
let RaqueteAltura = 90

//variaveis da raquete
let xRaquete = 10;
let yRaquete = 150;

let Colidiu = false

//variaveis do oponete
let xRaqueteOP = 580;
let yRaqueteOP = 150;
let SpeedyOP;

//placar do jogo
let MeusPontos = 0;
let PontosOP = 0;

//sons do jogo
let raquetada;
let ponto;
let trilha;

function preload(){
  trilha = loadSound("nome do arquivo com .mp3 do som da trilha sonora ou som de fundo emquanto o jogo roda")
  ponto = loadSound("nome do arquivo com .mp3 do som dos pontos quando ganhar")
  raquetada = loadSound("nome do arquivo com .mp3 do som de bate da raquente")
}

function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  background(0);
  Bola();
  MovimentoBola();
  ColisaoBorda();
  Raquete(xRaquete ,yRaquete);
  MovimentoRaquete();
  //ColisaoRaquete();
  ColisaoRaqueteBliblioteca(xRaquete, yRaquete);
  Raquete(xRaqueteOP ,yRaqueteOP);
  MovimentaRaqueteOP();
  ColisaoRaqueteBliblioteca(xRaqueteOP, yRaqueteOP);
  IncluirPlacar();
  MarcaPontos();
  bolinhaNaoFicaPresa();
  bolinhaNaoFicaPresaOP();
}

function Bola () {
  circle(xBola, yBola, Diametro);
}

function MovimentoBola() {
  xBola += SpeedBollx;
  yBola += SpeedBolly;
}

function ColisaoBorda() {
   if (xBola + Raio> width ||
     xBola - Raio< 0 ){
    SpeedBollx *= -1
  }
  if (yBola + Raio > height ||
     yBola - Raio< 0 ){
    SpeedBolly *= -1
  }
}

function Raquete(x ,y) {
   rect(x, y, RaqueteLagura, RaqueteAltura);
  
}

function MovimentoRaquete (){
  if (keyIsDown(87)){
    yRaquete -= 10;
  }
  
  if (keyIsDown(83)){
    yRaquete += 10;
  }
}

function ColisaoRaquete () {
  if (xBola - Raio < xRaquete + RaqueteLagura && yBola - Raio < yRaquete + RaqueteAltura && yBola + Raio > yRaquete ){
    SpeedBollx *= -1;
    raquetada.play();
  }
}

function ColisaoRaqueteBliblioteca (x ,y) {
  Colidiu = collideRectCircle(x, y, RaqueteLagura, RaqueteAltura, xBola, yBola, Raio);
  if (Colidiu){
    SpeedBollx *= -1;
    raquetada.play();
  }
}

function MovimentaRaqueteOP () {
  if (keyIsDown(UP_ARROW)){
    yRaqueteOP -= 10;
  }
  
  if (keyIsDown(DOWN_ARROW)){
    yRaqueteOP += 10;
  }
}

function IncluirPlacar () {
  stroke(255);
  textAlign(CENTER);
  textSize(16);
  fill(255, 140,0);
  rect(150, 10, 40, 20);
  fill(255);
  text(MeusPontos, 170, 26);
  fill(255, 140,0);
  rect(450, 10, 40, 20);
  fill(255);
  text(PontosOP, 470, 26);
}

function MarcaPontos () {
  if (xBola > 590){
    MeusPontos += 1;
    ponto.play();
  }
  if (xBola < 10){
    PontosOP += 1;
    ponto.play();
  }
}


function bolinhaNaoFicaPresa(){
    if (xBola - Raio < 0){
    xBola = 23
    }
}


function bolinhaNaoFicaPresaOP(){
    if (xBola - Raio > 590){
    xBola = 572
    }
}
