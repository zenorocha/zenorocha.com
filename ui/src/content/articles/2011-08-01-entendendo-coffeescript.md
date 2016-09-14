---
title: Entendendo CoffeeScript
image: http://media.tumblr.com/tumblr_loffq1Ym931qe3219.png
---

Quem é do mundo [Ruby on Rails](http://rubyonrails.org/) já deve estar cansado de toda a polêmica acerca do [CoffeeScript](http://jashkenas.github.com/coffee-script) meses atrás. Se você não acompanhou, vou tentar resumir a história. 

[DHH](http://en.wikipedia.org/wiki/David_Heinemeier_Hansson) ([@dhh](http://twitter.com/#!/DHH)), um dos criadores do Rails, tornou público que a versão 3.1 do framework viria com [CoffeeScript](http://jashkenas.github.com/coffee-script) por padrão, o que gerou um buzz gigantesco na comunidade com relação à sua utilidade.

<!-- more -->

![](http://media.tumblr.com/tumblr_loffar2Trj1qe3219.jpg)

Não vou me delongar nessa história, até porque não é esse o objetivo desse artigo. Se você quiser saber mais, pode conferir o que o [Fábio Akita](http://akitaonrails.com/) ([@akitaOnRails](http://twitter.com/#!/akitaOnRails)), referência no mundo Rails, [escreveu sobre o assunto](http://akitaonrails.com/2011/04/16/a-controversia-coffeescript).

## Afinal, o que é CoffeeScript?

É simplesmente uma linguagem que, quando compilada, gera Javascript. A ideia é facilitar a vida dos desenvolvedores jogando fora todos aqueles parênteses e chaves que atormentam nossas vidas. Expondo as boas boas partes do JavaScript de forma simples e objetiva.

A regra de ouro do é:

> _“It’s just JavaScript”._

## Vamos ao que interessa

A maneira mais fácil de começar a mexer com CoffeeScript é utilizando o _Live Edit_ do próprio [site oficial](http://jashkenas.github.com/coffee-script/), para isso basta clicar na aba _Try CoffeeScript._ Lá você poderá escrever e compilar na própria interface do site.

Ok, mas você não usará isso no seu dia-a-dia, isso é só para brincar. Se você quiser mesmo começar a utilizar essa linguagem em seus projetos existem dois caminhos.

O primeiro, não muito aconselhável, é usando o compilador baseado no browser.

```
<script src="http://jashkenas.github.com/coffee-script/extras/coffee-script.js"></script>

<script type="text/coffeescript">
  # inicie aqui a brincadeira
</script>
```

O que seria uma decisão não muito inteligente, pelo menos no ambiente de produção. Já que obviamente você não irá querer interpretar CoffeeScript em tempo de execução.

Por conta disso, existe um compilador em [Node.js](http://nodejs.org/) para pré-processar o arquivo.

![](http://media.tumblr.com/tumblr_lofh28YIKN1qe3219.png)

Portanto, se você quer começar a usar CoffeeScript pra valer, tenha mente que você vai precisar de [Node.js](http://nodejs.org/) e seu respectivo instalador de pacotes, o [Npm](http://npmjs.org/).

Caso não os tenha instalado, conte com a ajuda do seu grande amigo Google. Se estiver em um sistema operacional Unix, confira no [blog do Suissa](http://suissacorp.com.br/suissa/) ([@osuissa](http://twitter.com/#!/osuissa)) como proceder com a instalação [nesse artigo](http://suissacorp.com.br/suissa/como-instalar-o-node-js-com-npm-no-ubuntu/). Se estiver em um sistema operacional Windows, você terá um pouco mais de trabalho.

Com seu ambiente montado, vamos agora instalar o compilador de CoffeeScript utilizando o [Npm](http://npmjs.org/) através da linha de comando.

```
npm install coffee-script
```

Pronto, agora você está apto a compilar arquivos do tipo _.coffee_. Novamente, se você estiver no Windows, talvez tenha que utilizar [outros artifícios](https://github.com/alisey/CoffeeScript-Compiler-for-Windows), mas não desista <strike>(ou desista e instale um SO de verdade :P)</strike>.

## Tudo pronto, vamos brincar

Primeiramente, vamos criar um arquivo chamado _amy.coffee_ com o seguinte conteúdo.

```
amyEstaViva = false

if amyEstaViva then alert "Eu sabia!" else alert "Droga =/"
```

E agora vamos compilar.

```
coffee --compile amy.coffee
```

O resultado em JavaScript será:

```
var amyEstaViva;

amyEstaViva = false;

if (amyEstaViva) {

  alert("Eu sabia!");

} else {

  alert("Droga =/");

}
```

Nada de muito incrível, mas é uma pequena demonstração de quão legível fica um código feito em CoffeeScript.

Aumentando um pouquinho o nível de complexidade, que tal resolvermos o clássico problema [FizzBuzz](http://www.codinghorror.com/blog/2007/02/fizzbuzz-the-programmers-stairway-to-heaven.html) de um [Coding Dojo](http://dojorio.wordpress.com/) com apenas uma linha?

```
"#{if i%3 is 0 then 'fizz' else ''}#{if i%5 is 0 then 'buzz' else ''}" or i for i in [1..100]
```

Esse e outros códigos para impressionar seus amigos com apenas 1 linha podem ser encontrados [nesse artigo](http://ricardo.cc/2011/06/02/10-CoffeeScript-One-Liners-to-Impress-Your-Friends.html) do [Ricardo Tomasi](http://ricardo.cc/) ([@ricardobeat](http://twitter.com/ricardobeat)).

> Mas eu amo jQuery e não faço nada em JS sem ele. Mimimimi

Sem problemas. Com CoffeeScript, o jQuery fica ainda melhor.

Imagine que você queira criar um plugin de jQuery em CoffeeScript.

```
$ = jQuery

$.fn.myFunction = -&gt;

  ### sua brincadeira aqui ###
```

E o resultado em JS:

```
var $;

$ = jQuery;

$.fn.myFunction = function() {

  /* sua brincadeira aqui */

};
```

Por falar em plugins de jQuery, que tal ver uma implementação real usando a [versão em CoffeeScript](https://github.com/zenorocha/jquery-boilerplate/blob/master/plus/jquery.boilerplate.coffee) do [jQuery Boilerplate](http://jqueryboilerplate.com)? Se estiver interessado em mais exemplos de uso, confira o [site oficial](http://jashkenas.github.com/coffee-script/) e diverta-se.

## E mais

Se você estiver sentindo falta de um _Syntax Highlighter_ no seu editor como eu senti. Experimente essas versões para sistemas Unix.

* No GEdit - [https://github.com/wavded/gedit-coffeescript](https://github.com/wavded/gedit-coffeescript)
* No TextMate - [https://github.com/jashkenas/coffee-script-tmbundle](https://github.com/jashkenas/coffee-script-tmbundle)

Você também pode converter seus códigos Javascript para CoffeeScript de forma automatizada, sem ter que se preocupar em transcrever centenas de linhas de código. Para isso utilize o [Js2Coffee](http://ricostacruz.com/js2coffee/). E se você gostou do que o CoffeeScript fez com seu Javascript, que tal a mesma coisa com seu HTML? Conheça o [CoffeeCup](http://coffeekup.org/). O CoffeeScript para marcação.

## Conclusão

Mas então, será que precisamos mesmo saber CoffeeScript?
Talvez não, mas com certeza precisamos saber JavaScript, isso é claro, se você lida com web. Em tempos em que a legibilidade do código tem sido cada vez mais valorizada. Muitos acreditam que a adoção dessa nova linguagem pode revolucionar o mundo do JavaScript, enquanto outros acham que é apenas mais uma forma de fazer mais do mesmo e simplesmente repudiam essa nova onda. Cabe a você identificar se essa linguagem agrega valor ao seu trabalho e lhe torna mais produtivo ou não. Valendo a máxima de que gosto não se discute, lembre-se que essa é uma escolha puramente estética e, consequentemente, pessoal.  E você o que acha dessa linguagem? Já implementou ou pensa em implementar em um projeto? Deixe sua opinião ;)

## Leia também

* [The Little Book on CoffeeScript](http://arcturo.com/library/coffeescript/)
* [Rocking out with CoffeeScript - Nettuts+](http://net.tutsplus.com/tutorials/javascript-ajax/rocking-out-with-coffeescript/)
* [Smooth CoffeeScript](http://issuu.com/autotelicum/docs/smooth_coffeescript)
* [Brincando com CoffeeScript - AkitaOnRails](http://akitaonrails.com/2010/03/27/brincando-com-coffee-script)
