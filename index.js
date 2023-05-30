$(document).ready(function(){

  $("#myinput").on("keyup", function(){
    var value = $(this).val().toLowerCase();
    console.log(value);

    var cards = document.querySelectorAll('.card');
    console.log(cards);
    Array.from(cards).forEach(function(card){
      console.log(card.firstElementChild.nextElementSibling.textContent.toLowerCase());
      var name = card.firstElementChild.nextElementSibling.textContent.toLowerCase();
      var myCard = card.lastElementChild.textContent.toLowerCase();
      //console.log(myCard);
      if(myCard.indexOf(value) != -1 || name.indexOf(value) != -1){
        card.parentElement.style.display = "block";
      }else{
        card.parentElement.style.display = "none";
      }
    })
  })
  
});