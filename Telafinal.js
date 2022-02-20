function telafinal(){
  
  background(img24);
  
  
 
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
  
}