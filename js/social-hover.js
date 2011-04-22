(function($) {
	
	$("#social ul li").hover(function() { // Mouse over
		$(this)
			.stop().fadeTo(500, 1)
			.siblings().stop().fadeTo(500, 0.2);
			
		$("a strong", this)
			.stop()
			.delay(200)
			.animate({
				opacity: 1,
				top: "-10px"
			}, 300);
		
	}, function() { // Mouse out
		$(this)
			.stop().fadeTo(500, 1)
			.siblings().stop().fadeTo(500, 1);
			
		$("a strong", this)
			.stop()
			.animate({
				opacity: 0,
				top: "-1px"
			}, 300);
	});
	
})(jQuery);