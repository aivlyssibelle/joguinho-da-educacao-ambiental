function fase1(){

  
  background("FFFFF");
  
  textAlign(CENTER)
  
  stroke("FFFFF")
  strokeWeight(4)
  fill("#FE9A2E")
  textSize(10)
  text("Fase 1", 0, 10, 750, 20)
  
  stroke("#FE9A2E")
  strokeWeight(4)
  fill("FFFFFF")
  textSize(13)
  
  text("Clique no que não pode fazer na praia?", 0, 30, 400, 40)

  
  if(mouseX >= 150 && mouseX <= 250 && mouseY >= 200 && mouseY <=230){
   fill("#FE9A2E")
  }else {
    fill("FFFFFF")
  }
  rect(150, 200, 100, 30)
  textSize(12)
  fill("FFFFFF")
  text("Jogar lixo no mar",150, 210, 100, 20)
  
  
  if(mouseX >= 150 && mouseX <= 250 && mouseY >= 150 && mouseY <=180){
   fill("#FE9A2E")
  }else {
    fill("FFFFFF")
  }
  rect(150, 150, 100, 30)
  textSize(12)
  fill("FFFFFF")
  text("Nadar",150, 160, 100, 20)
  
  
 if(mouseX >= 150 && mouseX <= 250 && mouseY >= 250 && mouseY <=280){
   fill("#FE9A2E")
  }else {
    fill("FFFFFF")
  }
  rect(150, 250, 100, 30)
  textSize(12)
  fill("FFFFFF")
  text("Brincar",150, 260, 100, 20)
  
  //Botao para voltar ao menur
  if(mouseX >= 330 && mouseX <= 390 && mouseY >= 360 && mouseY <=380){
   fill("#FE9A2E")
  }else {
    fill("FFFFFF")
  }

  rect(330, 360, 60, 20)
  
  textSize(10)
  fill("FFFFFF")
  text("Menu",330, 365, 60, 20)
  
  //image(img9, 140, 300);
  //image(imagens [9], 140, 120, 250, 200);
  
  //image(imagens [9], 140, 290);
   image(imagens [17], 90, 65, 230, 80);
   image(imagens [18], 90, 310, 230, 80);
  
  
function preload() {
  img4 = loadImage('IMG-4.jpg');
  img5 = loadImage('IMG-5.jpg');
}
  
x=45
  
  for (i=0; i<1; i++)
{
if (mudarfigura==false)
{
  
  image(imagens [4], x-25, y,60, 60);
  
}
else
{
  image(imagens [5], x-25, y,60, 60);

}  
x=x+100
}

y = y-1 //passo para a movimentação vertical das figuras
if (y < 0) {
y = height
mudarfigura=!mudarfigura //se é V fica F, se é F fica V
console.log(mudarfigura)
}
  
  
  
}