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

window.onload = function(){
  $('#disclaimerModal').modal('show');
}

var modal = document.getElementById("disclaimerModal");
btn.onclick = function(){
  modal.style.display = "none";
}
 