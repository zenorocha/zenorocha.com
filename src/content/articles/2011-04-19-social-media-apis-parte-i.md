---
title: Social Media APIs - Parte I
oldUrl: http://blog.zenorocha.com/post/4750649370/social-media-apis-parte-i
---

<p><img alt="Social Media" src="/assets/img/social-media-1.png" /></p>

<p>A fim de promover uma melhor experiência do usuário com a aplicação, muitos sites tem integrado funcionalidades de plataformas externas à sua aplicação através das famosas <strong><a href="http://pt.wikipedia.org/wiki/API" target="_blank">APIs</a></strong>.</p>

<p>Essa pequena série, dividida em três posts, pretende dar um rápido overview sobre as APIs das principais redes sociais.</p>

<p>Pra começar, vamos falar um pouco sobre as APIs do <strong><a href="http://facebook.com" target="_blank">Facebook</a></strong> e <strong><a href="http://vimeo.com" target="_blank">Vimeo</a></strong>. E depois sobre as do <strong><a href="http://foursquare.com" target="_blank">Foursquare</a></strong>, <strong><a href="http://twitter.com" target="_blank">Twitter</a></strong>, <strong><a href="http://youtube.com" target="_blank">Youtube</a> </strong>e <strong><a href="http://flickr.com" target="_blank">Flickr</a></strong>.</p>

<!-- more -->

<hr><h2>Facebook API</h2>

<p><strong><a href="http://developers.facebook.com" target="_blank"><img height="292" align="middle" width="500" alt="Facebook Developers" src="/assets/img/facebook-developers.jpg"/></a></strong></p>

<p>A chamada Facebook Platform permite que você construa aplicativos para o próprio Facebook ou para Web, oferecendo uma coleção de APIs e SDKs.</p>

<ul><li><strong><span><strong><a href="http://developers.facebook.com/docs/plugins/" target="_blank">Social Plugins<br/></a></strong></span></strong>Um conjunto de plugins que facilitam a incorporação de elementos do Facebook ao seu site com um simples <em>copy &amp; paste</em>. Um bom exemplo disso é o famoso Like Button, extremamente difundido por conta da facilidade de uso através de um &lt;iframe&gt;.</li>

</ul><ul><li><strong><a href="http://developers.facebook.com/docs/reference/api/" target="_blank">Graph API<br/></a></strong>É o filé da Facebook Plataform, usado para ler e gravar dados dos objetos (Pessoa, Foto, Evento, Página, etc) fornecidos pelo site.</li>

</ul><ul><li><strong><a href="http://developers.facebook.com/docs/authentication/" target="_blank">Authentication<br/></a></strong>Permite incorporar à sua aplicação uma autenticação de login através da conta do próprio Facebook. Interage com a Graph API assim que a autenticação é concedida, oferecendo ao site todos os dados do usuário.</li>

</ul><blockquote>

<p>Exemplo: <a href="https://graph.facebook.com/" target="_blank">https://graph.facebook.com/</a><strong>zenorocha</strong></p>

</blockquote>

<pre class="prettyprint lang-js">{<br/>   "id": "1021864713",<br/>   "name": "Zeno Rocha",<br/>   "link": "http://www.facebook.com/zenorocha",<br/>   "username": "zenorocha",<br/>   "gender": "male",<br/>   "locale": "en_GB"<br/>}</pre>

<p>Para exemplificar, usamos a Graph API para obter as informações básicas de um usuário. O retorno é um JSON com as informações do usuário, depois é só manipular de acordo com o seu interesse.</p>

<p>Além disso é possível encontrar na Facebook Plataform o SDK que mais se adequada a sua linguagem preferida, são eles: JavaScript SDK, iOS SDK (iPhone &amp; iPad), Android SDK e PHP SDK.</p>

<p><em>Mais informações</em>: <a href="http://developers.facebook.com/" target="_blank"><a href="http://developers.facebook.com" target="_blank">http://developers.facebook.com</a></a></p>

