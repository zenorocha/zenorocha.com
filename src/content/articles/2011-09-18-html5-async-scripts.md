---
title: HTML5 - Async Scripts
image: http://media.tumblr.com/tumblr_lrovdkNq881qe3219.jpg
---

<!-- <p class="demo-download"><a href="http://labs.zenorocha.com/html5/script" target="_blank"><img class="botao" src="http://media.tumblr.com/tumblr_lk325lvHwF1qe3219.png"/></a> <a href="https://github.com/zenorocha/HTML5-Script" target="_blank"><img class="botao" src="http://media.tumblr.com/tumblr_lk325u7HMG1qe3219.png"/></a> -->

O volume de mudanças que a [nova especificação do HTML](http://www.w3.org/TR/html5/scripting-1.html#attr-script-async) propõe para tag `<script>` é pequeno, mas chama atenção por resolver antigos problemas de performance.

Nesse artigo vamos entender quais são esses problemas e dar uma passada geral nas mudanças que o HTML5 propõe para essa tag.

<!--more-->

## type

Pra começar, lembra do famoso _type=text/javascript_?

Então, pode esquecer ele. A declaração desse [MIME type](http://pt.wikipedia.org/wiki/MIME) antes obrigatório no HTML4, se tornou opcional no HTML5, isso é claro, se você utilizar javascript ali dentro.

## language

O antigo atributo _language,_ ainda visto em sistemas legados, agora está depreciado devido a nunca ter se tornado um padrão de fato.

## O velho problema de performance dos scripts

Quaisquer arquivos javascript quando carregados utilizando a tag `<script>` são bloqueantes por natureza.

Enquanto é feito o download e execução do script todo o processo de parser do DOM é bloqueado, impedindo a renderização do resto da página. E olha que isso se aplicada a cada tag de script contida na página.

A [especificação do HTTP/1.1](http://www.w3.org/Protocols/rfc2616/rfc2616-sec8.html#sec8.1.4) diz que os navegadores não devem proceder com downloads de mais de 2 componentes em paralelo por host.

Uma famosa técnica de otimização de velocidade é servir imagens em múltiplos hosts, assim você consegue mais de dois downloads ocorrendo em paralelo. Entretanto, quando se trata de script o browser não irá iniciar nenhum outro download, enquanto o script é baixado, mesmo que em hosts diferentes.

Navegadores antigos, fazem o carregamento dos scripts um após o outro, veja como funciona no Firefox 3.0.

![](http://media.tumblr.com/tumblr_lrq5znRVSb1qe3219.gif)

Alguns browsers já fazem downloads em paralelo, mas o problema de renderização persiste.

## async & defer

Os atributos booleanos _async_ e _defer_ vêm para gerenciar exatamente esse tipo de problema. Ou seja, scripts bloqueantes nunca mais.

Para facilitar o entendimento, vou explicar como seria o funcionamento na prática de cada uma dessas linhas:

```
<script src="exemplo.js"></script>
```

A página aguarda o script terminar de carregar antes de continuar sua renderização e sua execução é feita imediatamente após. Isso pode aumentar significativamente o tempo de carregamento da página.

```
<script async src="exemplo.js"></script>
```

O download do script é feito de forma assíncrona enquanto o processo de renderização da página continua a ser feito. O script é executado depois que o download estiver completo.

```
<script defer src="exemplo.js"></script>
```

Assim como o exemplo acima, o download do script é feito de forma assíncrona. Mas sua execução se dá apenas quando todo o processo de renderização estiver concluído.

```
<script async defer src="exemplo.js"></script>
```

Nesse caso, o _async_ prevalece e o _defer_ é ignorado. Isso possibilita que os desenvolvedores possam usar _async_ em browsers que o suportam, mas proporciona um fallback com _defer_ para os browsers que não suportam o _async_.

## Compatibilidade

[![](http://media.tumblr.com/tumblr_lroul8WafP1qe3219.jpg)](http://caniuse.com/script-async) A implementação do atributo _async_ continua lenta em alguns navegadores. A Microsoft, por exemplo, só [anunciou o suporte para este atributo na versão 10](http://msdn.microsoft.com/en-us/ie/hh272905) que nem foi lançada ainda. Melhor do que o Opera que nem previsão de suporte oferece. [![](http://media.tumblr.com/tumblr_lroundIovj1qe3219.jpg)](http://caniuse.com/script-defer) Já para o atributo _defer_ a história é outra, sua implementação pela Microsoft é antiga e outros players têm se adaptado há pouco tempo.

## Conclusão

Com essa possibilidade de carregar scripts de forma assíncrona, seria a morte dos famosos _script loaders_, como [HeadJS](http://headjs.com/) e o [LABjs](http://labjs.com/)? Essa é uma questão interessante, pois eles chegaram no mercado justamente com o intuito de resolver o problema dos scripts bloqueantes, mas sua permanência ainda deve continuar por um bom tempo. Primeiro por conta do suporte precário de alguns browsers para essas propriedades e segundo porque eles propõe outras funcionalidades bem interessantes. Por exemplo, alguns já combinam todos seus scripts em um só, assim apenas uma requisição HTTP é feita ao servidor, outros possibilitam controles de dependência. O fato é que, acabando ou não com os _scripts loaders_, esses atributos por mais simples que pareçam vão proporcionar aplicações com muito mais performance para todos nós. HTML5 sem javascript, é como assistir o Tom sem o Jerry, por isso que uma forma otimizada de fazer seu carregamento se mostra tão relevante. 

## Referências

* [Best Practices for Speeding Up Your Web Site - Yahoo Developer Network](http://developer.yahoo.com/performance/rules.html)
* [Running Scripts in WebKit - The WebKit Open Source Project](http://www.webkit.org/blog/1395/running-scripts-in-webkit/)
* [Let’s make the web faster - Google Code](http://code.google.com/intl/en/speed/index.html)