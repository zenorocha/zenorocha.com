---
title: CSS !important - O melhor amigo do desenvolvedor hard-coded
slug: css-important
---

Você está lá todo feliz codificando seu [CSS](http://pt.wikipedia.org/wiki/Cascading_Style_Sheets), quando de repente aquele parágrafo que era para estar vermelho, está verde!

Você examina sua folha de estilo e lá está declarado direitinho.

```
p { color: red; }
```

Percorre o CSS inteiro e verifica que essa regra é a última que você escreveu e também é a última a ser importada no documento.

Abre o [firebug](https://addons.mozilla.org/pt-BR/firefox/addon/firebug/) e não consegue entender o porquê daquilo estar acontecendo.

<!-- more -->

Corre para o código HTML e vê que não há nenhum estilo inline declarado no parágrafo.

Ah! Com certeza deve ser o maldito [cache](http://pt.wikipedia.org/wiki/Cache) que você esqueceu de apagar! Limpa ele, mas mesmo assim o parágrafo insiste em continuar na cor verde. 

O quê fazer? Se você é um pouquinho mais experiente com CSS vai partir para ignorância e utilizar a **[técnica&#160;!important](http://www.maujor.com/blog/2006/08/18/declaracao-com-important/)**.

```
p { color: red !important; }
```

E voilà, funcionou! E se funcionou está tudo bem, certo? Errado!

Primeiro pare e pense na sigla CSS, Cascade Style Sheet.

O que exatamente significa uma folha de estilo **[funcionar em cascata](http://www.vanseodesign.com/css/css-specificity-inheritance-cascaade/)**?

Significa que existem prioridades para aplicação de cada regra de estilo. Existe uma hierarquia que define qual propriedade deve ser aplicada em qual elemento. E para quem trabalha com CSS é preciso conhecer muito bem esses conceitos que envolvem o chamado &#8220;efeito cascata&#8221;.

Uma declaração de estilo com&#160;!important ignora qualquer hierarquia e prevalece sobre todas as demais, é a de mais alta prioridade. 

Logo, é fácil prever que o uso excessivo dessa técnica pode causar muita dor de cabeça no futuro. Não estou dizendo que é ruim utilizar o&#160;!important, na verdade pode ser útil em diversas situações, o problema é que muitos desenvolvedores de forma preguiçosa ou simplesmente desconhecendo a precedência dos seletores, acabam por escolher esse caminho mais curto na correria dos prazos, mas que depois dificultam e muito a manutenção do código.
