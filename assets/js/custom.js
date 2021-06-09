if ($(window).width() >= 1210) {
      $('body').prepend("<a name='top' />");
      $('body').append("<div id='go-top'><div id='go-top-text'>Наверх</div></div>")
      $(window).scroll(function(){
        if ($(document).scrollTop() > 200) {
          $('#go-top').fadeIn();
        } else {
          $('#go-top').fadeOut();
        }
      });
      $('#go-top').click(function(){
        $("html, body").animate({
          scrollTop: 0
        }, 600);
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