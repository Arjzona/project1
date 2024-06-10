var text = "Подберите для себя матрас индивидуально по выгодной цене и дизайну на нашем онлайн-конструкторе прямо сейчас!"; // Ваш текст
 var delay = 100; // Скорость печатания
 var elem = document.getElementById("result"); // id элемента для вывода результата

 var print_text = function(text, elem, delay) {
  
  if(text.length > 0) {
  
   elem.innerHTML += text[0];
   
   setTimeout(
   
    function() {
    
     print_text(text.slice(1), elem, delay);  
     
    }, delay
    
   );
   
  }
  
 }

 print_text(text, elem, delay);