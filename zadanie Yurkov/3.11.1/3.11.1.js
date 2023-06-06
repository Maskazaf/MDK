function circlesquare(diameter) { 
      let radius = diameter/2; 
      let square = Math.PI * Math.pow(radius,2); 
      return square; 
   } 
  
   let diameter1 = 10; 
   let diameter2 = 20; 
   let diameter3 = 35; 
  
   let square1 = circlesquare(diameter1); 
   let square2 = circlesquare(diameter2); 
   let square3 = circlesquare(diameter3); 
  
   document.write("Площадь круга " + diameter1 + " м" + " является:" + square1); 
   document.write("<br>"); 
   document.write("Площадь круга " + diameter2 + " м" + " является:" + square2); 
   document.write("<br>"); 
   document.write("Площадь круга " + diameter3 + " м" + " является:" + square3); 