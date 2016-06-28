---
title: Automatizando tarefas JS com Grunt
image: /images/grunt.jpg
---

Você já parou pra pensar na quantidade de coisas que realiza repetidamente em seus projetos JavaScript?

Se você for um cara preocupado com a consistência do seu código talvez utiliza várias vezes ao dia o [JSHint](http://www.jshint.com/)/[JSLint](http://www.jslint.com/). Quem sabe você também se preocupa com a qualidade da sua aplicação e provavelmente utiliza o [QUnit](http://docs.jquery.com/QUnit) para realizar testes unitários. Isso sem falar de performance, talvez você minifique e concatene seus arquivos com frequência antes de sair jogando eles online.

Durante o [Rio.js](http://riojs.org) Meetup desse último final de semana, o [Leo Balter](http://leobalter.net/) ([@leobalter](http://twitter.com/leobalter)) nos apresentou uma ferramenta que vem justamente para ajudar nesse processo e hoje vim aqui compartilhar com vocês também.

<!-- more -->

## O que é?

Criado pelo [Ben Alman](https://github.com/cowboy/) ([@cowboy](http://twitter.com/cowboy)), o [Grunt](https://github.com/cowboy/grunt) é uma ferramenta _beta_ que você roda no terminal para automatizar tarefas (obs: se você não tem intimidade com o terminal, aproveite essa chance para se aventurar nele, não é o bicho de 7 cabeças que parece ser).

## Instalando

Para começar a brincar você precisa ter o [node.js](http://nodejs.org/) e o [npm](http://npmjs.org/) (gerenciador de pacotes do node) instalados na sua máquina (não vou lhe mostrar como instalar isso, joga no Google que você encontra milhões de tutoriais).

Depois basta instalar o grunt via npm:

```
npm install -g grunt
```

Agora temos tudo pronto para executar.

## Iniciando

Para dar os primeiros passos, vamos utilizar um comando que cria um scaffolding a partir de determinado template.

```
grunt init:TEMPLATE
```

Até o momento, existem 3 opções de template:

1) CommonJS ([veja aqui um exemplo](https://github.com/cowboy/grunt-commonjs-example/tree/HEAD~1) de projeto criado com ele):

```
grunt init:commonjs
```

2) jQuery ([veja aqui um exemplo](https://github.com/cowboy/grunt-jquery-example/tree/HEAD~1) de projeto criado com ele):

```
grunt init:jquery
```

3) Node ([veja aqui um exemplo](https://github.com/cowboy/grunt-node-example/tree/HEAD~1) de projeto criado com ele):

```
grunt init:node
```

[Mais detalhes sobre esse comando aqui](https://github.com/cowboy/grunt/blob/master/docs/task_init.md)

## Minificação

O processo de minificação é feito utilizando o [UglifyJS](https://github.com/mishoo/UglifyJS/), basta rodar:

```
grunt min
```

[Mais detalhes sobre esse comando aqui](https://github.com/cowboy/grunt/blob/master/docs/task_min.md)

## Concatenação

Para concatenar seus arquivos JS, basta rodar:

```
grunt concat
```

[Mais detalhes sobre esse comando aqui](https://github.com/cowboy/grunt/blob/master/docs/task_concat.md)

## Lint

Para validar seu código através da ferramenta [JSLint](http://www.jshint.com/), basta rodar:

```
grunt lint
```

[Mais detalhes sobre esse comando aqui](https://github.com/cowboy/grunt/blob/master/docs/task_lint.md)

## QUnit

Para executar seus testes unitários com [QUnit](http://docs.jquery.com/QUnit), utilizando uma instância do [PhantomJS](http://www.phantomjs.org/), basta rodar:

```
grunt qunit
```

[Mais detalhes sobre esse comando aqui](https://github.com/cowboy/grunt/blob/master/docs/task_qunit.md)

## NodeUnit

Para executar seus testes unitários com [nodeunit](https://github.com/caolan/nodeunit), basta rodar:

```
grunt test
```

[Mais detalhes sobre esse comando aqui](https://github.com/cowboy/grunt/blob/master/docs/task_test.md)

## Servidor

Você também pode executar um servidor estático localmente, basta rodar:

```
grunt server
```

[Mais detalhes sobre esse comando aqui](https://github.com/cowboy/grunt/blob/master/docs/task_server.md)

## Concluindo

E é isso, espero que essa ferramenta lhe traga mais agilidade em seus projetos e te ajude, assim como tem me ajudado. Até a próxima!

## Leia mais

* [Introducing Grunt](http://weblog.bocoup.com/introducing-grunt/) - Bocoup
* [Meet Grunt: The Build Tool for JavaScript](http://net.tutsplus.com/tutorials/javascript-ajax/meeting-grunt-the-build-tool-for-javascript/) - Nettuts