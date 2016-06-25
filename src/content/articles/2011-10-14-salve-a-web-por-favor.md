---
title: Salve a web, por favor
oldUrl: http://blog.zenorocha.com/post/11433808545/salve-a-web-por-favor
---

<p><img src="http://media.tumblr.com/tumblr_lt1x90OrsW1qe3219.jpg"/></p>

<p>Sempre que posso, gosto de divulgar iniciativas que procurem tornar a web um lugar mais legal. Foi assim <a href="/humans-txt-because-we-are-people-not-machines" target="_blank">quando escrevi sobre o humans.txt</a> e está sendo assim agora.</p>

<p>Por isso eu vim falar sobre o projeto <a href="http://salveaweb.com/" target="_blank">&#8220;Salve a web, por favor&#8221;</a> (<a href="http://salveaweb.com/" target="_blank">salveaweb.com</a>) idealizado pela galera da <a href="http://www.globo.com/" target="_blank">Globo.com</a> já faz um bom tempo, mas que muita gente ainda não conhece.</p>

<p>Como sabemos, navegadores velhos e desatualizados não evoluem junto com os padrões  web e são cheios de bugs, afetando a qualidade dos sites e fazendo com  que os desenvolvedores gastem mais tempo para adaptar os sites a esses  browsers obsoletos.</p>

<p><a href="http://salveaweb.com/" target="_blank">&#8220;Salve a web, por favor&#8221;</a> é um esforço para eliminar esses navegadores.</p>

<!-- more -->

<p><span> </span></p>

<hr><h2>Como funciona?</h2>

<p>Se o usuário estiver usando um browser antigo, uma mensagem amigável vai aparecer pedindo para atualizar o browser.</p>

<hr><h2>Como usar?</h2>

<p>Basta incluir esse script antes de fechar a tag body no seu HTML.</p>

<pre class="prettyprint lang-html"><code>&lt;script defer src="http://sawpf.com/1.0.js"&gt;&lt;/script&gt;</code></pre>

<hr><h2>Por exemplo</h2>

<pre class="prettyprint lang-html"><code>&lt;!DOCTYPE html&gt;

&lt;html lang="pt-BR"&gt;

  &lt;head&gt;

    &lt;meta charset="utf-8" /&gt;

    &lt;title&gt;Título&lt;/title&gt;

  &lt;/head&gt;

  &lt;body&gt;

    &lt;h1&gt;Meu site&lt;/h1&gt;

    ... todo o html do seu site ...

    &lt;script defer src="http://sawpf.com/1.0.js"&gt;&lt;/script&gt;

  &lt;/body&gt;

&lt;/html&gt;</code></pre>

<hr><h2>Putz, mais um script pra eu carregar =/</h2>

<p>E daí?</p>

<p>Como diria a <a href="http://www.youtube.com/watch?v=cqPmPesjWTE" target="_blank">turma do balão mágico: &#8220;Depende de nós&#8221;</a>.</p>

<p>Já que temos falado tanto sobre HTML5 por aqui é essencial que, nós  desenvolvedores, incentivamos nossos usuários a utilizar browsers mais  modernos.</p>

<p>E outra, todos os scripts e imagens utilizados são hospedados na <a href="http://www.globo.com/" target="_blank">Globo.com</a> usando a melhor rede de distribuição de conteúdo do Brasil.</p>

<p>E aí, vamos construir juntos uma web melhor?</p>
