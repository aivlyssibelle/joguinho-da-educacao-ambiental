function incorreta6(){
   
  background("#FE9A2E");
   
  textAlign(CENTER)
  stroke("#04B431")
  strokeWeight(4)
  fill("FFFFFF")
  textSize(15)
  text("Que pena!", 0, 50, 400, 40)

  
  if(mouseX >= 100 && mouseX <= 300 && mouseY >= 290 && mouseY <=320){
   fill("#04B431")
  }else {
    fill("FFFFFF")
  }
  
  rect(100, 290, 200, 30)
  
  textSize(15)
  fill("FFFFFF")
  text("Voltar para a fase",100, 300, 200, 30)
  
  //TROCAR IMAGEMMMMM!!!!!!!!!!!
  image(img6, 100, 100);
  stroke("#04B431")
  textSize(15)
  text("Você escolheu a alternativa incorreta.", 10, 250, 400, 40)
   
}  