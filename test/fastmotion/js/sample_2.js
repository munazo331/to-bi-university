// JavaScript Document

$(window).on('load scroll', function(){

  var elem = $('.top_textinner');

  elem.each(function () {

    var isPlay = 'isPlay';
    var elemOffset = $(this).offset().top;
    var scrollPos = $(window).scrollTop();
    var wh = $(window).height();

    if(scrollPos > elemOffset - wh + (wh / 4)){
      $(this).addClass(isPlay);
    }
  });
});