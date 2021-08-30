//メインスライダー
$(document).ready(function(){
        // scroll to div
        $('a[href^="#"]').click(function() {
	        var target = $(this.hash);
	        target = target.length ? target : $('[name=' + this.hash.substr(1) +']');
	        if (target.length) {
	            $('html,body').animate({
	              scrollTop: target.offset().top - 110
	            }, 1000);
	            return false;
	        }
	    });
		// animate scroll
		function animate($ani, $valPos) {
			$(".ani-" + $ani).each(function() {
				var imgPos = $(this).offset().top;
				var scroll = $(window).scrollTop();
				var windowHeight = $(window).height();
				if (scroll > imgPos - windowHeight + windowHeight / $valPos) {
					$(this).addClass("animated " + $ani);
				} else {
					$(this).removeClass("animated " + $ani);
				}
			});
			$(".ani2-" + $ani).each(function() {
				var imgPos = $(this).offset().top;
				var scroll = $(window).scrollTop();
				var windowHeight = $(window).height();
				if (scroll > imgPos - windowHeight + windowHeight / $valPos) {
					$(this).addClass("animated2 " + $ani);
				} else {
					$(this).removeClass("animated2 " + $ani);
				}
			});
		}
		jQuery(window).on('touchstart scroll', function(){
			var timer = false;
			if (timer !== false) {
				clearTimeout(timer);
			}
			timer = setTimeout(function() {
				animate('fadeIn','7');
			}, 150);
		});
    });
	
		// スムーススクロール.
$(function(){
  $('a[href^="#"]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });

})(jQuery);