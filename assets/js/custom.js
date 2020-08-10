 (function($)
{
  backToTop = {
    attach:function()
    {
/**
     * Кнопка "Вверх".
     */
    if ($(window).width() >= 1210) {
      $('body').prepend("<a name='top' />");
      $('body').append("<div id='go-top'><div id='go-top-text'>Наверх</div></div>")
      $(window).scroll(function(){
        if ($(document).scrollTop() > 1200) {
          $('#go-top').fadeIn();
        } else {
          $('#go-top').fadeOut();
        }
      });
      $('#go-top').click(function(){
$('html, body').stop().animate({scrollTop : 000}, 300);
         return false;  
      });
    }
    $(window).resize(function() {
      if ($(window).width() < 1210) {
        $('#go-top').css({
          'display':'none'
        });
      }
    });
	}
};
});
 
 