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
 
// show account modal

var modal = document.getElementById("showAccountModal");
var btn = document.getElementById("showAccountBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// copy to clip board

const copyBtn = document.getElementById('copyBtn');
const inputField = document.getElementById('addressInput');
    copyBtn.onclick = function(){
        inputField.select();
        document.execCommand("Copy");
    }