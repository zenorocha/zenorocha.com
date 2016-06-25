---
title: Entendendo CoffeeScript
oldUrl: http://blog.zenorocha.com/post/8325407542/entendendo-coffeescript
---

<p><img src="http://media.tumblr.com/tumblr_loffq1Ym931qe3219.png"/></p>

<p>Quem é do mundo <a href="http://rubyonrails.org/" target="_blank">Ruby on Rails</a> já deve estar cansado de toda a polêmica acerca do <a href="http://jashkenas.github.com/coffee-script" target="_blank">CoffeeScript</a> meses atrás. Se você não acompanhou, vou tentar resumir a história. </p>

<p><a href="http://en.wikipedia.org/wiki/David_Heinemeier_Hansson" target="_blank">DHH</a> (<a href="http://twitter.com/#!/DHH" target="_blank">@dhh</a>), um dos criadores do Rails, tornou público que a versão 3.1 do framework viria com <a href="http://jashkenas.github.com/coffee-script" target="_blank">CoffeeScript</a> por padrão, o que gerou um buzz gigantesco na comunidade com relação à sua utilidade.</p>

<!-- more -->

<p><img src="http://media.tumblr.com/tumblr_loffar2Trj1qe3219.jpg"/></p>

<p>Não vou me delongar nessa história, até porque não é esse o objetivo desse artigo. Se você quiser saber mais, pode conferir o que o <a href="http://akitaonrails.com/" target="_blank">Fábio Akita</a> (<a href="http://twitter.com/#!/akitaOnRails" target="_blank">@akitaOnRails</a>), referência no mundo Rails, <a href="http://akitaonrails.com/2011/04/16/a-controversia-coffeescript" target="_blank">escreveu sobre o assunto</a>.</p>

<h2>Afinal, o que é CoffeeScript?</h2>

<p>É simplesmente uma linguagem que, quando compilada, gera Javascript. A ideia é facilitar a vida dos desenvolvedores jogando fora todos aqueles parênteses e chaves que atormentam nossas vidas. Expondo as boas boas partes do JavaScript de forma simples e objetiva.</p>

<p>A regra de ouro do é: </p>

<blockquote>

<p><em>&#8220;It&#8217;s just JavaScript&#8221;.</em></p>

</blockquote>

<h2>Vamos ao que interessa</h2>

<p>A maneira mais fácil de começar a mexer com CoffeeScript é utilizando o <em>Live Edit</em> do próprio <a href="http://jashkenas.github.com/coffee-script/" target="_blank">site oficial</a>, para isso basta clicar na aba <em>Try CoffeeScript. </em>Lá você poderá escrever e compilar na própria interface do site.</p>

<p>Ok, mas você não usará isso no seu dia-a-dia, isso é só para brincar. Se você quiser mesmo começar a utilizar essa linguagem em seus projetos existem dois caminhos.</p>

<p>O primeiro, não muito aconselhável, é usando o compilador baseado no browser.</p>

<pre class="prettyprint lang-html">&lt;script src="http://jashkenas.github.com/coffee-script/extras/coffee-script.js"&gt; &lt;/script&gt;

&lt;script type="text/coffeescript"&gt;

  # inicie aqui a brincadeira

&lt;/script&gt;</pre>

<p>O que seria uma decisão não muito inteligente, pelo menos no ambiente de produção. Já que obviamente você não irá querer interpretar CoffeeScript em tempo de execução.</p>

<p>Por conta disso, existe um compilador em <a href="http://nodejs.org/" target="_blank">Node.js</a> para pré-processar o arquivo.</p>

<p><img src="http://media.tumblr.com/tumblr_lofh28YIKN1qe3219.png"/></p>

<p>Portanto, se você quer começar a usar CoffeeScript pra valer, tenha mente que você vai precisar de <a href="http://nodejs.org/" target="_blank">Node.js</a> e seu respectivo instalador de pacotes, o <a href="http://npmjs.org/" target="_blank">Npm</a>.</p>

<p>Caso não os tenha instalado, conte com a ajuda do seu grande amigo Google. Se estiver em um sistema operacional Unix, confira no <a href="http://suissacorp.com.br/suissa/" target="_blank">blog do Suissa</a> (<a href="http://twitter.com/#!/osuissa" target="_blank">@osuissa</a>) como proceder com a instalação <a href="http://suissacorp.com.br/suissa/como-instalar-o-node-js-com-npm-no-ubuntu/" target="_blank">nesse artigo</a>. Se estiver em um sistema operacional Windows, você terá um pouco mais de trabalho.</p>

<p>Com seu ambiente montado, vamos agora instalar o compilador de CoffeeScript utilizando o <a href="http://npmjs.org/" target="_blank">Npm</a> através da linha de comando.</p>

<pre class="prettyprint">npm install coffee-script</pre>

<p>Pronto, agora você está apto a compilar arquivos do tipo <em>.coffee</em>. Novamente, se você estiver no Windows, talvez tenha que utilizar <a href="https://github.com/alisey/CoffeeScript-Compiler-for-Windows" target="_blank">outros artifícios</a>, mas não desista <strike>(ou desista e instale um SO de verdade :P)</strike>.</p>

<h2>Tudo pronto, vamos brincar</h2>

<p>Primeiramente, vamos criar um arquivo chamado <em>amy.coffee</em> com o seguinte conteúdo.</p>

<pre class="prettyprint lang-js">amyEstaViva = false

if amyEstaViva then alert "Eu sabia!" else alert "Droga =/"</pre>

