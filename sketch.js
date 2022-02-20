var tela = 0;
var imagens = [];

let img1;
let img2;
let img3;
let img4;
let img5;
let img6;
let img7;
let img8;

let img10;


let mudarfigura;
let x, y=40;

function preload() {
  img0 = loadImage('Imagens/IMG-0.jpg');
  img1 = loadImage('Imagens/IMG-1.jpg');
  img2 = loadImage('Imagens/IMG-2.jpg');
  img3 = loadImage('Imagens/IMG-3.jpg');
  img4 = loadImage('Imagens/IMG-4.jpg');
  img5 = loadImage('Imagens/IMG-5.jpg');
  img6 = loadImage('Imagens/IMG-6.jpg');
  img7 = loadImage('Imagens/IMG-7.jpg');
  img8 = loadImage('Imagens/IMG-8.jpg');
  img9 = loadImage('Imagens/IMG-9.jpg');
  img10 = loadImage('Imagens/IMG-10.jpg');
  img11 = loadImage('Imagens/IMG-11.jpg');
  img12 = loadImage('Imagens/IMG-12.jpg');
  img13 = loadImage('Imagens/IMG-13.jpg');
  img14 = loadImage('Imagens/IMG-14.jpg');
  img15 = loadImage('Imagens/IMG-15.jpg');
  img16 = loadImage('Imagens/IMG-16.jpg');
  img17 = loadImage('Imagens/IMG-17.jpg');
  img18 = loadImage('Imagens/IMG-18.jpg');
  img19 = loadImage('Imagens/IMG-19.jpg');
  img20 = loadImage('Imagens/IMG-20.jpg');
  img21 = loadImage('Imagens/IMG-21.jpg');
  img22 = loadImage('Imagens/IMG-22.jpg');
  img23 = loadImage('Imagens/IMG-23.jpg');
  img24 = loadImage('Imagens/IMG-24.jpg');
  img25 = loadImage('Imagens/IMG-25.jpg');
  
  
  for(var i = 0; i<26; i++){
    
    imagens[i] = loadImage ('Imagens/IMG-'+i+ '.jpg')
  }
}



function setup() {
  createCanvas(400, 400);
}

function draw() {
  
  //Menu
  if (tela == 0){
    menu();  
  }
  
  //Jogar fase 1
  if (tela == 1){
    fase1();  
  }
  //Jogar fase 2
  if (tela == 5){
    fase2();  
  }
  
  //Instrucoes
  if (tela == 2){
    instrucoes();   
  }
  
  //Creditos
  if (tela == 3){
    creditos();
  }  
  
  //Jogar fase 3
  if (tela == 6){
    fase3();  
  }
  //Jogar fase 4
  if (tela == 7){
    fase4();  
  }
  //Jogar fase 5
  if (tela == 8){
    fase5();  
  }
  //Jogar fase 6
  if (tela == 9){
    fase6();  
  }
  //Jogar fase 7
  if (tela == 10){
    fase7();  
  }
  
  //Respostas Erradas fase 1
  if (tela == 4){
    incorreta1();
  } 
  //Respostas Erradas fase 2
  if (tela == 11){
    incorreta2();
  } 
  //Respostas Erradas fase 3
  if (tela == 12){
    incorreta3();
  } 
  //Respostas Erradas fase 4
  if (tela == 13){
    incorreta4();
  } 
  //Respostas Erradas fase 5
  if (tela == 14){
    incorreta5();
  } 
  //Respostas Erradas fase 6
  if (tela == 15){
    incorreta6();
  } 
  //Respostas Erradas fase 7
  if (tela == 16){
    incorreta7();
  } 
  
  //TELA FINAL DO JOGO
  if (tela == 17){
    telafinal();
  } 
  
  
    
}