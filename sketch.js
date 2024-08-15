let palavra;
let musica
let imagem

function setup() {
  createCanvas(1000, 800);
  palavra = Gabi();
  musica.loop();
}

function preload(){
  imagem = loadImage("minha foto.jfif");
  musica = loadSound("música.mp3");
}


function draw() {
  Mily();
  Gabi();
  let maximo = width;
  let minimo = 0;

  let aparecer = map(mouseX, 0, width, 1, palavra.length);
  let inicio = palavra.substring(0, aparecer);
  text(inicio, 500, 400)
}

function Mily(){
  background("violet");
  image(imagem,0,0,1000,800)
  fill(" red");
  textSize(64);
  textAlign(CENTER,CENTER);
}

function Gabi(){
  let palavras = ["Chocolate","Smp que tiver medo,confie em mim","Gabi Linda<3","Milyzinha"];
  return random(palavras);
}







