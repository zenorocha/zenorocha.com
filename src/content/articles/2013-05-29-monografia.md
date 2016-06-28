---
title: "A performance dos principais sites do governo brasileiro"
description: "Depois de 4 anos estudando como um condenado, finalmente me formei!
E como em todo final de curso, também tive que enfrentar a tal da monografia."
slug: monografia
---

Depois de 4 anos estudando como um condenado, finalmente me formei! E como em
todo final de curso, também tive que enfrentar a tal da monografia.

Por conta de todas as viagens para palestrar, projetos open source para manter
e as tarefas diárias do trabalho para lidar, não tive muito tempo para me dedicar
a monografia do jeito que eu queria. Mesmo assim acho que o resultado ficou bem
legal e muito relevante, por isso gostaria de compartilhar com vocês.

<!-- more -->

[Colação de Grau](/img/posts/monografia.jpg)

## Tema

O tema escolhido para escrita foi performance. Eu já estava estudando tópicos
relacionados à isso para criar o guia [Como Perder Peso no Browser](http://browserdiet.com/pt/),
([leia mais](http://tableless.com.br/como-perder-peso-no-browser/#.UaYWh2RASD0)) então não foi complicado discorrer sobre o assunto. Organizar esse tema em um
fluxo legal, no tom de monografia, isso sim foi difícil.

O objetivo da monografia foi mostrar as diversas técnicas e ferramentas que auxiliam o desenvolvedor no processo de otimização da performance. Além disso, escolhi alguns sites para exemplificar as medidas de performance e a melhoria em decorrência do emprego das técnicas de otimização.

Para definir quais seriam esses 5 sites avaliados em diferentes critérios ao longo da monografia, foi consultado o [Alexa](http://www.alexa.com/topsites/countries/BR), que é o ranking das páginas mais acessadas em cada país. Após a consulta pelo país Brasil, foi realizado um filtro por aqueles que continham o domínio **.gov.br**. O resultado foram os 5 mais acessados do governo brasileiro.

Rank | Site                                                        | Ranking Alexa
---  | ---                                                         | ---
1    | [Caixa Econômica Federal](http://caixa.gov.br)              | 24
2    | [Governo do Estado de São Paulo](http://www.sp.gov.br)      | 44
3    | [Ministério da Fazenda](http://fazenda.gov.br)              | 58
4    | [Ministério da Educação](http://mec.gov.br)                 | 117
5    | [Governo do Estado do Rio de Janeiro](http://www.rj.gov.br) | 132

Depois foi testado cada um dos sites nas principais ferramentas de diagnóstico. O resultado, como você deve imaginar, foi assustador.

Rank | Site                                    | PageSpeed | YSlow | WebPageTest
---  | ---                                     | ---       | ---   | ---
1    | [caixa.gov.br](http://caixa.gov.br)     | 47        | 74    | 51
2    | [sp.gov.br](http://www.sp.gov.br)       | 66        | 75    | 67
3    | [fazenda.gov.br](http://fazenda.gov.br) | 68        | 98    | 63
4    | [mec.gov.br](http://mec.gov.br)         | 78        | 83    | 80
5    | [rj.gov.br](http://www.rj.gov.br)       | 52        | 65    | 56

## Problemas

Então, ao longo da monografia, fui destrinchando as causas desses problemas.
Não houve preocupação com relação à quantidade de dados trafegados no servidor.
**Nenhum** dos sites comprimia HTML, CSS ou JavaScript por exemplo.

Rank | Site                                    | Tamanho
---  | ---                                     | ---
1    | [caixa.gov.br](http://caixa.gov.br)     | 1008 kb
2    | [sp.gov.br](http://www.sp.gov.br)       | 992 kb
3    | [fazenda.gov.br](http://fazenda.gov.br) | 233 kb
4    | [mec.gov.br](http://mec.gov.br)         | 108 kb
5    | [rj.gov.br](http://www.rj.gov.br)       | 1600 kb

O mesmo descaso aconteceu com relação ao número de requisições HTTP realizadas.
O site do [Governo do Estado do Rio de Janeiro](http://www.rj.gov.br) realiza 21
requisições de arquivos JavaScript e 16 de arquivos CSS. O site da
[Caixa Econômica Federal](http://caixa.gov.br) realiza 82 requisições de imagens.

Rank | Site                                    | Requisições
---  | ---                                     | ---
1    | [caixa.gov.br](http://caixa.gov.br)     | 120
2    | [sp.gov.br](http://www.sp.gov.br)       | 65
3    | [fazenda.gov.br](http://fazenda.gov.br) | 37
4    | [mec.gov.br](http://mec.gov.br)         | 14
5    | [rj.gov.br](http://www.rj.gov.br)       | 87

## Conclusão

Esses são só alguns dos problemas, fique à vontade para ler o material inteiro: [Técnicas para melhoria de performance em aplicações web no lado do cliente](http://zno.io/PGbf).

Nenhum dos portais mais acessados do governo brasileiro obteve um resultado bom. A maioria nem sequer apresenta uma performance satisfatória, o que é muito preocupante pois serviços públicos deveriam ser os primeiros a oferecer qualidade no acesso de suas páginas web. Como diria David Cheriton:

> "Se é rápido e feio, as pessoas vão usá-lo e odiá-lo. Se é lento, elas não vão usá-lo."

## Sumário

1. Introdução
  1. O impacto da otimização de performance
  2. Onde deve-se focar a otimização
  3. Organização da escrita desta monografia
2. Ferramentas de diagnóstico de performance
  1. YSlow
  2. Pagespeed
  3. WebPageTest
3. Sites selecionados para exemplificar as técnicas
  1. Critério definido para a seleção de páginas
  2. Avaliações iniciais no Pagespeed, YSlow e WebPageTest
4. A anatomia de uma requisição HTTP
  1. DNS lookup
  2. Initial connection
  3. Cabeçalho keep-alive
  4. Time to first byte
  5. Content download
5. O tempo de latência na rede
6. O tamanho das requisições HTTP
  1. Compressão de código
    1. Compressão de JavaScript
    2. Compressão de CSS
    3. Compressão de HTML
  2. Compressão de imagem
    1. Compressão lossless
    2. Compressão lossy
7. O número de requisições HTTP
  1. Concatenação de código
    1. Concatenação de JavaScript
    2. Concatenação de CSS
  2. Concatenação de imagem
    1. CSS Sprites
    2. Data URIs
8. Guia colaborativo sobre performance
9. Conclusão