<hr><h2>Vimeo API</h2>

<p><strong><a href="http://vimeo.com/api" target="_blank"><img height="333" align="middle" width="500" alt="Vimeo Logo" src="/assets/img/vimeo-logo.jpg"/></a></strong></p>

<p>Este serviço de compartilhamentos de vídeos é outro que possui uma ótima documentação de suas APIs. Ao todo são disponibilizadas quatro &#8220;modalidades&#8221;, são elas:</p>

<ul><li><strong><a href="http://vimeo.com/api/docs/simple-api" target="_blank">Simple API</a></strong><br/><span title="Clique para mostrar traduções alternativas" class="hps">É a</span> <span title="Clique para mostrar traduções alternativas" class="hps">interface</span> <span title="Clique para mostrar traduções alternativas" class="hps">mais</span> <span title="Clique para mostrar traduções alternativas" class="hps">simples</span> <span title="Clique para mostrar traduções alternativas" class="hps">de</span> <span title="Clique para mostrar traduções alternativas" class="hps">acesso aos </span><span title="Clique para mostrar traduções alternativas" class="hps">dados</span> <span title="Clique para mostrar traduções alternativas" class="hps">públicos </span><span title="Clique para mostrar traduções alternativas" class="hps">do Vimeo que</span> são obtidos <span title="Clique para mostrar traduções alternativas" class="hps">através de</span> <span title="Clique para mostrar traduções alternativas" class="hps">JSON</span><span title="Clique para mostrar traduções alternativas">, XML ou</span> <span title="Clique para mostrar traduções alternativas" class="hps">PHP</span><span title="Clique para mostrar traduções alternativas">.<br/> </span></li>

<li><strong><a href="http://vimeo.com/api/docs/advanced-api" target="_blank">Advanced API</a></strong><br/>Como o próprio nome já diz, aborda métodos mais avançados e para tais consultas é necessário registrar uma application.</li>

<li><strong><a href="http://vimeo.com/api/docs/oEmbed" target="_blank">oEmbed</a></strong><br/>É um padrão aberto para <em>embedar </em>fotos e vídeos. Você pode usar a url de um vídeo qualquer do Vimeo e gerar esse código &lt;oembed&gt; facilmente.</li>

<li><strong><a href="http://vimeo.com/api/docs/moogaloop" target="_blank">Moogaloop</a></strong><br/>É o estranho nome do video player do Vimeo, nessa API é possível configurar o player com as linguagens Javascript ou Actionscript 3.</li>

</ul><blockquote>Exemplo: <a href="http://vimeo.com/api/v2/" target="_blank">http://vimeo.com/api/v2/</a><strong>zenorocha</strong>/<strong>info</strong>.<strong>json</strong></blockquote>

<pre class="prettyprint lang-js">{<br/>   "id":"6796565",<br/>   "display_name":"Zeno Rocha",<br/>   "location":"Rio de Janeiro",<br/>   "url":"http://zenorocha.com",<br/>   "profile_url":"http://vimeo.com/zenorocha",<br/>   "total_videos_liked":3<br/>}</pre>

<p><span><br/></span> <span>No nosso exemplo, utilizamos a Simple API, numa chamada que consiste em 3 atributos, são eles: <em>username</em>, <em>request</em> e <em>output</em> (</span><span><a href="http://vimeo.com/api/v2/" target="_blank">http://vimeo.com/api/v2/</a><strong>username</strong>/<strong>request</strong>.<strong>output</strong>). Ao todo são 3 opções de <em>output</em>, JSON, PHP e XML. Já o número de requests são muitos e podem ser encontrados com mais detalhes no site.</span></p>

<p><em>Mais informações</em>: <a href="http://vimeo.com/api" target="_blank"><a href="http://vimeo.com/api" target="_blank">http://vimeo.com/api</a></a></p>
