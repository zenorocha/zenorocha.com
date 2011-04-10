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

    <link rel="stylesheet" type="text/css" href="style.css" />
        
    <script src="js/cufon.js"></script>
    <script src="js/chunk-five.font.js"></script>
        
    <script>
      Cufon.replace('body',{hover: true});
    </script>
        
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js"></script>
    <script src="js/anim.js"></script>
    <script src="js/social-hover.js"></script>
		    
  </head>
  
  <body>

    <div id="page">
        
      <header>
        <img src="images/zenorocha.png" alt="zeno rocha" id="zenorocha" />
        <img src="images/webdeveloper.png" alt="web developer" id="webdeveloper" />
      </header>

      <aside id="social">
        <ul>
          <li id="facebook"><a target="_blank" href="http://www.facebook.com/zenorocha"><strong>Facebook</strong></a></li>
          <li id="twitter"><a target="_blank" href="http://twitter.com/zenorocha"><strong>Twitter</strong></a></li>
          <li id="linkedin"><a target="_blank" href="http://www.linkedin.com/in/zenorocha"><strong>LinkedIn</strong></a></li>
        </ul>
      </aside>
            
      <address>
        <p id="tel">+55 21 8108.9727</p>
        <p id="email">contato@zenorocha.com</p>
      </address>
            
      <nav>
        <h1 id="recent">recent works</h1>
        
        <ul>
          <?php
      
            include 'php/jsonProjects.php';
            
            $projetos = json_decode($jsonProjects);
            
            for ($i = 0; $i <= sizeof($projetos -> item); $i++) {
              echo '<li><a target="_blank" href="' . $projetos -> item[$i] -> url . '">' . $projetos -> item[$i] -> name . ' &lt;</a></li>';
            }
            
          ?>
        </ul>
      </nav>
            
      <section>
        <h1 id="aboutme">about me</h1>
        
        <ul>
          <li>&gt; 20 year-old brazilian</li>
          <li>&gt; born in curitiba</li>
          <li>&gt; based in rio de janeiro</li>
          <li>&gt; <a target="_blank" href="http://www.uniriotec.br/~sitebsi/index.php?option=com_content&view=category&layout=blog&id=34&Itemid=27">information systems student</a></li>
          <!-- <li>&gt; <a target="_blank" href="http://caosdesign.com.br">web developer at Caos! Design</a></li> -->
          <li>&gt; <a target="_blank" href="http://www.petrobras.com.br/pt/">junior programmer at Petrobras</a></li>
        </ul>
      </section>
            
      <footer></footer>
            
		</div>
        
    <script>
      //<![CDATA[
        Cufon.now();
      //]]>
    </script>
        
		<!-- Google Analytics -->
		<script type="text/javascript">
		var gaJsHost = (("https:" == document.location.protocol) ? "https://ssl." : "http://www.");
		document.write(unescape("%3Cscript src='" + gaJsHost + "google-analytics.com/ga.js' type='text/javascript'%3E%3C/script%3E"));
		</script>
		<script type="text/javascript">
		try {
		var pageTracker = _gat._getTracker("UA-4114546-2");
		pageTracker._trackPageview();
		} catch(err) {}
		</script>

  </body>
  
</html>
