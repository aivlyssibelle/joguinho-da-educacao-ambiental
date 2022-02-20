function fase4(){
  
  background("FFFFFF");
  
  textAlign(CENTER)
  
 stroke("FFFFF")
  strokeWeight(4)
  fill("#FE9A2E")
  textSize(10)
  text("Fase 4", 0, 10, 750, 20)
  
  stroke("#FE9A2E")
  strokeWeight(4)
  fill("FFFFFF")
  textSize(13)
  text("O vaso sanitário é " + "\n" + "para ser usado como?", 0, 30, 400, 40)
  
  
  if(mouseX >= 100 && mouseX <= 300 && mouseY >= 190 && mouseY <=220){
   fill("#FE9A2E")
  }else {
    fill("FFFFFF")
  }
  rect(100, 190, 200, 30)
  textSize(12)
  fill("FFFFFF")
  text("Apertar várias vezes a descarga",100, 200, 200, 20)
  
   if(mouseX >= 100 && mouseX <= 300 && mouseY >= 240 && mouseY <=270){
   fill("#FE9A2E")
  }else {
    fill("FFFFFF")
  }
  rect(100, 240, 200, 30)
  textSize(12)
  fill("FFFFFF")
  text("Sem brincar com a descarga",100, 250, 200, 50)
  
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
  image(imagens [12], 170, 65, 80, 110);
  
  
  
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