(function($) {
  
  var i = 1;
  var j = 1;
  
  var aboutSize = 5;
  var workSize = 14;
  
  var startDelay = 100;
  
  $('h2').animate({
      marginTop: "0px",
      opacity: 1
  }, 500);
  
  $('h1').animate({
      marginTop: "0px",
      opacity: 1
  }, 500);
  
  startAnim();
  
  function startAnim(){
    
    $('#facebook').delay(startDelay).animate({ opacity: 1 }, 300);
    $('#twitter').delay(startDelay + 150).animate({ opacity: 1 }, 300);
    $('#github').delay(startDelay + 300).animate({ opacity: 1 }, 300);
    
    $('#tel').delay(startDelay + 450).animate({
      opacity: 1
    }, 300, function() {
      
      $('#email').animate({
          opacity: 1
        }, 300, function() {
      });
    });
    
    $('#aboutme').delay(startDelay + 2800).animate({
      opacity: 1
      }, 300, function() {
      aboutAnim();
    });
  
    $('#recent').delay(startDelay + 1000).animate({
      opacity: 1
      }, 300, function() {
      workAnim();
    });
  }
  
  function aboutAnim(){
    
    $('section ul li:nth-child(' + i + ')').animate({
      marginLeft: "30px",
      opacity: 1
    }, 250, function() {
      if (i != aboutSize) {
        i++;
        aboutAnim();
      }
    });

  }
  
  function workAnim(){
    
    $('nav ul li:nth-child(' + j + ')').animate({
      marginRight: "30px",
      opacity: 1
    }, 250, function() {
      if (j != workSize) {
        j++;
        workAnim();
      }
      else {
        onFinishWorkAnim();
      }

    });
    
  }
  
  function onFinishWorkAnim(){
    
    $('footer').delay(150).animate({
      marginLeft: "-115px",
      opacity: 1
      }, 500, function() {
		  
		  $('#also').animate({
		      marginTop: "0px",
		      opacity: 1
		  }, 500);
		  
		  $('#url').animate({
		      marginTop: "0px",
		      opacity: 1
		  }, 500);
		  
    });
    
  }
	
})(jQuery);
