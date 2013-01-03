$(function() {

	$("a[rel=footnote]").each(function(){
		var link = $(this);
		var token = link.attr('href').substr(1);
		var footnoteContent = $(document.getElementById(token)).html();

		// There is an issue with the line below that stops the clock-tap-scroll-to-top on iOS
		$('body').append('<div id="overlay-' + token + '" class="footnoteContent">' + footnoteContent + '</div>');

		link.click(function(){
			var $currentFootnote = $(document.getElementById('overlay-' + token));

			// If the footnote is already displayed, hide it instead
			if ($currentFootnote.is(':visible')) {
				$currentFootnote.slideUp('fast');

			} else {
				$('.footnoteContent').hide();
				$currentFootnote.slideDown('fast');
			}

			return false;
		});
	});

	$('.footnoteContent a[rev=footnote]').remove();
	$('.footnoteContent').prepend('<a href="#" class="closeFootnote">&times;</a>');
	$('.closeFootnote').click(function(){
		$(this).closest('.footnoteContent').slideUp('fast');
		// Tried the line below but it didn't work
		// $(this).closest('.footnoteWrapper').slideUp('fast');
		return false;
	});
});
