---
title: Salve a web, por favor
image: http://media.tumblr.com/tumblr_lt1x90OrsW1qe3219.jpg
---

Sempre que posso, gosto de divulgar iniciativas que procurem tornar a web um lugar mais legal. Foi assim [quando escrevi sobre o humans.txt](/humans-txt-because-we-are-people-not-machines) e está sendo assim agora.

Por isso eu vim falar sobre o projeto [“Salve a web, por favor”](http://salveaweb.com/) ([salveaweb.com](http://salveaweb.com/)) idealizado pela galera da [Globo.com](http://www.globo.com/) já faz um bom tempo, mas que muita gente ainda não conhece.

Como sabemos, navegadores velhos e desatualizados não evoluem junto com os padrões web e são cheios de bugs, afetando a qualidade dos sites e fazendo com que os desenvolvedores gastem mais tempo para adaptar os sites a esses browsers obsoletos.

[“Salve a web, por favor”](http://salveaweb.com/) é um esforço para eliminar esses navegadores.

<!-- more -->

## Como funciona?

Se o usuário estiver usando um browser antigo, uma mensagem amigável vai aparecer pedindo para atualizar o browser.

## Como usar?

Basta incluir esse script antes de fechar a tag body no seu HTML.

```
<script defer src="http://sawpf.com/1.0.js"></script>
```

## Por exemplo

```
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8" />
  <title>Título</title>
</head>
<body>
  <h1>Meu site</h1>

  ... todo o html do seu site ...

  <script defer src="http://sawpf.com/1.0.js"></script>
</body>
</html>
```

## Putz, mais um script pra eu carregar =/

E daí?

Como diria a [turma do balão mágico: “Depende de nós”](http://www.youtube.com/watch?v=cqPmPesjWTE).

Já que temos falado tanto sobre HTML5 por aqui é essencial que, nós desenvolvedores, incentivamos nossos usuários a utilizar browsers mais modernos.

E outra, todos os scripts e imagens utilizados são hospedados na [Globo.com](http://www.globo.com/) usando a melhor rede de distribuição de conteúdo do Brasil.

E aí, vamos construir juntos uma web melhor?