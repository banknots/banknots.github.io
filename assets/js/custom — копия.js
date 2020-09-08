jQuery.extend(jQuery.fn, {
	toplinkwidth: function(){
		var h = jQuery(window).width()/2-totalContentWidth/2-totalTopLinkWidth;
		if(h<0){
			// если кнопка не умещается, скрываем её
			topLinkData.hide();
			h = jQuery(window).width()/2-totalContentWidth/2;
			jQuery(this).css({'padding-right': h+'px'});
		} else {
			topLinkData.show();
			jQuery(this).css({'padding-right': h+'px'});
		}
	}
});
 
jQuery(function($){
	var topLink = $('#top-link');
	topLinkData = $('#top-link-data');
	totalContentWidth = jQuery('div#top').outerWidth(); //1040px(ширина блока с контентом, включая padding)
	totalTopLinkWidth = topLinkData.outerWidth(true); //50px + 150px(ширина самой кнопки наверх, включая padding и margin)
	topLink.css({'padding-bottom': $(window).height()});
	// если вам не нужно, чтобы кнопка подстраивалась под ширину экрана - удалите следующие четыре строчки в коде
	topLink.toplinkwidth();
	$(window).resize(function(){
		topLink.toplinkwidth();
	});
	$(window).scroll(function() {
		if($(window).scrollTop() >= 1) {
			topLink.fadeIn(0);
		} else {
			topLink.fadeOut(200);
		}
	});
 
	topLink.click(function(e) {
		$("body,html").animate({scrollTop: 0}, 500);
		return false;
	});
});