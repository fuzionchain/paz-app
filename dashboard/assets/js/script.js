// on scroll change color of navbar

$(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if(scroll < 200){
        $('.fixed-top').css('background', '#f3f5fa');
        $('.fixed-top').css('box-shadow', 'rgb(0 0 0 / 0%) 0px 0px 0px 0px');
    } else{
        $('.fixed-top').css('box-shadow', 'rgb(0 0 0 / 13%) 0px 1px 4px 2px');
        $('.fixed-top').css('background', 'white');
        
    }
});