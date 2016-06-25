---
title: Automatizando tarefas JS com Grunt
oldUrl: http://blog.zenorocha.com/post/20067398797/automatizando-tarefas-js-com-grunt
---

<p><img src="http://media.tumblr.com/tumblr_m1lk0iY83D1qe3219.jpg"/></p>

<p>Você já parou pra pensar na quantidade de coisas que realiza repetidamente em seus projetos JavaScript?</p>

<p>Se você for um cara preocupado com a consistência do seu código talvez utiliza várias vezes ao dia o <a href="http://www.jshint.com/" target="_blank">JSHint</a>/<a href="http://www.jslint.com/" target="_blank">JSLint</a>. Quem sabe você também se preocupa com a qualidade da sua aplicação e provavelmente utiliza o <a href="http://docs.jquery.com/QUnit" target="_blank">QUnit</a> para realizar testes unitários. Isso sem falar de performance, talvez você minifique e concatene seus arquivos com frequência antes de sair jogando eles online.</p>

<p>Durante o <a href="http://riojs.org" target="_blank">Rio.js</a> Meetup desse último final de semana, o <a href="http://leobalter.net/" target="_blank">Leo Balter</a> (<a href="http://twitter.com/leobalter" target="_blank">@leobalter</a>) nos apresentou uma ferramenta que vem justamente para ajudar nesse processo e hoje vim aqui compartilhar com vocês também.</p>

<!-- more -->

<hr><h2>O que é?</h2>

<p>Criado pelo <a href="https://github.com/cowboy/" target="_blank">Ben Alman</a> (<a href="http://twitter.com/cowboy" target="_blank">@cowboy</a>), o <a href="https://github.com/cowboy/grunt" target="_blank">Grunt</a> é uma ferramenta <em>beta</em> que você roda no terminal para automatizar tarefas (obs: se você não tem intimidade com o terminal, aproveite essa chance para se aventurar nele, não é o bicho de 7 cabeças que parece ser).</p>

<hr><h2>Instalando</h2>

<p>Para começar a brincar você precisa ter o <a href="http://nodejs.org/" target="_blank">node.js</a> e o <a href="http://npmjs.org/" target="_blank">npm</a> (gerenciador de pacotes do node) instalados na sua máquina (não vou lhe mostrar como instalar isso, joga no Google que você encontra milhões de tutoriais).</p>

<p>Depois basta instalar o grunt via npm:</p>

<pre class="prettyprint lang-html">npm install -g grunt</pre>

<p>Agora temos tudo pronto para executar.</p>

<hr><h2>Iniciando</h2>

<p>Para dar os primeiros passos, vamos utilizar um comando que cria um scaffolding a partir de determinado template.</p>

<pre class="prettyprint lang-html">grunt init:TEMPLATE</pre>

<p>Até o momento, existem 3 opções de template:</p>

<p>1. CommonJS (<a href="https://github.com/cowboy/grunt-commonjs-example/tree/HEAD~1" target="_blank">veja aqui um exemplo</a> de projeto criado com ele):</p>

<pre class="prettyprint lang-html">grunt init:commonjs</pre>

<p>2. jQuery (<a href="https://github.com/cowboy/grunt-jquery-example/tree/HEAD~1" target="_blank">veja aqui um exemplo</a> de projeto criado com ele):</p>

<pre class="prettyprint lang-html">grunt init:jquery</pre>

<p>3. Node (<a href="https://github.com/cowboy/grunt-node-example/tree/HEAD~1" target="_blank">veja aqui um exemplo</a> de projeto criado com ele):</p>

<pre class="prettyprint lang-html">grunt init:node</pre>

<p><a href="https://github.com/cowboy/grunt/blob/master/docs/task_init.md" target="_blank">Mais detalhes sobre esse comando aqui</a></p>

<hr><h2>Minificação</h2>

<p>O processo de minificação é feito utilizando o <a href="https://github.com/mishoo/UglifyJS/" target="_blank">UglifyJS</a>, basta rodar:</p>

<pre class="prettyprint lang-html">grunt min</pre>

<p><a href="https://github.com/cowboy/grunt/blob/master/docs/task_min.md" target="_blank">Mais detalhes sobre esse comando aqui</a></p>

<hr><h2>Concatenação</h2>

<p>Para concatenar seus arquivos JS, basta rodar:</p>

<pre class="prettyprint lang-html">grunt concat</pre>

<p><a href="https://github.com/cowboy/grunt/blob/master/docs/task_concat.md" target="_blank">Mais detalhes sobre esse comando aqui</a></p>

<hr><h2>Lint</h2>

<p>Para validar seu código através da ferramenta <a href="http://www.jshint.com/" target="_blank">JSLint</a>, basta rodar:</p>

<pre class="prettyprint lang-html">grunt lint</pre>

<p><a href="https://github.com/cowboy/grunt/blob/master/docs/task_lint.md" target="_blank">Mais detalhes sobre esse comando aqui</a></p>

<hr><h2>QUnit</h2>

<p>Para executar seus testes unitários com <a href="http://docs.jquery.com/QUnit" target="_blank">QUnit</a>, utilizando uma instância do <a href="http://www.phantomjs.org/" target="_blank">PhantomJS</a>, basta rodar:</p>

<pre class="prettyprint lang-html">grunt qunit</pre>

<p><a href="https://github.com/cowboy/grunt/blob/master/docs/task_qunit.md" target="_blank">Mais detalhes sobre esse comando aqui</a></p>

<hr><h2>NodeUnit</h2>

<p>Para executar seus testes unitários com <a href="https://github.com/caolan/nodeunit" target="_blank">nodeunit</a>, basta rodar:</p>

<pre class="prettyprint lang-html">grunt test</pre>

<p><a href="https://github.com/cowboy/grunt/blob/master/docs/task_test.md" target="_blank">Mais detalhes sobre esse comando aqui</a></p>

<hr><h2>Servidor</h2>

<p>Você também pode executar um servidor estático localmente, basta rodar:</p>

<pre class="prettyprint lang-html">grunt server</pre>

<p><a href="https://github.com/cowboy/grunt/blob/master/docs/task_server.md" target="_blank">Mais detalhes sobre esse comando aqui</a></p>

<hr><h2>Concluindo</h2>

<p>E é isso, espero que essa ferramenta lhe traga mais agilidade em seus projetos e te ajude, assim como tem me ajudado. Até a próxima!</p>

<hr><h2>Leia mais</h2>

<ul><li><a href="http://weblog.bocoup.com/introducing-grunt/" target="_blank">Introducing Grunt</a> - Bocoup</li>

<li><a href="http://net.tutsplus.com/tutorials/javascript-ajax/meeting-grunt-the-build-tool-for-javascript/" target="_blank">Meet Grunt: The Build Tool for JavaScript</a> - Nettuts</li>

</ul>
