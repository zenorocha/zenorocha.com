---
title: Obtendo mais performance com Smaller e ImageOptim
image: http://media.tumblr.com/tumblr_lur5ilxg451qe3219.jpg
---

Recentemente mudei de sistema operacional, passei de um Linux para um Mac OSx. E como toda mudança muitas novidades vieram, nova interface, novo editor de código, novos softwares, enfim várias coisas.

Só que uma das coisas que também mudou foram as ferramentas escolhidas para maximizar a performance das minhas aplicações web no client-side. E por isso, hoje eu vim falar rapidamente sobre elas.

<!-- more -->

## Smaller

[![](http://media.tumblr.com/tumblr_lupsfuDJp91qe3219.jpg)](http://smallerapp.com/)

A primeira dessas ferramentas é o [Smaller](http://smallerapp.com/), que comprime seus arquivos HTML, PHP, CSS e JavaScript, removendo assim todos os comentários e espaços em branco desnecessários do documento uma vez estando no ambiente de produção. Ele ainda oferece a opção de combinar diversos arquivos em um só, diminuindo assim o número de requisições HTTP ao servidor.

![](http://media.tumblr.com/tumblr_luprp0MzX21qe3219.png)

A compressão do CSS e JavaScript é feita através do [YUI Compressor](http://developer.yahoo.com/yui/compressor/), enquanto que a compressão do HTML e PHP é feita usando o [htmlcompressor](http://code.google.com/p/htmlcompressor/).

## Image Optim

[![](http://media.tumblr.com/tumblr_lupsg8MpGz1qe3219.jpg)](http://imageoptim.pornel.net/)

A segunda ferramenta é o [ImageOptim](http://imageoptim.pornel.net/) indicada pelo meu amigo [Davidson Fellipe](http://fellipe.com/), que diminui drásticamente o tamanho dos arquivos de imagem e, portanto, aumentando a velocidade com que ele é carregado no servidor.

![](http://media.tumblr.com/tumblr_luprttXtyj1qe3219.png)

## Concluindo

Seja lá qual for a ferramenta que voce utiliza, o importante é simplesmente usar e não apenas reconhecer a importância de aplicar [técnicas de otimização](http://developer.yahoo.com/performance/rules.html).

Muitas pessoas reconhecem que devem comer legumes para serem saudáveis, mas não comem. Assim como muitas pessoas reconhecem a importância de minificar seu código antes de ir para o ambiente de produção, mas também não o fazem.

E você, quais ferramentas utiliza?