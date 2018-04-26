---
title: Social Media APIs - Parte I
---

A fim de promover uma melhor experiência do usuário com a aplicação, muitos sites tem integrado funcionalidades de plataformas externas à sua aplicação através das famosas **[APIs](http://pt.wikipedia.org/wiki/API)**.

Essa pequena série, dividida em três posts, pretende dar um rápido overview sobre as APIs das principais redes sociais.

Pra começar, vamos falar um pouco sobre as APIs do **[Facebook](http://facebook.com)** e **[Vimeo](http://vimeo.com)**. E depois sobre as do **[Foursquare](http://foursquare.com)**, **[Twitter](http://twitter.com)**, **[Youtube](http://youtube.com) **e **[Flickr](http://flickr.com)**.

<!-- more -->

## [Facebook API](http://developers.facebook.com)

A chamada Facebook Platform permite que você construa aplicativos para o próprio Facebook ou para Web, oferecendo uma coleção de APIs e SDKs.

* **[Social Plugins](http://developers.facebook.com/docs/plugins/)** - Um conjunto de plugins que facilitam a incorporação de elementos do Facebook ao seu site com um simples *copy & paste*. Um bom exemplo disso é o famoso Like Button, extremamente difundido por conta da facilidade de uso através de um `<iframe>`.

* **[Graph API](http://developers.facebook.com/docs/reference/api/)** - É o filé da Facebook Plataform, usado para ler e gravar dados dos objetos (Pessoa, Foto, Evento, Página, etc) fornecidos pelo site.

* **[Authentication](http://developers.facebook.com/docs/authentication/)** - Permite incorporar à sua aplicação uma autenticação de login através da conta do próprio Facebook. Interage com a Graph API assim que a autenticação é concedida, oferecendo ao site todos os dados do usuário.

Exemplo: https://graph.facebook.com/zenorocha

```
{
  "id": "1021864713",
  "name": "Zeno Rocha",
  "link": "http://www.facebook.com/zenorocha",
  "username": "zenorocha",
  "gender": "male",
  "locale": "en_GB"
}
```

Para exemplificar, usamos a Graph API para obter as informações básicas de um usuário. O retorno é um JSON com as informações do usuário, depois é só manipular de acordo com o seu interesse.

Além disso é possível encontrar na Facebook Plataform o SDK que mais se adequada a sua linguagem preferida, são eles: JavaScript SDK, iOS SDK (iPhone & iPad), Android SDK e PHP SDK.

*Mais informações: http://developers.facebook.com*

## [Vimeo API](http://vimeo.com/api)

Este serviço de compartilhamentos de vídeos é outro que possui uma ótima documentação de suas APIs. Ao todo são disponibilizadas quatro “modalidades”, são elas:

* **[Simple API](http://vimeo.com/api/docs/simple-api)** - É a interface mais simples de acesso aos dados públicos do Vimeo que são obtidos através de JSON, XML ou PHP.

* **[Advanced API](http://vimeo.com/api/docs/advanced-api)** - Como o próprio nome já diz, aborda métodos mais avançados e para tais consultas é necessário registrar uma application.

* **[oEmbed](http://vimeo.com/api/docs/oEmbed)** - É um padrão aberto para *embedar *fotos e vídeos. Você pode usar a url de um vídeo qualquer do Vimeo e gerar esse código `<oembed>` facilmente.

* **[Moogaloop](http://vimeo.com/api/docs/moogaloop)** - É o estranho nome do video player do Vimeo, nessa API é possível configurar o player com as linguagens Javascript ou Actionscript 3.

Exemplo: http://vimeo.com/api/v2/zenorocha/info.json

```
{
  "id":"6796565",
  "display_name":"Zeno Rocha",
  "location":"Rio de Janeiro",
  "url":"http://zenorocha.com",
  "profile_url":"http://vimeo.com/zenorocha",
  "total_videos_liked":3
}
```

No nosso exemplo, utilizamos a Simple API, numa chamada que consiste em 3 atributos, são eles: *username*, *request* e *output*:

```
http://vimeo.com/api/v2/username/request.output
```

Ao todo são 3 opções de *output*, JSON, PHP e XML. Já o número de requests são muitos e podem ser encontrados com mais detalhes no site.

*Mais informações: http://vimeo.com/api*
