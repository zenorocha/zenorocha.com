---
title: Obtendo mais performance com Smaller e ImageOptim
oldUrl: http://blog.zenorocha.com/post/12843103176/obtendo-mais-performance-com-smaller-e-imageoptim
---

<p><img src="http://media.tumblr.com/tumblr_lur5ilxg451qe3219.jpg"/></p>

<p>Recentemente mudei de sistema operacional, passei de um Linux para um Mac OSx. E como toda mudança muitas novidades vieram, nova interface, novo editor de código, novos softwares, enfim várias coisas.</p>

<p>Só que uma das coisas que também mudou foram as ferramentas escolhidas para maximizar a performance das minhas aplicações web no client-side. E por isso, hoje eu vim falar rapidamente sobre elas.</p>

<!-- more -->

<h2>Smaller</h2>

<p><a href="http://smallerapp.com/" target="_blank"><img src="http://media.tumblr.com/tumblr_lupsfuDJp91qe3219.jpg"/></a></p>

<p>A primeira dessas ferramentas é o <a href="http://smallerapp.com/" target="_blank">Smaller</a>, que comprime seus arquivos HTML, PHP, CSS e JavaScript, removendo assim todos os comentários e espaços em branco desnecessários do documento uma vez estando no ambiente de produção. Ele ainda oferece a opção de combinar diversos arquivos em um só, diminuindo assim o número de requisições HTTP ao servidor.</p>

<p><img id="no-border" src="http://media.tumblr.com/tumblr_luprp0MzX21qe3219.png"/></p>

<p>A compressão do CSS e JavaScript é feita através do <a href="http://developer.yahoo.com/yui/compressor/" target="_blank">YUI Compressor</a>, enquanto que a compressão do HTML e PHP é feita usando o <a href="http://code.google.com/p/htmlcompressor/" target="_blank">htmlcompressor</a>.</p>

<h2>Image Optim</h2>

<p><a href="http://imageoptim.pornel.net/" target="_blank"><img src="http://media.tumblr.com/tumblr_lupsg8MpGz1qe3219.jpg"/></a></p>

<p>A segunda ferramenta é o <a href="http://imageoptim.pornel.net/" target="_blank">ImageOptim</a> indicada pelo meu amigo <a href="http://fellipe.com/" target="_blank">Davidson Fellipe</a>, que diminui drásticamente o tamanho dos arquivos de imagem e, portanto, aumentando a velocidade com que ele é carregado no servidor.</p>

<p><img id="no-border" src="http://media.tumblr.com/tumblr_luprttXtyj1qe3219.png"/></p>

<h2>Concluindo</h2>

<p>Seja lá qual for a ferramenta que voce utiliza, o importante é simplesmente usar e não apenas reconhecer a importância de aplicar <a href="http://developer.yahoo.com/performance/rules.html" target="_blank">técnicas de otimização</a>.</p>

<p>Muitas pessoas reconhecem que devem comer legumes para serem saudáveis, mas não comem. Assim como muitas pessoas reconhecem a importância de minificar seu código antes de ir para o ambiente de produção, mas também não o fazem.</p>

<p>E você, quais ferramentas utiliza?</p>
