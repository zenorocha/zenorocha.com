---
title: O que o Angry Birds tem a ver com o Flash?
image: http://media.tumblr.com/tumblr_llhase5ShL1qe3219.jpg
---

O mais novo case queridinho pela comunidade HTML5 é o Angry Birds, um dos jogos mais famosos na plataforma mobile, agora disponível no seu desktop.

As estatísticas sobre o jogo impressionam, pra começar foi simplesmente o game mais baixado em 2010. Na sua versão paga, ele ocupa o topo da lista da Apple Store em, pelo menos, 68 países. Além de ser o jogo mais popular da [Ovi Store](http://store.ovi.com/), a loja de aplicativos da Nokia. 

Durante a [Google I/O](http://www.google.com/events/io/2011/) que rolou essa semana em São Francisco, a [Rovio](http://www.rovio.com/), empresa que criou o jogo, anunciou o lançamento de uma versão especial que pode ser instalada diretamente no Google Chrome, na [Chrome Web Store](https://chrome.google.com/webstore).

<!-- more -->

O jogo, de fato, é muito bom, a jogabilidade é ótima, o design muito bem elaborado e a implementação em HTML5 melhor ainda. Se você ainda não jogou corre lá!

[chrome.angrybirds.com](http://chrome.angrybirds.com/)

Legal! Mas onde o Flash entra nessa história toda?

Pra saber é só desativar o Flash Player e tentar jogar novamente.

![](http://media.tumblr.com/tumblr_llhat53nRc1qe3219.jpg)

Estranho não? Por quê um jogo que não foi feito em Flash precisaria do Flash Player para rodar?

O que acontece é que a tag &lt;audio&gt; ainda não está muito preparada para jogos e aplicações profissionais de música.

O [Ray Cromwell](http://cromwellian.blogspot.com) explica melhor.

<blockquote>[&#8230;] after the release of Angry Birds at Google I/O, people noticed that it was requesting Flash. Angry Birds is written in GWT and uses a GWT library written by Fred Sauer called GWT-voices. <br/><br/>This library not only supports HTML5 audio, but has fallbacks to Flash and even &lt;bgsound&gt; on IE6! There was speculation the Flash requirement was done for nefarious purposes (to block iOS) or because Chrome includes Flash, but the reality is, it was done <em>both</em> because Chrome has some bugs, and HTML5 &lt;audio&gt; just isn’t good for games or professional music applications. [&#8230;] <br/><br/>- <a href="http://cromwellian.blogspot.com/2011/05/ive-been-having-twitter-back-and-forth.html" target="_blank">cromwellian.blogspot.com</a></blockquote>

Games feitos em HTML5 ainda tem um belo caminho a trilhar. O Angry Birds é um ótimo exemplo de aplicativo feito puramente em HTML5, mas que ainda depende de bibliotecas do Flash para rodar. M<span>uitos problemas gráficos foram resolvidos com<span> </span><span><a href="http://en.wikipedia.org/wiki/WebGL" target="_blank">WebGL</a></span>, mas o áudio continua sendo um problema. Ainda bem que a Google está trabalhando na &#8220;Web Audio API&#8221;, conforme anunciado na lista de discussão da W3C</span><span>:</span>

<blockquote>I&#8217;d like to announce that Google Chrome now supports the Web Audio API. For now, it needs to be enabled in “about:flags” and runs on Mac OS X (Windows and Linux are nearly ready!). I&#8217;ve updated the demo page with a link to the binary:<br/><br/><a href="http://chromium.googlecode.com/svn/trunk/samples/audio/" target="_blank"><a href="http://chromium.googlecode.com/svn/trunk/samples/audio/" target="_blank">http://chromium.googlecode.com/svn/trunk/samples/audio/</a></a> <br/><br/>[&#8230;] <br/><br/>- <a href="http://lists.w3.org/Archives/Public/public-xg-audio/2011Feb/0000.html" target="_blank">lists.w3.org</a></blockquote>

## Bônus

Tá rolando pela internet um hack que libera todos os níveis do jogo, é só colar essa linha no navegador e pronto:

```
javascript: var i = 0; while (i&lt;=69) { localStorage.setItem('level_star_'+i,'3'); i++; } window.location.reload();
```

Fala sério, depois de ter lido o <a href="/html5-local-storage" target="_blank">tutorial sobre HTML5 Local Storage</a> até você poderia ter escrito esse hack né?

## Referência

Esse artigo foi inspirado no <a href="http://www.2ality.com/" target="_blank">link</a> que o Marcus Sá (<a href="http://twitter.com/#!/sa_vini" target="_blank">@sa_vini</a>) postou em uma thread que tá rolando na lista <a href="http://groups.google.com/group/html5-css3-brasil" target="_blank">html5-css3-brasil</a> entitulada:

<blockquote>

<em>&#8220;Angry Birds - Flash morreu faz tempo&#8221;</em>

</blockquote>

Na qual volto a dizer que uma afirmação dessa só ressalta a falta de conhecimento tanto de Flash quanto de HTML5.
