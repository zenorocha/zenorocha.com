---
title: Senhoras e senhores, apresento-lhes Wormz
image: http://media.tumblr.com/tumblr_lr5yzobIBN1qe3219.jpg
---

<!-- <p class="demo-download"><a href="http://html5-pro.com/wormz/" target="_blank"><img src="http://media.tumblr.com/tumblr_lk325lvHwF1qe3219.png" class="botao"/></a> <a href="https://github.com/HTML5-Pro/wormz/" target="_blank"><img src="http://media.tumblr.com/tumblr_lk325u7HMG1qe3219.png" class="botao"/></a></p> -->

Ontem foi o lançamento oficial do projeto [Wormz](http://html5-pro.com/wormz/), um experimento em canvas que eu e Zanoni Miranda estivemos trabalhando nos últimos dias.

É com muita felicidade que entramos para lista dos primeiros brasileiros a figurar no [Chrome Experiments](http://www.chromeexperiments.com/detail/wormz/), a galeria da [Google](http://www.chromeexperiments.com/about/) com os melhores experimentos feitos em HTML5 de todo o mundo.

Muitas foram as lições aprendidas durante esse processo e pretendo apresentar aqui alguns detalhes técnicos por trás desse projeto e as motivações em cada tomada de decisão.

<!-- more -->

Abaixo, você pode ver uma pequena demonstração em vídeo do que é possível fazer com ele.

<div class="iframe-wrap">
  <iframe src="http://www.youtube.com/embed/acc10Cb5V0o" frameborder="0" allowfullscreen="true">
  </iframe>
</div>

## jQuery

> Se jQuery torna tudo tão fácil, por que vocês codificaram tudo em Javascript puro?

Essa resposta é simples, **desempenho**. Para um algoritmo dessa complexidade o requisito desempenho é simplesmente crucial. Ter escrito toda sua lógica em jQuery poderia ter levado menos tempo, porém no final seu uso significa mais processamento e, portanto, mais demora.

Falando em desempenho, o [Tiago Veloso](http://tiagoveloso.com/) fez uns testes bem legais utilizando as versões atualizadas dos canais beta de cada navegador - ou seja, Google Chrome 15.0.874.54 beta-m e Firefox 8.0.

E, por incrível que pareça, o Firefox se saiu bem melhor. Com ele a CPU ficou em 12-13% rodando bem fluido, enquanto que no Chrome ia lá pra 17% com 5 FPS ou menos. 

Mais detalhes [nesse post](http://www.facebook.com/zenorocha/posts/100363310073976) e nos screenshots abaixo:

Chrome: [](http://bit.ly/ocqYbp)[http://bit.ly/ocqYbp](http://bit.ly/ocqYbp) - [](http://bit.ly/nlI9fp)[http://bit.ly/nlI9fp](http://bit.ly/nlI9fp)
Firefox: [](http://bit.ly/pELXgT)[http://bit.ly/pELXgT](http://bit.ly/pELXgT) - [](http://bit.ly/p85qkH)[http://bit.ly/p85qkH](http://bit.ly/p85qkH)

## HTML5

> Que funcionalidades do HTML5 vocês exploram nesse projeto?

Já que estávamos fazendo algo em HTML5, resolvemos ir além do canvas e utilizar algumas coisas que seriam úteis para aprimorar a experiência do usuário.

No canto esquerdo, criamos um slider para que o usuário possa interagir com o experimento mudando de cor, aumentando a velocidade e etc. Para essa interface utilizamos um dos [novos tipos de input chamado range](http://diveintohtml5.org/forms.html#type-range).

![](http://media.tumblr.com/tumblr_lr63c9bWtR1qe3219.jpg)Sua aparência nativa nos atendia muito bem em navegadores [webkit](http://pt.wikipedia.org/wiki/WebKit), mas no Firefox era muito inferior. O que acabou nos motivando a utilizar um plugin chamado [jQuery Tools Range Input](http://flowplayer.org/tools/rangeinput/). Após algumas mudanças visuais e refatorações no core do plugin conseguimos chegar nesse visual.

![](http://media.tumblr.com/tumblr_lr64hhhvvx1qe3219.jpg)No canto direito, criamos uma lista das imagens que, de tempos em tempos, se revezam no ambiente em que a mágica acontece.

A ideia aqui foi aumentar ainda mais a interatividade do usuário com o experimento, possibilitando que ele adicione suas próprias imagens. Isso tudo na forma mais intuitiva possível, arrastando do seu desktop para o navegador.

Para reproduzir esse tipo de interação nativamente utilizamos a [File API](http://dev.w3.org/2006/webapi/FileAPI/) e a [Drag and Drop API](http://html5doctor.com/native-drag-and-drop/).

A flexibilidade de criar novos atributos no estilo **data-*** também se destacam não só nesse projeto, mas em muitos que estou desenvolvendo hoje. Talvez esteja na hora de falar sobre ele aqui no blog inclusive.

## Compatibilidade

> O Internet Explorer 8 é o navegador mais usado em todo o planeta segundo o [W3Counter](http://www.w3counter.com/globalstats.php) e o fato é que a tag <canvas> não é suportada nele. Ainda bem que existe o [ExplorerCanvas](http://code.google.com/p/explorercanvas/) que resolve esse problema.
>
> Então, por que vocês não utilizaram esse recurso?

Fiz alguns testes de desempenho com isso e os resultados foram satisfatórios.

Mas dessa vez, não tem nada a ver com desempenho.

Eu, como desenvolvedor web, me sinto com a missão constante de evangelizar o uso de browsers modernos para as pessoas, até porque os dois lados ganham com isso.

Pela característica experimental desse projeto, optamos por apresentar uma mensagem que incentivasse esse usuário que não possui um navegador com suporte nativo para esse novo elemento do HTML5, a utilizar um browser mais moderno.

![](http://media.tumblr.com/tumblr_lr5zzzK4Lt1qe3219.jpg)

## Detecção

> E como é feita a detecção desse usuário que não possui suporte?

Usando o famoso [Modernizr](http://www.modernizr.com/), é claro. Só que dessa vez com muito mais objetividade. Seu novo [build customizável](http://www.modernizr.com/download/) abriu portas para um uso muito mais eficaz e nosso case explicita bem isso.

Perceba que se você baixar toda a biblioteca, terá que importar um arquivo com tamanho de 42kb. E para prover outro tipo de conteúdo poderia usar o [Yepnope.js](http://yepnopejs.com/) que já está incorporado na biblioteca. Assim eu codificaria algo do tipo:

```
yepnope({
  test: Modernizr.canvas,
  yep: 'js/wormz.js',
  nope: 'js/polyfill.js'
});
```

O que seria muito aceitável, mas por quê não ir direto ao ponto?

Ok, eu poderia esquecer a biblioteca e ter escrito eu mesmo esse teste de funcionalidade, mas não queria perder tempo com isso, foi aí que o build customizável entra. Já que meu projeto só aborda o uso da tag `<canvas>` posso configurar a biblioteca para que apenas as linhas desse tipo de detecção específico estejam lá.

E além do mais, não preciso do yepnope pra isso. Você pode habilitar a criação de classes css no seu html, assim fica fácil pra tratar isso no CSS.

```
.no-canvas #canvas {
  background: url(../img/polyfill.jpg) no-repeat 10px 10px;
}
```

No fritar dos ovos, ao invés de importar 42kb de código, só importo 2.7kb agora.

## HTML5-Pro

> E o que vocês vão fazer em seguida?

<strike>A mesma coisa que fazemos todos os dias, tentar dominar o mundo :P</strike>

A ideia é fazer do [HTML5-Pro](http://html5-pro.com%5D) um time que, atráves de projetos criativos, procura explorar o máximo que esse novo padrão pode oferecer.

Já estamos com outras ideias em desenvolvimento e se você curte spoilers é só chegar no [nosso Github](https://github.com/HTML5-Pro/).

## Feedback

O volume de visitas têm sido assustador nesses últimos dias e o feedback igualmente bom.

![](http://media.tumblr.com/tumblr_lsd5qzTbat1qe3219.jpg)

[Hakim Hattab](http://hakim.se/), um dos desenvolvedores responsáveis pelo famoso projeto [20 Things I Learned About Browsers and the Web](http://hakim.se/) também comentou.

![](http://media.tumblr.com/tumblr_lsd5qnmQXf1qe3219.jpg)

Além desses meio enigmáticos…

![](http://media.tumblr.com/tumblr_lsd5qbi0611qe3219.jpg)

E você, gostou do experimento? Tem outras perguntas sobre ele?

Fique a vontade para interagir aqui.