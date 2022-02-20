function mouseClicked() {

  //JOGAR fase 1
  if (tela ==0){
  if(mouseX >= 30 && mouseX <= 130 && mouseY >= 170 && mouseY <=200) 
    tela = 1
    //console.log("JOGAR")
  }
  
  //INSTRUCOES
  if (tela ==0){
  if(mouseX >= 30 && mouseX <= 130 && mouseY >= 210 && mouseY <=240) 
    tela = 2
    //console.log("INSTRUCOES")
  }
  
  //CREDITOS
  if (tela ==0){
  if(mouseX >= 30 && mouseX <= 130 && mouseY >= 250 && mouseY <=280) 
    tela = 3
    //console.log("CREDITOS")     
  }
  
  //VOLTAR/MENU
  if(( tela ==1 || tela ==2 || tela ==3 || tela ==5 || tela ==6 || tela ==7 || tela ==8 || tela ==9 || tela ==10 || tela ==17) && mouseX >= 330 && mouseX <= 390 && mouseY >=360 && mouseY <=380){
    
    tela = 0
  }
  
  //FASE 111111111111111111111111111111111111111
   
  //RESPOSTA CORRETA FASE 1
  
  if (tela ==1){
  if(mouseX >= 150 && mouseX <= 250 && mouseY >= 200 && mouseY <=230) 
    tela = 5
    console.log("IR PARA FASE 2")     
  }
  
  //RESPOSTA INCORRETA FASE 1
  if (tela ==1){
  if(mouseX >= 150 && mouseX <= 250 && mouseY >= 150 && mouseY <=180) 
    tela = 4 
  }
  //RESPOSTA INCORRETA FASE 1
  if (tela ==1){
  if(mouseX >= 150 && mouseX <= 250 && mouseY >= 250 && mouseY <=280) 
    tela = 4   
  }
  
   //TELA INCORRETA 1 ---- VOLTAR A JOGAR FASE 1
  if (tela ==4){
  if(mouseX >= 100 && mouseX <= 300 && mouseY >= 290 && mouseY <=320) 
    tela = 1   
  }
  
  
  //FASE 22222222222222222222222222222222222
  //RESPOSTA CORRETA FASE 2
  if(tela==5){
  if(mouseX >= 100 && mouseX <= 300 && mouseY >= 90 && mouseY <=120) 
    tela = 6
    console.log("JOGAR FASE 3") 
  }
  //RESPOSTA INCORRETA FASE 2
  if (tela ==5){
  if(mouseX >= 100 && mouseX <= 300 && mouseY >= 140 && mouseY <=170) 
    tela = 11 
  }
  
  //TELA INCORRETA 2 ---- VOLTAR A JOGAR FASE 2
  if (tela ==11){
  if(mouseX >= 100 && mouseX <= 300 && mouseY >= 290 && mouseY <=320) 
    tela = 5   
  }
  
  //FASE 333333333333333333333333333333333333333
  
  //RESPOSTA CORRETA FASE 3
  if (tela ==6){
  if(mouseX >= 100 && mouseX <= 300 && mouseY >= 140 && mouseY <=170) 
    tela = 7 
    console.log("JOGAR FASE 4") 
  }
 //RESPOSTA INCORRETA FASE 3
  if (tela ==6){
  if(mouseX >= 100 && mouseX <= 300 && mouseY >= 240 && mouseY <=270) 
    tela = 12 
  }
  //TELA INCORRETA 3 ---- VOLTAR A JOGAR FASE 3
  if (tela ==12){
  if(mouseX >= 100 && mouseX <= 300 && mouseY >= 290 && mouseY <=320) 
    tela = 6   
  }

  //FASE 444444444444444444444444444444444
  
  //RESPOSTA CORRETA FASE 4
  if (tela ==7){
  if(mouseX >= 100 && mouseX <= 300 && mouseY >= 240 && mouseY <=270) 
    tela = 8
    console.log("JOGAR FASE 5")
  }
    //RESPOSTA INCORRETA FASE 4
  if (tela ==7){
  if(mouseX >= 100 && mouseX <= 300 && mouseY >= 190 && mouseY <=220) 
    tela = 13 
  }
    //TELA INCORRETA 4 ---- VOLTAR A JOGAR FASE 4
  if (tela ==13){
  if(mouseX >= 100 && mouseX <= 300 && mouseY >= 290 && mouseY <=320) 
    tela = 7   
  }
  
  //FASE 555555555555555555555555555555555555
  
  //RESPOSTA CORRETA FASE 5
  if (tela ==8){
  if(mouseX >= 100 && mouseX <= 300 && mouseY >= 120 && mouseY <=150) 
    tela = 9
    console.log("JOGAR FASE 6")
  }
  
   //RESPOSTA INCORRETA FASE 5
   if (tela ==8){
  if(mouseX >= 100 && mouseX <= 300 && mouseY >= 270 && mouseY <=300) 
    tela = 14 
  }
    //TELA INCORRETA 5 ---- VOLTAR A JOGAR FASE 5
  if (tela ==14){
  if(mouseX >= 100 && mouseX <= 300 && mouseY >= 290 && mouseY <=320) 
    tela = 8   
  }
  //FASE 6666666666666666666666666666
  
  //RESPOSTA CORRETA FASE 6
  if (tela ==9){
  if(mouseX >= 100 && mouseX <= 300 && mouseY >= 210 && mouseY <=240) 
    tela = 10
    console.log("JOGAR FASE 7")
  }
  //RESPOSTA INCORRETA FASE 6
   if (tela ==9){
  if(mouseX >= 100 && mouseX <= 300 && mouseY >= 260 && mouseY <=290) 
    tela = 15 
  }
    //TELA INCORRETA 6 ---- VOLTAR A JOGAR FASE 6
  if (tela ==15){
  if(mouseX >= 100 && mouseX <= 300 && mouseY >= 290 && mouseY <=320) 
    tela = 9   
  }
    //FASE 777777777777777777777777777777
  
  //RESPOSTA CORRETA FASE 7
  if (tela ==10){
  if(mouseX >= 100 && mouseX <= 300 && mouseY >= 120 && mouseY <=150) 
    tela = 17
    console.log("TELA FINAL")
  }
  //RESPOSTA INCORRETA FASE 7
   if (tela ==10){
  if(mouseX >= 100 && mouseX <= 300 && mouseY >= 160 && mouseY <=190) 
    tela = 16 
  }
    //TELA INCORRETA 7 ---- VOLTAR A JOGAR FASE 7
  if (tela ==16){
  if(mouseX >= 100 && mouseX <= 300 && mouseY >= 290 && mouseY <=320) 
    tela = 10   
  }  
}  
