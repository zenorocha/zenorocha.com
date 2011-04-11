<!doctype html>
<html lang="pt-br">
  
  <head>
    
    <meta name="google-site-verification" content="DwDsBtBq3ZDrIXddUG5ZUyXUd6c8-NqDWSmlezXB4GA" />

    <title>zeno rocha - v2.4.3</title>
        
    <meta charset="utf-8" />
    <meta name="author" content="Zeno Rocha" />
    <meta name="description" content="Web Developer" />
    <meta name="keywords" content="zeno, zeno rocha, zeno rocha bueno netto, unirio, freelance, freelancer, informatica, webdesign, programacao, caos design, caos! design, curitiba, rio de janeiro, sistemas de informacao, cenpes, petrobras, centro de pesquisas e desenvolvimento da petrobras," />
        
    <!--[if IE]>
      <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>        
    <![endif]-->
    
    <script type="text/javascript"> // <![CDATA[
  	if ((navigator.userAgent.indexOf('iPhone') != -1) || (navigator.userAgent.indexOf('iPod') != -1) || (navigator.userAgent.indexOf('iPad') != -1)) {
  		document.location = "http://m.zenorocha.com";
  	} // ]]>
  	</script>

    <link rel="stylesheet" href="css/html5reset-1.6.1.css?v=2">
    <link rel="stylesheet" href="css/style.css?v=2">
    
    <script src="js/libs/modernizr-1.6.min.js"></script>
    <script src="js/font/cufon.js"></script>
    <script src="js/font/chunk-five.font.js"></script>
        
    <script>
      Cufon.replace('body',{hover: true});
    </script>
    
    <script src="js/libs/jquery-1.4.2.min.js"></script>
    
    <script src="js/social-hover.js"></script>
    
    <!--[if !IE]><!-->
        <script src="js/anim.js"></script>
    <!--<![endif]-->

  </head>
  
  <body>

    <div id="page">
        
      <header>
        <img src="images/zenorocha.png" alt="zeno rocha" id="zenorocha" class="alpha-ie" />
        <img src="images/webdeveloper.png" alt="web developer" id="webdeveloper" class="alpha-ie" />
      </header>

      <aside id="social">
        <ul>
          <li class="alpha-ie" id="facebook"><a target="_blank" href="http://www.facebook.com/zenorocha"><strong>Facebook</strong></a></li>
          <li class="alpha-ie" id="twitter"><a target="_blank" href="http://twitter.com/zenorocha"><strong>Twitter</strong></a></li>
          <li class="alpha-ie" id="linkedin"><a target="_blank" href="http://www.linkedin.com/in/zenorocha"><strong>LinkedIn</strong></a></li>
        </ul>
      </aside>
            
      <address>
        <p class="alpha-ie" id="tel">+55 21 8108.9727</p>
        <p class="alpha-ie" id="email">contato@zenorocha.com</p>
      </address>
            
      <nav>
        <h1 class="alpha-ie" id="recent">recent works</h1>
        
        <ul>
          <?php
      
            include 'data/jsonProjects.php';
            
            $projetos = json_decode($jsonProjects);
            
            for ($i = 0; $i <= (sizeof($projetos -> item) - 1); $i++) {
              echo '<li class="alpha-ie"><a target="_blank" href="' . $projetos -> item[$i] -> url . '">' . $projetos -> item[$i] -> name . ' &lt;</a></li>';
            }
            
          ?>
        </ul>
      </nav>
            
      <section>
        <h1 class="alpha-ie" id="aboutme">about me</h1>
        
        <ul>
          <li class="alpha-ie">&gt; 20 year-old brazilian</li>
          <li class="alpha-ie">&gt; born in curitiba</li>
          <li class="alpha-ie">&gt; based in rio de janeiro</li>
          <li class="alpha-ie">&gt; <a target="_blank" href="http://www.uniriotec.br/~sitebsi/index.php?option=com_content&view=category&layout=blog&id=34&Itemid=27">information systems student</a></li>
          <!-- <li>&gt; <a target="_blank" href="http://caosdesign.com.br">web developer at Caos! Design</a></li> -->
          <li class="alpha-ie">&gt; <a target="_blank" href="http://www.petrobras.com.br/pt/">junior programmer at Petrobras</a></li>
        </ul>
      </section>
            
      <footer class="alpha-ie"></footer>
            
		</div>
        
    <script>
      //<![CDATA[
        Cufon.now();
      //]]>
    </script>
    
    <!-- asynchronous google Analytics -->
    <script>
    var _gaq = [['_setAccount', 'UA-4114546-2'], ['_trackPageview']];
    (function(d, t) {
    var g = d.createElement(t),
    s = d.getElementsByTagName(t)[0];
    g.async = true;
    g.src = ('https:' == location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    s.parentNode.insertBefore(g, s);
    })(document, 'script');
    </script>

  </body>
  
</html>
