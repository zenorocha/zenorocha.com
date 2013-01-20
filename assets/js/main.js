$(function(){

  // --- Active Nav --- //

  var url = window.location.pathname,
      urlRegExp = new RegExp(url == '/' ? window.location.origin + '/?$' : url.replace(/\/$/,''));

  $('#pagenav a').each(function(){
      if(urlRegExp.test(this.href.replace(/\/$/,''))){
          $(this).addClass('active');
      }
  });

  // --- Markdown Footnotes --- //

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
    return false;
  });

  // --- Responsive Menu --- //

  var header = $("#masthead"),
      menu = $("ul#pagenav"),
      menuButton = $("<div class='menubutton'><a href='#'><span></span><span></span><span></span></a></div>");

  menuButton.click(showMenu);
  header.append(menuButton);

  function showMenu (event) {
    if (menu.is(":visible"))
        menu.slideUp({complete:function(){$(this).css('display','')}});
    else
        menu.slideDown();
  }

  // Prevents # being appended to URL. Also Prevents jumping to the top of the page because of the # anchor.
  $(".menubutton").click(function(event) {
    event.preventDefault();
  });

});