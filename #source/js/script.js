
/* animate js */
$(document).ready(function() {
  $(window).on('resize', function(){
      Anim();
  })


function Anim(){
    if($(window).width() >= 1300){
        console.log('dsadsadasdasdsadsa')
        $('.arrow').delay(900).animate({'bottom':'3rem'},800);
        setTimeout(function() {
            $('.arrow').addClass('arrow_move');
        }, 1600);  
    }
    else if($(window).width() >= 768 && $(window).width() < 1300){
        console.log('dsadsadasdasdsadsa')
        $('.arrow').delay(1200).animate({'bottom':'1rem'},800);
        setTimeout(function() {
            $('.arrow').addClass('arrow_move');
        }, 2000);
    }
    else if ($(window).width() <= 470){
        console.log('dsadsadasdasdsadsa')
    }
}
