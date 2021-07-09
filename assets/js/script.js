// on scroll change color of navbar
$(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if(scroll < 200){
        $('.fixed-top').css('background', '##1c164e');
        $('.fixed-top').css('box-shadow', 'rgb(0 0 0 / 0%) 0px 0px 0px 0px');
    } else{
        $('.fixed-top').css('box-shadow', 'rgb(0 0 0 / 13%) 0px 1px 4px 2px');
        $('.fixed-top').css('background', '#1c164ea6');
        
    }
});

 // Disclaimer modal
 var modal = document.getElementById("myModal");
 var btn = document.getElementById("connectBtn");
 var span = document.getElementsByClassName("close")[0];
 btn.onclick = function() {
   modal.style.display = "block";
 }
 window.onclick = function(event) {
   if (event.target == modal) {
     modal.style.display = "none";
   }
 }