<p>E agora vamos compilar.</p>

<pre class="prettyprint">coffee --compile amy.coffee</pre>

<p>O resultado em JavaScript será:</p>

<pre class="prettyprint lang-js">var amyEstaViva;

amyEstaViva = false;

if (amyEstaViva) {

  alert("Eu sabia!");

} else {

  alert("Droga =/");

}</pre>

<p>Nada de muito incrível, mas é uma pequena demonstração de quão legível fica um código feito em CoffeeScript.</p>

<p>Aumentando um pouquinho o nível de complexidade, que tal resolvermos o clássico problema <a href="http://www.codinghorror.com/blog/2007/02/fizzbuzz-the-programmers-stairway-to-heaven.html" target="_blank">FizzBuzz</a> de um <a href="http://dojorio.wordpress.com/" target="_blank">Coding Dojo</a> com apenas uma linha?</p>

<pre class="prettyprint lang-js">"#{if i%3 is 0 then 'fizz' else ''}#{if i%5 is 0 then 'buzz' else ''}" or i for i in [1..100]</pre>

<p>Esse e outros códigos para impressionar seus amigos com apenas 1 linha podem ser encontrados <a href="http://ricardo.cc/2011/06/02/10-CoffeeScript-One-Liners-to-Impress-Your-Friends.html" target="_blank">nesse artigo</a> do <a href="http://ricardo.cc/" target="_blank">Ricardo Tomasi</a> (<a href="http://twitter.com/ricardobeat" target="_blank">@ricardobeat</a>).</p>

<blockquote>

<p>Mas eu amo jQuery e não faço nada em JS sem ele. Mimimimi</p>

</blockquote>

<p>Sem problemas. Com CoffeeScript, o jQuery fica ainda melhor.</p>

<p>Imagine que você queira criar um plugin de jQuery em CoffeeScript.</p>

<pre class="prettyprint lang-js">$ = jQuery

$.fn.myFunction = -&gt;

  ### sua brincadeira aqui ###</pre>

<p>E o resultado em JS:</p>

<pre class="prettyprint lang-js">var $;

$ = jQuery;

$.fn.myFunction = function() {

  /* sua brincadeira aqui */

};</pre>

<p>Por falar em plugins de jQuery, que tal ver uma implementação real usando a <a href="https://github.com/zenorocha/jquery-boilerplate/blob/master/plus/jquery.boilerplate.coffee" target="_blank">versão em CoffeeScript</a> do <a href="http://jqueryboilerplate.com" target="_blank">jQuery Boilerplate</a>?</p>

<p>Se estiver interessado em mais exemplos de uso, confira o <a href="http://jashkenas.github.com/coffee-script/" target="_blank">site oficial</a> e diverta-se.</p>

<hr><h2>E mais</h2>

<p>Se você estiver sentindo falta de um <em>Syntax Highlighter</em> no seu editor como eu senti. Experimente essas versões para sistemas Unix.</p>

<ul><li>No GEdit - <a href="https://github.com/wavded/gedit-coffeescript" target="_blank">https://github.com/wavded/gedit-coffeescript</a></li>

<li>No TextMate - <a href="https://github.com/jashkenas/coffee-script-tmbundle" target="_blank">https://github.com/jashkenas/coffee-script-tmbundle</a></li>

</ul><p>Você também pode converter seus códigos Javascript para CoffeeScript de forma automatizada, sem ter que se preocupar em transcrever centenas de linhas de código. Para isso utilize o <a href="http://ricostacruz.com/js2coffee/" target="_blank">Js2Coffee</a>.</p>

<p>E se você gostou do que o CoffeeScript fez com seu Javascript, que tal a mesma coisa com seu HTML?</p>

<p>Conheça o <a href="http://coffeekup.org/" target="_blank">CoffeeCup</a>. O CoffeeScript para marcação.</p>

<hr><h2>Conclusão</h2>

<p>Mas então, será que precisamos mesmo saber CoffeeScript? <br/>Talvez não, mas com certeza precisamos saber JavaScript, isso é claro, se você lida com web.</p>

<p>Em tempos em que a legibilidade do código tem sido cada vez mais valorizada. Muitos acreditam que a adoção dessa nova linguagem pode revolucionar o mundo do JavaScript, enquanto outros acham que é apenas mais uma forma de fazer mais do mesmo e simplesmente repudiam essa nova onda.</p>

<p>Cabe a você identificar se essa linguagem agrega valor ao seu trabalho e lhe torna mais produtivo ou não. Valendo a máxima de que gosto não se discute, lembre-se que essa é uma escolha puramente estética e, consequentemente, pessoal. </p>

<p>E você o que acha dessa linguagem? Já implementou ou pensa em implementar em um projeto? Deixe sua opinião ;)</p>

<hr><h2>Leia também</h2>

<ul><li><a href="http://arcturo.com/library/coffeescript/" target="_blank">The Little Book on CoffeeScript</a></li>

<li><a href="http://net.tutsplus.com/tutorials/javascript-ajax/rocking-out-with-coffeescript/" target="_blank">Rocking out with CoffeeScript - Nettuts+</a></li>

<li><a href="http://issuu.com/autotelicum/docs/smooth_coffeescript" target="_blank">Smooth CoffeeScript</a></li>

<li><a href="http://akitaonrails.com/2010/03/27/brincando-com-coffee-script" target="_blank">Brincando com CoffeeScript - AkitaOnRails</a></li>

</ul>
