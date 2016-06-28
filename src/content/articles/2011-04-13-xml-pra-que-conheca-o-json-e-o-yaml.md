---
title: XML pra quê? Conheça o JSON e o YAML
---

Por muito tempo o XML dominou a web quando o assunto era serialização de dados. Aos poucos, outras linguagens foram se popularizando e conquistando desenvolvedores por conta das fraquezas desse padrão recomendado pela W3C.

Enquanto isso, poderosas redes sociais, como o Twitter, foram adotando linguagens como o JSON ao fornecer dados através de suas APIs. E com isso, tomando grandes proporções no mercado.

<!-- more -->

Vamos entender sobre o que cada uma se trata, antes de entrarmos mais a fundo no assunto.

* **JSON** (*JavaScript Object Notation*) é uma estrutura de dados baseada em javascript. Apesar de estar na &#8220;moda&#8221; agora, não é uma tecnologia nova, faz parte do javascript puro e não precisa de nenhum script pra trabalhar.
* **YAML** acrônimo recursivo para *YAML Ain&#8217;t Markup Language*. No início do seu desenvolvimento significava *Yet Another Markup Language* (Mais outra linguagem de marcação) para distinguir seu propósito centrado em dados no lugar de documentos marcados. Foi projetada para &#8220;ser legível aos seres-humanos&#8221;.

Vejamos, então, um exemplo de uma estrutura de dados usando **JSON**.

```
{
  "nome": "zeno rocha - blog",
  "url": "http://zenorocha.com",
  "posts": [
    {
      "titulo": "do it! - as simple as you can",
      "data": "13/04/2011"
    },
    {
      "titulo": "hello world",
      "data": "12/04/2011"
    }
  ]
}
```

A mesma estrutura utilizando **YAML**:

```
blog:
  nome: "zeno rocha - blog"
  url: "http://zenorocha.com"
  post:
    titulo: "do it! - as simple as you can"
    data: "13/04/2011"
  post:
    titulo: "hello world"
    data: "12/04/2011"
```

E agora compare-as com o formato **XML**:

```
<?xml version="1.0" encoding="utf-8"?>
<blog>
  <nome>zeno rocha - blog</nome>
  <url>http://blog.zenorocha.com</url>
  <post>
    <titulo>do it! - as simple as you can</titulo>
    <data>13/04/2011</data>
  </post>
  <post>
    <titulo>hello world</titulo>
    <data>12/04/2011</data>
  </post>
</blog>
```

Se você está acostumado com linguagens de marcação como HTML pode até discordar de mim, mas em termos de leitura o XML é muito menos intuitivo do que as outras linguagens apresentadas.

Além disso, a estrutura de dados é mais simples de trabalhar e o tempo de execução de um script lendo dados em JSON é dezenas de vezes mais rápido do que ler um conteúdo XML.

As principais linguagens de programação server side tem suporte pra escrever dados em JSON. Mais do que isso, existem métodos nativos para decodificação desse padrão.

O JSON pode substituir sim o XML, e faz isso muito bem na hora de trabalhar com respostas em AJAX por exemplo. Entretanto, seria muita pretensão achar que JSON irá desbancar um formato tão estável em tão pouco tempo.
