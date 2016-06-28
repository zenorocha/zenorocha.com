---
title: Medindo o tempo de carregamento com o novo Google Analytics
---

Se você é desenvolvedor web e ainda não utiliza alguma ferramenta para análise de estatísticas não sabe o que está perdendo. Mas se você usa, provavelmente optou pelo [Google Analytics](http://www.google.com/analytics/), com certeza uma das melhores ferramentas no mercado.

Essa semana eles divulgaram uma novidade muito legal no [blog oficial](http://analytics.blogspot.com/). Agora é possível medir o tempo de carregamento de qualquer página. Isso mesmo, esqueça aquelas outras ferramentas que você usa para medir quanto tempo seu site está demorando pra carregar e monitore tudo direto no seu Google Analytics.

<!-- more -->

E o melhor, para ativar essa funcionalidade basta adicionar uma linha.

```
_gaq.push(['_trackPageLoadTime']);
```

Com isso, aquele código que você sempre coloca final no seu site ficará assim:

```
<script type="text/javascript">
  var _gaq = _gaq || [];

  _gaq.push(['_setAccount', 'UA-XXXXX-Y']);

  _gaq.push(['_trackPageview']);
  _gaq.push(['_trackPageLoadTime']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();
</script>
```

E voilà!

Lembrando que para visualizar esses dados será preciso trocar o modo de visualização para o Google Analytics Beta. No canto superior direito você encontrará um link para &#8220;Nova versão&#8221;. Depois é só acessar a opção &#8220;Velocidade do site&#8221; no menu &#8220;Conteúdo&#8221;.

## Referências

* [Google Analytics Blog](http://analytics.blogspot.com/2011/05/measure-page-load-time-with-site-speed.html)