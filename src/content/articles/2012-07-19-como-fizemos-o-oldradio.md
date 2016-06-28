---
title: Como fizemos o oldRadio?
image: http://media.tumblr.com/tumblr_m6wxcmvAt21qe3219.jpg
---

<!-- <p class="demo-download"><a href="https://developer.mozilla.org/pt-BR/demos/detail/old-radio/launch" target="_blank"><img class="botao" src="http://media.tumblr.com/tumblr_lk325lvHwF1qe3219.png"/></a> <a href="https://github.com/HTML5-Pro/oldRadio/" target="_blank"><img class="botao" src="http://media.tumblr.com/tumblr_lk325u7HMG1qe3219.png"/></a> -->

Nos dois últimos eventos que nós (Zeno Rocha e Bernard de Luna) estivemos presentes (TDC 2012 em São Paulo e Front in BH em Minas Gerais), fizemos questão de apresentar nosso primeiro experimento juntos, o [Old Radio](https://developer.mozilla.org/pt-BR/demos/detail/old-radio/launch), que figura hoje na galeria [Mozilla Demo Studios](https://developer.mozilla.org/pt-BR/demos/detail/old-radio/launch).

Infelizmente o outro criador Zanoni Miranda não pode estar presente, mas sua presença na equipe foi importantíssima e sempre fizemos questão de citá-lo.

Muitas pessoas nos abordaram com perguntas sobre como fizemos funcionalidade X ou Y, por isso hoje vamos passar pela produção desde o CSS até o JavaScript.

<!-- more -->

![](http://media.tumblr.com/tumblr_m6wx0uXPdG1qe3219.jpg)

## Marcação e Estilização

Para criar a marcação HTML do Old Radio, o Bernard De Luna seguiu o mesmo conceito de modularização. Ou seja, seguindo heranças de profundidades entre os itens, estilização baseada em classes e não em heranças, e por fim, nome de classes focadas nas funcionalidades reais. A ideia foi seguir a mesma estratégia usada para a criação do [Homer Simpsons](https://developer.mozilla.org/pt-BR/demosdetail/pure-css3-homer). Para ilustrar isso, segue o código de como foi feito a chave de desligar e ligar o rádio:

```
<div class="power">
  <span class="on-off active">
    <a href="#" title="on / off"><span>on / off</span></a>
  </span>
</div>
```

Trabalhar com uma boa hierarquia nos dá a capacidade de usar um conceito nativo do DOM que é a máscara. Ou seja, podemos ativar ou não através do “position” o limite da largura do pai em relação ao filho. Isso foi amplamente utilizado no Old Radio, principalmente quando chegamos ao visor.

A partir daí seguimos um outro conceito que poucos ainda utilizam quando se trata de CSS3, a combinação do RGBa. Assim fizemos algumas aplicações, mostradas abaixo:

![](http://media.tumblr.com/tumblr_m7f6uqMHa21qe3219.jpg)

O degradê que utilizamos para fazer o Efeito de Dourado foi o mesmo utilizado para criar o conceito de profundidade entre o case do rádio, ou seja, sempre pegando a cor marrom, amarela, preta, o que for e escurecendo em degradê. É uma ótima utilização do RGBa e ainda tem uma outra vantagem, que não foi utilizada nesse projeto, mas que vale a dica: as animações CSS funcionam para “background-color”, mas não imagem, pelo degradê renderizar como se fosse “background-image”, ele acaba não sendo animado. A partir do momento que o degradê inclui opacidade, você pode alterar apenas as cores, funcionando o transition e animation. Legal né?

O que trás a ideia de realidade para o projeto é puramente percepção, assim sendo, foram feitas algumas pesquisas referenciais de um rádio velho, ajudou muito ma hora de achar o tom das cores e estilo que seria desenhado. Confiram algumas das referências usadas:

![](http://media.tumblr.com/tumblr_m7f6wvX31O1qe3219.jpg)

Mas sem dúvida a que norteou todo o projeto, com cores, estilo foi essa imagem abaixo:

![](http://media.tumblr.com/tumblr_m7f6xz24WI1qe3219.jpg)

Através dessa referência, pudemos pegar o tom de cor da madeira e do dourado. Comparando com o Old Radio, fica bem claro a importância dessa referência pela palheta que indica a estação, o STEREO e o estilo do Tunner. Dessa referência fomos direto para o código, sem nenhum protótipo, nem layout em PSD.

Vale lembrar que o Old Radio surgiu logo após a ideia do Bernard De Luna de ter criado o Homer Simpsons só com CSS, para quem não conhece, ficou assim:

[![](http://media.tumblr.com/tumblr_m7f713gTC71qe3219.jpg)](https://developer.mozilla.org/pt-BR/demosdetail/pure-css3-homer)

Se o De Luna, Bernard, Bê, rei, absoluto, lindo, desculpem, me emocionei&#8230;, bom, se ele seguisse a risca o modelo de estilização utilizado no Homer, muito provavelmente o Old Radio ficasse assim:

![](http://media.tumblr.com/tumblr_m7f71xL0q31qe3219.jpg)

Ficaria bonito, mas sem peso, sem realismo, novamente o RGBa aplicado em "box-shadow", "gradient", "text-shadow", "border" e "background" foram responsáveis pelo tom de profundidade, textura e realismo esperado e atingido no Old Radio.

Por fim, vale explicar duas texturas utilizadas no rádio que fogem um pouco da aplicação normal, através do "repeating-linear-gradient".

## Textura de madeira

Para fazer a textura de madeira, utilizamos a seguinte expressão:

```
repeating-linear-gradient(-90deg, rgba(0,0,0,0.1), rgba(0,0,0,0.1) 1px, transparent 3px);
```

Ainda é uma renderização bastante bugada em browsers, mas mesmo com pequenas distorções ou o que renderizar, daria um ruído no marrom, mantendo a impressão da madeira desejada.

![](http://media.tumblr.com/tumblr_m7f7lw4bwO1qe3219.jpg)

## Estações da rádio

As estações dentre todos os objetos e dificuldades para se desenhar o Rádio foi a que mais me satisfez, pois não fazia ideia como conseguir atingir os "palitos" da frequência, o CSS me mostrou estar mais adiantado do que eu imaginava e consegui fazer isso com uma única marcação HTML e utilizando o "linear-gradient" combinado com o "background-size".

```
background-image: linear-gradient(0, rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(0, rgba(255,255,255,.3) 1px, transparent 1px);
background-size: 25px 50px, 5px 5px;
background-position:-24px bottom, -24px bottom;
background-repeat: repeat-x;
```

Vamos explicar rapidamente:

```
linear-gradient(0, rgba(255,255,255,1) 1px, transparent 1px)
```

Estou usando degradê do branco para o transparente (sendo 1px para o branco e 1px para o transparente).

```
linear-gradient(0, rgba(255,255,255,.3) 1px, transparent 1px)
```

Estou usando outro degradê do branco com 30% de transparencia para o transparente (sendo 1px para o branco e 1px para o transparente).

Agora vem a mágica, eu aplico "background-size" para manipular o tamanho desses degradês, dizendo que o primeiro ocupa 25px de largura e 50px de altura, enquanto o segundo ocupa 5px e 5px. O interessante é a conta feita, pois assim eu garanto que a cada 5 palitos brancos de 30% apareça 1 palito branco 100%. Reparem no desenho:

![](http://media.tumblr.com/tumblr_m7f74aoSDw1qe3219.jpg)

Por fim, desloquei os degradês 24px para esquerda para poder marcar o começo das estações com o primeiro palito, e alinhei verticalmente "bottom". Finalizando com um "repeat-x" para que os traços se repitam e temos essa lindeza aí:

![](http://media.tumblr.com/tumblr_m7f75yc6pz1qe3219.jpg)

Só faltava fazê-lo funcionar não é verdade? Sente como fizemos isso&#8230;

## HTML5 Audio API

Para colocar o rádio para tocar, nada de Flash! Usamos a API de áudio do HTML5. A lista de músicas foi criada dinâmicamente e então utilizamos as funções da API para manipularmos os eventos de play/pause e aumentar/diminuir o volume do som.

## jQuery vs YUI

No início do projeto optamos pelo jQuery para manipular elementos do DOM de maneira mais simples, porém os recentes estudos que o Zeno estava fazendo em cima do YUI no dia anterior ao lançamento fizeram com que, em uma manhã de sábado na qual tinha viajado para São Paulo, lhe desse a louca de reescrever tudo usando YUI.

Apesar de volumosa, realizar essa mudança não foi dramático. Um guia em especial o ajudou nessa missão: [jQuery - YUI3 Rosseta Stone](http://www.jsrosettastone.com/).

Vale ressaltar que essa decisão não teve nada a ver com algum benefício que o YUI tem sobre o jQuery (que por sinal são muitos), até porque o único módulo usado para isso foi o "node" do YUI que realiza as mesmas coisas que o jQuery. Foi apenas curiosidade.

## Konami Code

Uma das brincadeiras que resolvemos aplicar foi uma surpresa para aqueles que fizessem o famoso Konami Code, macete conhecido dos nerds nos jogos antigos para arcade.

Depois de ter reescrito tudo em YUI, Zeno se deparou que ainda faltava uma coisa, o plugin de jQuery para ativar o Konami Code. Por sorte reescrever a lógica do plugin foi igualmente simples, até porque basta detectar uma sequência de caracteres. Dias depois do lançamento veio uma [contribuição legal](https://github.com/html5-pro/oldRadio/pull/3) de Djalma Araújo movendo para um módulo de YUI toda a lógica do Konami Code.

Para ativar, digite:

```
cima + cima + baixo + baixo + esquerda + direita + esquerda + direita + b + a
```

E voilà!

![](http://media.tumblr.com/tumblr_m7f7t7to9w1qe3219.jpg)

## Cálculos e mais cálculos

Uma dos principais desafios foram as questões matemáticas que envolvem a lógica do Player. Isso muitas vezes pode passar despercebido para as pessoas, mas pare para passar como você faria para aumentar e diminuir o volume do chiado à medida que o Tunner é rotacionado?

Para essa e outras questões, Zanoni utilizou vários conceitos matemáticos.

Basicamente o processo de rotação do tunner usa a lógica de _"Pressiona" -> "Arrasta" -> "Solta"_, onde no evento de _"Pressiona"_ guardamos o valor que servirá de referência para a alteração do atributo que queremos modificar, nesse caso o ângulo do tunner. No _"Arrasta"_ é onde iremos obter a diferença entre o valor inicial que recebemos no _"Pressiona"_ e o obtido agora, e então faremos uma alteração baseada nessa diferença. E por fim, no _"Solta"_ é onde finalizaremos esse processo.

![](http://media.tumblr.com/tumblr_m7f7vi8C691qe3219.jpg)

O "Pressiona" é um evento para detectar quando pressionarem o mouse sobre o tunner. Quando ele for disparado, o ângulo entre a posição do mouse e o centro do botão do tunner é calculado:

```
angulo = Math.atan2( tunerCenterY - MouseY , tunerCenterX - MouseX );
```

A função atan2 retorna um ângulo em radianos de um vetor dado os valores dos componentes y e x desse vetor.

![](http://media.tumblr.com/tumblr_m7f7wcZ4wE1qe3219.jpg)

Mas esse ângulo é retornado em radianos, para converter de radianos em graus, usamos:

```
anguloGraus =  anguloRadianos * ( 180/Math.PI );
```

Então guardamos esse ângulo para ser a referência do valor inicial da sequência
*"Pressiona" -> "Arrasta" -> "Solta".*

O *"Arrasta"* é um evento que será chamado se o mouse mover sobre o tunner, quando esse evento for disparado iremos calcular o ângulo entre a posição do mouse e o centro do botão do tunner novamente, e veremos a diferença entre o ângulo inicial obtido no "pressiona" e o obtido agora.

A partir desse valor podemos rotacionar o tunner e também alterar a estação da rádio, movendo o ponteiro das estações.

![](http://media.tumblr.com/tumblr_m7f80zCZpS1qe3219.jpg)

No caso da troca de estações queríamos que tivesse um efeito mais realista, para isso teria um ruído que apareceria e sumiria gradativamente entre uma estação e outra, para fazer esse efeito teríamos que obter 3 valores, o número da estação atual, o volume dessa estação e o volume do chiado. Esse valores teriam que ser calculados baseados na posição do ponteiro das estações.

Como fazemos isso?

Primeiro precisamos calcular a estação que está tocando no momento, usando a fórmula:

```
numeroCanal = Math.round( ( posicaoPonteiro / larguraDoMostrador ) * ( numeroDeCanais - 1 ) );
```

Explicando melhor:

```
( posicaoPonteiro / larguraDoMostrador )
```

Serve para saber a posição do ponteiro em relação ao tamanho do mostrador, ou seja em que porcentagem o ponteiro se encontra.

```
( numeroDeCanais - 1 )
```

Porque o primeiro canal é 0.

```
Math.round
```

É a função que arredonda um número para o inteiro mais próximo ( ex: Math.round(2.3) = 2 ,Math.round(2.8) = 3 ), isso porque o número do canal é um inteiro e não um float.

![](http://media.tumblr.com/tumblr_m7f823B33Y1qe3219.jpg)

Agora queremos saber o valor do volume do chiado e do som da estação, para obter a trasição gradativa usamos a função do coseno (Math.cos), a função do coseno gera uma ondulação que é exatamente o que queremos:

```
Valor =  Math.cos( ( posicaoPonteiro / larguraDoMostrador ) * ( numeroDeCanais - 1 ) * Math.PI * 2 );
```

Explicando melhor:

```
( posicaoPonteiro / larguraDoMostrador ) * ( numeroDeCanais - 1 )
```

Tem o mesmo objetivo da fórmula anterior, porém agora sem arredondar.

```
Math.PI * 2
```

Multiplicamos o o valor por 2*Pi porque a Math.cos recebe como parâmetro um ângulo em radiano e a função coseno forma um ciclo a cada 2*Pi. Como nós queremos que a função gere um ciclo para cada canal temos que multiplicar por 2*PI

Esse Valor é a posição da ondulação baseado nos nossos canais, mas esse valor varia entre -1 e 1, como não existe volume negativo temos que fazer um ajuste:

```
volumeCanal = Valor * 0.5 + 0.5;
```

Com essa conta, o resultado varia de 0 a 1 e podemos usar como o volume do canal.

E volume do ruido é bem simples é o inverso do volume do canal. Por exemplo, se o canal está tocando à 90% de som, você completa o restante com ruído, ou seja 10%, se o canal esta tocando à 30%, o ruído vai estar à 70%.

```
volumeRuido = 1 - volumeCanal;
```

![](http://media.tumblr.com/tumblr_m7f83d4E9o1qe3219.jpg)

## Concluindo

Esse projeto só está começando, a ideia é evoluir ele ainda mais utilizando recursos como Node.JS e integração com serviços como Twitter e Soundcloud. Tudo isso por um simples motivo: diversão.
