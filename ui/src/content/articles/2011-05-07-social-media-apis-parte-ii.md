---
title: Social Media APIs - Parte II
---

Dando continuidade a série sobre as APIs das redes sociais, vamos conhecer hoje o que os serviços do [Foursquare](https://foursquare.com) e do [Twitter](http://twitter.com/) tem a nos oferecer.

<!-- more -->

## Foursquare API

Pessoalmente, aposto muito em redes sociais baseadas em geolocalização, elas tem se tornado cada vez mais realidade, e não modismo. [Em nível internacional isso é mais que uma realidade](http://playfoursquare.s3.amazonaws.com/infographic/foursquare_2010.png), já aqui no Brasil o gradual barateamento dos aparelhos celulares e sua conexão com a internet, tem levado mais e mais pessoas a acessarem a internet pelo celular, possibilitando assim a utilização de um serviço como esse.

Mas vamos deixar pra outro post minha opinião sobre mobilidade e redes sociais que usam geolocalização, vamos focar na API que o maior serviço do mercado nessa área oferece pra gente.

Atualmente a API do Foursquare encontra-se na sua segunda versão, focando na velocidade e facilidade na obtenção dos dados. Recentemente eles abandonaram o suporte ao [XML](/xml-pra-que-conheca-o-json-e-o-yaml) para tornar seu servidor mais eficiente, e passaram a usar o [OAuth2](http://blogs.sitepoint.com/oauth-explained-with-foursquar/) para tornar a conexão com o Foursquare mais fácil e segura quando feita por meio de aplicativos de terceiros, além de adicionar recursos muito solicitados como histórico/popularidade de locais.

Dessa série sobre as APIs de redes sociais, essa é a única que eu ainda não utilizei comercialmente em algum projeto, mas como todo bom serviço, percebe-se que eles também capricharam na [documentação](https://developer.foursquare.com/docs/index_docs.html). 

Segundo eles, a nova API dá ao desenvolvedor acesso a todos os dados usados pelos aplicativos móveis da rede social. Além disso, permite que o profissional integre checkins aos aplicativos, construa ferramentas para ajudar o usuário a utilizar ou a visualizar seu histórico, entre outras coisas.

Por exemplo, você pode obter diversas informações sobre o usuário como badges, checkins e amigos. Ou se preferir pode buscar as informações das chamadas _Venues_, buscando por exemplo, as pessoas que estão em determinado local nesse instante. Enfim, dá uma olhada lá que eu tenho certeza que vai achar a funcionalidade que mais se adequada a sua necessidade.

Destaca-se também uma interessante interface chamada [Explorer](https://developer.foursquare.com/docs/explore.html), onde você pode testar todas as requisições direto do site deles. E será com ela que vamos exemplificar a obtenção de informações básicas de um usuário.

Exemplo: https://api.foursquare.com/v2/users/self

```
{
  user: {
    id: "1514606",
    firstName: "Zeno",
    lastName: "Rocha",
    gender: "male",
    homeCity: "Rio de Janeiro, RJ",
    contact: {
      phone: "2181089727",
      email: "zno.rocha@gmail.com",
      twitter: "zenorocha"
    },
    badges: {
      count: 3
    }
  }
}
```

**OBS:** Toda e qualquer requisição necessita de um número de token para ser autorizada.

_Mais informações:_ [](https://developer.foursquare.com/)[https://developer.foursquare.com](https://developer.foursquare.com)

_Veja também:_ [API](http://mashable.com/2010/08/19/facebook-places-api/) do **[Facebook Places](http://www.facebook.com/places/)**, serviço que vem conquistando uma boa fatia desse mercado.

## Twitter API

O Twitter é uma aplicação que dispensa qualquer discurso, portanto vamos logo ao que interessa. O serviço põe à nossa disposição três APIs diferente. Uma chamada de <span>“Streaming API” e as outras duas </span><span>são “REST APIs”, ou seja, </span><span>funcionam por HTTP onde você acessa a partir de URLs que devolvem conteúdos em formatos distintos.</span><span> Bem similar a maioria que vimos até agora. As aplicações baseadas nisso poderão usar as três API distintas, combinando-as para realizar seus objetivos.</span>

O uso das APIs do Twitter é limitado, por isso suas aplicações não podem se conectar à um número indeterminado de vezes para solicitar qualquer coisa. Caso queira continuar na “whitelist”, terá que seguir os seguintes limites técnicos:

*   <span>**Mensagem Direta**: 250 por dia.</span>
*   <span>**Atualizações**: 1.000 por dia. O limite diário de atualização é dividido em intervalos de meia hora. Retweets são contados como atualizações.</span>
*   <span>**Seguindo**: O limite técnico diário de seguir é 1.000 contas por dia. T</span>enha em mente que este é um limite técnico, existem regras adicionais que proíbem comportamento excessivo. 

No entanto, as solicitações às vezes se contam dependendo do IP do sistema que conecta com Twitter e às vezes dependendo da conta de usuário que está solicitando um recurso, por isso estes limites podem variar entre cada usuário. Há também outros limites de uso do API, baseados nos limites de paginação das buscas que se possam realizar, ou seja, que limitam os resultados de busca de status de um usuário ou as referências de uma palavra-chave nos post públicos.

Deixando de lado os limitações, vamos a um exemplo simples de acesso de dados da API.

Exemplo: http://api.twitter.com/1/users/show.json?screen_name=nomedousuario

```
{
   "profile_background_color":"212629",
   "description":"web developer",
   "screen_name":"zenorocha",
   "geo_enabled":true,
   "profile_background_image_url":"http://goo.gl/oaies",
   "location":"Rio | Brasil",
   "statuses_count":3488,
   "followers_count":15311,
   "profile_link_color":"141617",
   "name":"Zeno Rocha",
   "profile_image_url":"http://goo.gl/wCIcX"
}
```

E isso daqui é só trecinho das informações que eles lhe fornecem com essa chamada específica, já pensou na quantidade de aplicações iradas que dá pra fazer com elas?

_Mais informações:_ [](http://dev.twitter.com/doc)[http://dev.twitter.com/doc](http://dev.twitter.com/doc)

Em breve vou abordar as APIs do Youtube e Flickr, fique ligado!