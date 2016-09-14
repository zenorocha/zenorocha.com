---
title: Especial do Campeão - Globoesporte.com
image: http://media.tumblr.com/tumblr_lvvtnqRj2g1qe3219.png
---

Nesse último domingo tivemos a tão movimentada rodada final que definiria o campeão brasileiro de 2011\. Com ela também viria o lançamento do meu primeiro produto desde que entrei no [Globoesporte.com](http://globoesporte.com). 

Lembro bem quando de ter passado a manhã inteira de uma segunda-feira elaborando o protótipo de uma ideia que tive no sábado. Também lembro da expectativa que tinha para mostrar aquilo para o meu chefe quando chegasse.

<!-- more -->

A ideia era simples, consistia apenas em contar a trajetória do clube campeão. Mas a experiência que queríamos proporcionar, essa sim era única.

O que também era único, era minha vontade em colocar pela primeira vez no ar algo feito com aquele doctype html5\. Coisa que eu nunca tinha visto dar as caras em toda a Rede Globo.

A técnica empregada para criá-lo já é famosa entre os desenvolvedores mais antenados. O Parallax, que consiste em movimentar elementos com velocidades diferentes criando uma ilusão de profundidade (Leia mais em [A imersão do Parallax](http://www.agni.art.br/a-imersao-do-efeito-parallax/) por [Edu Agni](http://www.agni.art.br/)). Apesar de já ter sido implementada por vários sites e passível de ser reproduzida com qualquer outra linguagem como HTML4, XHTML e Flash, eu tinha certeza de que faria sucesso com a massa e o resultado não podia ser outro.

Então se iniciou a implementação.

Por ser o único desenvolvedor responsável pelo projeto eu tinha total liberdade para utilizar o que quisesse em termos de tecnologia. Logo, a primeira decisão foi utilizar o [Middleman](http://middlemanapp.com/), um gerador estático escrito em [Ruby](http://www.ruby-lang.org/pt/) e baseado no [Sinatra](http://www.sinatrarb.com/) que me permitiria utilizar coisas como o [Haml](http://haml-lang.com/), [Slim](http://slim-lang.com/), [CoffeeScript](http://jashkenas.github.com/coffee-script/), [Sass](http://sass-lang.com/) e [Compass](http://compass-style.org/) com mais fluidez. Nunca tinha usado ele e meu objetivo não era usar todo esse bando de linguagens pré-processadas, estava querendo mesmo experimentar o workflow de um projeto comercial usando [Sass](http://sass-lang.com/) e [Compass](http://compass-style.org/), depois de ter visto uma palestra interna da [Globo.com](http://globo.com) feita pelo Everton Fraga ([@evertonfraga](http://twitter.com/#!/evertonfraga)).

Mas as facilidades que o [Middleman](http://middlemanapp.com/) ofereceu ao longo do desenvolvimento através do uso de [Partials](http://middlemanapp.com/guides/templates-layouts-partials), [LiveReload](http://middlemanapp.com/guides/livereload), minificação de código com [YUI](http://developer.yahoo.com/yui/compressor/) e compressão de imagem com o [Smusher](https://github.com/grosser/smusher) no build, foi impressionante.

Em termos de linguagem HTML5, nada de muito incrível foi utilizado. O que ajudou muito, como sempre, foi a flexibilidade de criar atributos personalizados com o [data-*](http://html5doctor.com/html5-custom-data-attributes/) para depois manipulá-los através de JavaScript.

Um grande desafio era com relação ao peso da aplicação por conta das imagens sempre muito grandes e em formato PNG. Em determinado momento a aplicação chegou a ter 13mb de peso. O que foi diminuido para cerca de 3mb, graças a alta compressão do [Image Alpha](http://pngmini.com/).

É claro que o Flash não podia ficar fora dessa, para fornecer conteúdo multimídia de áudio e vídeo, optamos por ele.

Então, após uma belíssima execução de arte feita por Alexandre Lage ([@alexandrelage](http://twitter.com/#!/alexandrelage)) e Pedro Almeida ([@ipedro](http://twitter.com/#!/ipedro)), um excelente trabalho editorial feito por uma porção de jornalistas e boas horas de desenvolvimento por esta pessoa que vós fala, foi lançado o produto. Ver a chamada para algo que você fez, no site que você visita todos os dias há anos e depois no programa de TV que você que você assistiu por toda sua vida, foi uma sensação no mínimo diferente.

O resultado você pode ver em: [globoesporte.com/timaocampeao](http://globoesporte.globo.com/timaocampeao)

Hoje o projeto completa 2 dias no ar. A repercussão tem sido grande, as estatísticas assustadoras e a minha satisfação maior ainda. Pela primeira vez nessa minha curta carreira como desenvolvedor, pude proporcionar uma experiência que transcende algo simplesmente bonitinho para algo que mexe com o sentimento das pessoas.

Pode parecer besteira, mas existem pessoas muito ligadas sentimentalmente ao futebol e mais de uma vez vi pessoas falando que se emocionaram ao ver o produto. É nessas horas que você vê como valeu a pena passar madrugadas acordado.

Valeu papai noel por ter passado mais cedo por aqui e ter me dado o presente de fazer isso. Para registrar o momento, além desse post, resolvi guardar alguns tweets.

[![](http://media.tumblr.com/tumblr_lvvvvt7uh31qe3219.png)](http://twitter.com/#!/cmerigo/status/144092776525598720)

[![](http://media.tumblr.com/tumblr_lvvvw7Pmmq1qe3219.png)](http://twitter.com/#!/jaderubini/status/144096582952960000)

[![](http://media.tumblr.com/tumblr_lvvvxvxhNw1qe3219.png)](http://twitter.com/#!/guilhermesacco/status/144285875260489728)