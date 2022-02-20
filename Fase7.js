function fase7(){
  
  background("FFFFF");
  
  textAlign(CENTER)
  
   stroke("FFFFF")
  strokeWeight(4)
  fill("#FE9A2E")
  textSize(10)
  text("Fase 7", 0, 10, 750, 20)
  
  stroke("#FE9A2E")
  strokeWeight(4)
  fill("FFFFFF")
  textSize(13)
  text("Quando fazemos piquenique no parque,"+ "\n" +  "o lixo que produzimos devemos" + "\n" + "fazer o que com ele?", 0, 30, 400, 60)
  
  
   if(mouseX >= 100 && mouseX <= 300 && mouseY >= 120 && mouseY <=150){
   fill("#FE9A2E")
  }else {
    fill("FFFFFF")
  }
  rect(100, 120, 200, 30)
  textSize(12)
  fill("FFFFFF")
  text("Recolher o lixo, e colocar na lixeira",100, 130, 200, 20)
  
   if(mouseX >= 100 && mouseX <= 300 && mouseY >= 160 && mouseY <=190){
   fill("#FE9A2E")
  }else {
    fill("FFFFFF")
  }
  rect(100, 160, 200, 30)
  textSize(12)
  fill("FFFFFF")
  text("Não recolher o lixo",100, 170, 200, 50)
  
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
   image(imagens [15], 100, 195, 200, 170);
  
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