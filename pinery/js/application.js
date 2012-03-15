$(document).ready(function(){

  $('.bFcover').hover(function(){
    $(this).fadeOut('slow');
  });

  $('.routingBlockWrapper').mouseleave(function(){
    $('.bFcover').slideDown('fast');
  });

  $('.athcover').hover(function(){
    $(this).fadeOut('slow');
  });

  $('.routingBlockWrapper').mouseleave(function(){
    $('.athcover').slideDown('fast');
  });
  
  $('.cateringcover').hover(function(){
    $(this).fadeOut('slow');
  });

  $('.routingBlockWrapper').mouseleave(function(){
    $('.cateringcover').slideDown('fast');
  });
});

