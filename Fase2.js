function fase2(){
  
  background("img1");
  
  textAlign(CENTER)
  
  stroke("FFFFF")
  strokeWeight(4)
  fill("#FE9A2E")
  textSize(10)
  text("Fase 2", 0, 10, 750, 20)
  
  stroke("#FE9A2E")
  strokeWeight(4)
  fill("FFFFFF")
  textSize(13)
  
  text("Quando as pessoas prejudicam o " + "\n" + " meio ambiente o que acontece?", 0, 30, 400, 40)

  
   if(mouseX >= 100 && mouseX <= 300 && mouseY >= 90 && mouseY <=120){
   fill("#FE9A2E")
  }else {
    fill("FFFFFF")
  }
  rect(100, 90, 200, 30)
  textSize(12)
  fill("FFFFFF")
  text("Problemas ambientais",100, 100, 200, 50)
  
  if(mouseX >= 100 && mouseX <= 300 && mouseY >= 140 && mouseY <=170){
   fill("#FE9A2E")
  }else {
    fill("FFFFFF")
  }
  rect(100, 140, 200, 30)
  textSize(12)
  fill("FFFFFF")
  text("O mundo fica feliz",100, 150, 200, 20)
  
  
 
  
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
  
  
   image(imagens [10], 115, 200);
  
 // image(img10, 115, 200);
  
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