function fase6(){
  
  background("FFFFFF");
  
  textAlign(CENTER)
  
   stroke("FFFFF")
  strokeWeight(4)
  fill("#FE9A2E")
  textSize(10)
  text("Fase 6", 0, 10, 750, 20)
  
  stroke("#FE9A2E")
  strokeWeight(4)
  fill("FFFFFF")
  textSize(13)
  text("Enquanto escovamos os dentes" + "\n" + "o que devemos fazer?", 0, 30, 400, 40)
  
  
   if(mouseX >= 100 && mouseX <= 300 && mouseY >= 210 && mouseY <=240){
   fill("#FE9A2E")
  }else {
    fill("FFFFFF")
  }
  rect(100, 210, 200, 30)
  textSize(12)
  fill("FFFFFF")
  text("Fechar a torneira",100, 220, 200, 20)
  
   if(mouseX >= 100 && mouseX <= 300 && mouseY >= 260 && mouseY <=290){
   fill("#FE9A2E")
  }else {
    fill("FFFFFF")
  }
  rect(100, 260, 200, 30)
  textSize(12)
  fill("FFFFFF")
  text("Manter a torneira aberta",100, 270, 200, 50)
  
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
 
   //image(img10, 115, 230);
  image(imagens [14], 120, 70, 160, 130);
  
  
  
function preload() {
  img7 = loadImage('IMG-7.jpg');
  img8 = loadImage('IMG-8.jpg');
}
  
x=45
  
  for (i=0; i<1; i++)
{
if (mudarfigura==false)
{
  image(imagens [7], x-25, y,60, 60);
  
}
else
{
  image(imagens [8], x-25, y,60, 60);  
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
  