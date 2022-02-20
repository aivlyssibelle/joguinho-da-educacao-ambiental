function fase3(){
  
  background("FFFFFF");
  
  textAlign(CENTER)
  
  stroke("FFFFF")
  strokeWeight(4)
  fill("#FE9A2E")
  textSize(10)
  text("Fase 3", 0, 10, 750, 20)
  
  stroke("#FE9A2E")
  strokeWeight(4)
  fill("FFFFFF")
  textSize(13)
  
  text("Quando sair de um ambiente o " + "\n" + " se deve fazer?", 0, 30, 400, 40)

  
  if(mouseX >= 100 && mouseX <= 300 && mouseY >= 140 && mouseY <=170){
   fill("#FE9A2E")
  }else {
    fill("FFFFFF")
  }
  rect(100, 140, 200, 30)
  textSize(12)
  fill("FFFFFF")
  text("Apagar as luzes",100, 150, 200, 20)
  
   if(mouseX >= 100 && mouseX <= 300 && mouseY >= 240 && mouseY <=270){
   fill("#FE9A2E")
  }else {
    fill("FFFFFF")
  }
  rect(100, 240, 200, 30)
  textSize(12)
  fill("FFFFFF")
  text("Deixar as luzes acesas",100, 250, 200, 50)
  
  
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
   //image(imagens [11], 140, 290);
  image(imagens [21], 160, 175, 70, 60);
    image(imagens [20], 170, 285, 70, 80);
    image(imagens [19], 170, 68, 60, 70);
  
  
  // image(imagens [19], 90, 200, 130, 80);
 // image(imagens [21], 115, 200, 130, 80);
  //image(imagens [20], 200, 200, 130, 80);
  
  
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