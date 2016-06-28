---
title: "Desabilitar autocorreção no ZSH"
description: "Desde o ano passado estive usando ZSH como shell ao invés
do Bash, nativo do Mac OSx. Graças ao oh-my-zsh consegui ganhar uma
produtividade muito boa no terminal. Só que uma coisinha sempre me irritava,
a autocorreção."
slug: desabilitar-autocorrecao-zsh
---

Desde o [ano passado](http://zenorocha.com/meu-ambiente-de-trabalho-em-7-itens/)
estive usando [ZSH](http://en.wikipedia.org/wiki/Z_shell) como shell ao invés
do [Bash](http://pt.wikipedia.org/wiki/Bash), nativo do Mac OSx. Graças ao
[oh-my-zsh](https://github.com/robbyrussell/oh-my-zsh) consegui ganhar uma
produtividade muito boa no terminal.

Só que uma coisinha sempre me irritava, a autocorreção.

<!-- more -->

```
git clone git@github.com:zenorocha/diveintohtml5.git
zsh: correct 'clone' to 'clones' [nyae]? n
```

Finalmente consegui desabilitar, por isso a dica de hoje vai para galera que
também usa [ZSH](http://en.wikipedia.org/wiki/Z_shell) e não curte essa feature.

Para desabilitar, basta adicionar a última linha no arquivo `~/.zshrc`.

```
source $ZSH/oh-my-zsh.sh
unsetopt correct_all
```