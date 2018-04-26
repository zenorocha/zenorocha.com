---
title: Conversores de Flash em HTML5 e a disputa entre Google e Adobe
image: http://media.tumblr.com/tumblr_lnvzxjaOFe1qe3219.jpg
slug: conversores-de-flash-em-html5
---

Um dos recentes lançamentos da Google reavivou a briguinha Flash vs HTML5. Seu nome é [Swiffy](http://swiffy.googlelabs.com/) e é mais um que entra pra galeria dos conversores de Flash para HTML5, <span>abrindo inúmeras possibilidades para dispositivos móveis</span>.

Entenda como funcionam esses conversores e se vale mesmo a pena usá-los hoje.

<!-- more -->

## Google Swiffy

![](http://media.tumblr.com/tumblr_lnw1ljf6Td1qe3219.jpg)

Junto com a recente maré de lançamentos da Google que trouxeram diversas novidades como [Google+](https://plus.google.com), veio também o [Swiffy](http://swiffy.googlelabs.com/). A ferramenta, disponível no Google Labs, está em fase de testes, mas já converte arquivos SWF 8 e ActionScript 2.0 para rodar em navegadores que aceitam HMTL 5.

A Google disponibilizou algumas demonstrações de arquivos convertidos pela ferramenta.

**Animação original em Flash**

<div class="iframe-wrap">
  <iframe src="http://www.youtube.com/embed/http://swiffy.googlelabs.com/gallery/example4.swf" frameborder="0" allowfullscreen="true">
  </iframe>
</div>

**Animação convertida com Swiffy**

<div class="iframe-wrap">
  <iframe src="http://swiffy.googlelabs.com/gallery/example4_swiffy.html" width="500" height="300">
  </iframe>
</div>

Surpreendente não? E olha que esse é apenas um dos exemplos disponíveis na [galeria](http://swiffy.googlelabs.com/gallery.html) dos caras. 

Mas que tal testarmos com algo “real”, porque certamente esses arquivos foram feitos sob medida pela equipe de desenvolvimento para uma conversão perfeita.

Pra isso queria escolher alguma coisa legal, quem sabe um exemplo do [Box2D](http://www.box2dflash.org/).

<div class="iframe-wrap">
  <iframe src="http://labs.zenorocha.com/conversor/swf/box2d.swf" width="500" height="276">
  </iframe>
</div>

Porém, vamos tirando o cavalinho da chuva porque o conversor só funciona com arquivos feitos em ActionScript 3 e não AS2\. Portanto, decidi montar um exemplo simples e que atendesse todos os pré-requisitos mínimos para uma boa conversão.

<div class="iframe-wrap">
  <iframe src="http://labs.zenorocha.com/conversor/swf/torpedo.swf" width="500" height="450">
  </iframe>
</div>

E…tam tam tam…

O tão esperado resultado.

<div class="iframe-wrap">
  <iframe src="http://labs.zenorocha.com/conversor/swf/torpedo.html" width="500" height="450">
  </iframe>
</div>

Longe de estar satisfatório certo?

Além disso, esse conversor da Google está mais para um conversor de SWF em WebKit do que outra coisa.

O que eu quero dizer é que mesmo se sua conversão tiver funcionado 100% (o que não foi meu caso), ainda sim você terá que abrir seu HTML5 gerado no Chrome ou no Safari. 

## Adobe Wallaby

![](http://media.tumblr.com/tumblr_lnw1arknKr1qe3219.jpg)

Demonstrada numa conferência da empresa no ano passado, a Adobe liberou para o público em março a ferramenta [Wallaby](http://labs.adobe.com/technologies/wallaby/), pioneira na conversão de arquivos no formato .fla para páginas usando HTML5.

Seu algoritmo foca em reutilizar partes de um arquivo Flash no HTML onde o código produzido possa ser editado pelo usuário. Diferentemente do Swiffy que gera um formato eficiente para as máquinas, porém torna extremamente difícil sua edição.

Confira [aqui](http://my.adobe.acrobat.com/p46197453?launcher=false&fcsContent=true&pbMode=normal) o vídeo de introdução da ferramenta feito pelo pessoal da adobe.

Agora vamos ao que interessa, nosso teste de conversão.

<span>Pra começar, outro ponto que difere a ferramenta da Google para essa é justamente o tipo de entrada da conversão. Enquanto, o **Swiffy** usa arquivos .swf, o **Wallaby** utiliza arquivos .fla.</span>

Lembrando que estes arquivos .fla devem ser gerados apenas na versão CS5 do Flash.

<span>![](http://media.tumblr.com/tumblr_lo6pe7o8FB1qe3219.jpg)</span>

Para o teste com a ferramenta da Adobe utilizei aquele mesmo jogo acima do Torpedo.

<div class="iframe-wrap">
  <iframe src="http://labs.zenorocha.com/conversor/swf/wallaby.html" width="500" height="450">
  </iframe>
</div>

É…nada muito legal certo?

Além disso, outra característica que difere ao Swiffy é quanto a plataforma. O **Wallaby** não roda no navegador, é preciso baixar o software que só está disponível para sistemas operacionais Mac ou Windows. Ou seja, nós usuários Linux nos demos mal novamente.

* [Download Wallaby para Mac](http://download.macromedia.com/pub/labs/wallaby/wallaby_p1_mac_030811.dmg) (DMG, 29.6 MB)
* [Download Wallaby para Windows](http://download.macromedia.com/pub/labs/wallaby/wallaby_p1_win_030811.exe) (EXE, 13.5 MB)

## Adobe vs Google

E quem ganha essa briga no fim das contas?

Você, eu, todos nós (principalmente os reféns do Steve Jobs).
A web cresce com aplicações mais ricas e interativas em dispositivos móveis.

Mas por favor, não caia nesse papinho sensacionalista de que agora a Google se aliou a Apple para acabar a Adobe, assim como eu [vi em alguns blogs por ai](http://appadvice.com/appnn/2011/06/google-now-helping-apple-kill-adobe-flash-once-and-for-all).

Tudo o que a Google faz tem um objetivo bem claro por trás. Nesse caso, o interesse nesse tipo de ferramenta, busca claramente levar seus anúncios do Google Adsense para atingir um maior público que utiliza dispositivos móveis, gerando assim mais $$$. Ponto final.

## Conclusão

Assim que a notícia de um conversor de Flash em HTML5 surge, todo entusiasta de HTML5 pensa: “Wow, agora sim o Flash morre de vez!”

Take it easy, brothaa.

Por mais que esses conversores mostrem exemplos incríveis, a realidade está longe de ser eficaz no âmbito comercial. Pelo menos hoje, diria até que está longe de ser no mínimo aceitável.

De qualquer forma, o primeiro passo foi dado e agora só nós resta esperar pelo desenvolvimento dessas ferramentas. Até porque não se pode julgar muito ferramentas em fase de desenvolvimento.

E você já utilizou alguma dessas ferramentas? O que acha dessa história toda?