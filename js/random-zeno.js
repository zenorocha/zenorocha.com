(function($) {
	var img = ['zeno-java.png', 'zeno-html5.png', 'zeno-jquery.png', 'zeno-wp.png'];
	$('footer').css({'background': 'url(img/zeno/' + img[Math.floor(Math.random() * img.length)] + ')'});
})(jQuery);