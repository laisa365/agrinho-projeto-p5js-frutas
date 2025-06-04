
function draw() {
  background(220);
}let frutas = [];
let numFrutas = 5;
let pontuacao = 0;

function setup() {
  createCanvas(600, 400);
  // Criar frutas escondidas
  for (let i = 0; i < numFrutas; i++) {
    frutas.push(new Fruta());
  }
}

function draw() {
  background(220, 255, 200); // Cor de fundo suave
  fill(0);
  textSize(20);
 
  text("Achar as frutas escondidas! Pontuação: " + pontuacao,200, 30);
  
  // Mostrar frutas
  for (let fruta of frutas) {
    fruta.show();
  }
}

function mousePressed() {
  // Verificar se clicou em alguma fruta
  for (let i = frutas.length - 1; i >= 0; i--) {
    if (frutas[i].isClicked(mouseX, mouseY)) {
      // Remover a fruta clicada
      frutas.splice(i, 1);
      pontuacao++;
    }
  }
}

// Classe Fruta
class Fruta {
  constructor() {
    this.x = random(50, width - 50);
    this.y = random(50, height - 50);
    this.size = 30;
    this.tipo = random(['🍎', '🍌', '🍇', '🍓', '🍍']); // Frutas com emojis
  }
  
  show() {
    textSize(30);
    textAlign(CENTER, CENTER);
    fill(255);
    text(this.tipo, this.x, this.y);
  }
  
  isClicked(px, py) {
    // Verifica se o clique foi dentro da área da fruta
    return dist(px, py, this.x, this.y) < this.size;
  }
}