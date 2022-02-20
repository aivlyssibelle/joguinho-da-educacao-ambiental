function menu(){
  
  background(img22);
  
  
  if(mouseX >= 30 && mouseX <= 130 && mouseY >= 160 && mouseY <=190){
   fill("#FE9A2E")
  }else {
    fill("FFFFFF")
  }
  rect(30, 160, 100, 30)
  
  
  if(mouseX >= 30 && mouseX <= 130 && mouseY >= 200 && mouseY <=230){
   fill("#FE9A2E")
  }else {
    fill("FFFFFF")
  }
  rect(30, 200, 100, 30)
  
  if(mouseX >= 30 && mouseX <= 130 && mouseY >= 240 && mouseY <=270){
   fill("#FE9A2E")
  }else {
    fill("FFFFFF")
  }
  rect(30, 240, 100, 30)
  
  textAlign(CENTER)
  
  stroke("#FE9A2E")
  strokeWeight(4)
  fill("FFFFFF")
  textSize(15)
  //text("JOGUINHO DA EDUCAÇÃO AMBIENTAL", 0, 30, 400, 40)
  
  textSize(10)
  text("JOGAR", 30, 170, 100, 30)
  text("INSTRUÇÕES", 30, 210, 100, 30)
  text("CRÉDITOS", 30, 250, 100, 30)
  
  
  //image(imagens [1], 140, 120, 250, 200);
  
  
  
  
}