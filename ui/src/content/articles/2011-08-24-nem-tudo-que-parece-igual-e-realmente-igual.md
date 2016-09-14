---
title: Nem tudo que parece igual é realmente igual...
image: http://media.tumblr.com/tumblr_lq9if2Mh5J1qe3219.jpg
---

Por ser uma linguagem fracamente tipada, uma coisa que confunde muita gente que está começando com Javascript são os operadores de comparação.

<!-- more -->

```
var zero = "0";

if (zero == 0) {
  // será que entra aqui?
}

if (zero === 0) {
  // ou aqui?
}
```

O símbolo "igual" possui três papéis diferentes nesse exemplo.

Primeiramente, ele é responsável por uma atribuição de valor na variável zero.

```
var zero = "0";
```

Até aqui nenhuma novidade, continua parecido com a maioria das outras linguagens.

Contudo, quando o assunto é comparação precisamos ter um olhar mais atento, pois podemos ter uma comparação comum (==) ou uma comparação estrita (===).

```
if (zero == 0) {
  // será que entra aqui?
  // entra sim xD
}
```

O que acontece aqui é que, como a variável *zero* recebeu um valor do tipo string, antes de executar a comparação propriamente dita, será preciso uma conversão para um tipo numérico, por isso o resultado da comparação é verdadeiro.

```
if (zero === 0) {
  // ou será que entra aqui?
  // entra não :(
}
```

Agora se a comparação for estrita, nenhuma conversão será feita sem que você mesmo tenha definido isso, portanto o resultado da comparação é falso já que uma string não é igual a um valor numérico.

Na dúvida, saiba que:

* Duas strings são estritamente iguais quando possuem a mesma sequência de caracteres em suas respectivas posições e o mesmo tamanho.
* Dois números são estritamente iguais quando são numericamente iguais (_ohh! sério mesmo?_). Já o Nan não é igual a nada, nem mesmo igual ao próprio Nan. Zeros positivos e negativos são iguais.
* Dois booleanos são estritamente iguais se ambos são somente verdadeiros ou se ambos são somente falsos (_nossa, que novidade_).
* Dois objetos são estritamente iguais quando ambos se referenciam ao mesmo objeto.
* Tipos nulos e indefinidos são iguais, porém não estritamente.

## Operador de igualdade

![](http://media.tumblr.com/tumblr_lq9ktrs14y1qe3219.jpg)

## Operador de igualdade estrita

![](http://media.tumblr.com/tumblr_lq9ktg6aXi1qe3219.jpg)

## Conclusão

Pelo sim, pelo não, use sempre o operador de comparação estrita. Se uma conversão de tipo precisa ser feita, deixe isso explícito #ficadica.

## Referências

* [Javascript Garden](http://bonsaiden.github.com/JavaScript-Garden/)
* [Mozilla Developer Network (MDN)](https://developer.mozilla.org/en/JavaScript)