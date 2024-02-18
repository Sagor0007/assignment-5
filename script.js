document.addEventListener("DOMContentLoaded", function() {
    var buttons = document.querySelectorAll("colorButton");
  
    buttons.forEach(function(button) {
      button.addEventListener("click", function() {
     
        buttons.forEach(function(btn) {
          btn.style.backgroundColor = "white";
        });
  
      
        button.style.backgroundColor = "green";
      });
    });
  });
  