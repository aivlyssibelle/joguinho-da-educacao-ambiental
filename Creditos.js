function creditos(){
  
 background("FFFFFF");
  
  textAlign(CENTER)
  stroke("FFFFF")
  strokeWeight(4)
  fill("#FE9A2E")
  textSize(15)
  text("CRÉDITOS", 0, 30, 400, 40)
  
  textAlign(CENTER)
  stroke("FFFFF")
  strokeWeight(4)
  fill("#FE9A2E")
   textSize(15)
  text("Aivlys" + "\n" + " Programadora", 10, 250, 400, 40)
  
  
  
  
  

  
  //Botao para voltar ao menur
 
  
  stroke("#FE9A2E")
  strokeWeight(4)
  fill("FFFFFF")
  
  if(mouseX >= 330 && mouseX <= 390 && mouseY >= 360 && mouseY <=380){
   fill("#FE9A2E")
  }else {
    fill("FFFFFF")
  }
  rect(330, 360, 60, 20)
  
  stroke("#FE9A2E")
  strokeWeight(4)
  fill("FFFFFF")
  textSize(10)
  text("Voltar",330, 365, 60, 20)
  
   


  //Discricao do programador
  
  image(imagens [25], 150, 120, 100, 100);
 
  
  
}