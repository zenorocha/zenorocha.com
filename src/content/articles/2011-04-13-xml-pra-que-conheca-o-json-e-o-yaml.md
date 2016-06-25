---
title: XML pra quê? Conheça o JSON e o YAML
oldUrl: http://blog.zenorocha.com/post/4594116227/xml-pra-que-conheca-o-json-e-o-yaml
---

<p><img src="/assets/img/xmllogo.png" width="500" height="141"/></p>

<p>Por muito tempo o XML dominou a web quando o assunto era serialização de dados. Aos poucos, outras linguagens foram se popularizando e conquistando desenvolvedores por conta das fraquezas desse padrão recomendado pela W3C.</p>

<p>Enquanto isso, poderosas redes sociais, como o Twitter, foram adotando linguagens como o JSON ao fornecer dados através de suas APIs. E com isso, tomando grandes proporções no mercado.</p>

<!-- more -->

<p>Vamos entender sobre o que cada uma se trata, antes de entrarmos mais a fundo no assunto.</p>

<ul><li><strong>JSON</strong> (<em>JavaScript Object Notation</em>) é uma estrutura de dados baseada em javascript. Apesar de estar na &#8220;moda&#8221; agora, não é uma tecnologia nova, faz parte do javascript puro e não precisa de nenhum script pra trabalhar.</li>

</ul><ul><li><strong>YAML</strong> acrônimo recursivo para <em>YAML Ain&#8217;t Markup Language</em>. No início do seu desenvolvimento significava <em>Yet Another Markup Language</em> (Mais outra linguagem de marcação) para distinguir seu propósito centrado em dados no lugar de documentos marcados. Foi projetada para &#8220;ser legível aos seres-humanos&#8221;.</li>

</ul><p>Vejamos, então, um exemplo de uma estrutura de dados usando <strong>JSON</strong>.</p>

<pre class="prettyprint lang-js">{<br/>    "nome": "zeno rocha - blog",<br/>    "url": "http://zenorocha.com",<br/>    "posts": [<br/>    {<br/>        "titulo": "do it! - as simple as you can",<br/>        "data": "13/04/2011"<br/>    },<br/>    {<br/>        "titulo": hello world,<br/>        "data": "12/04/2011"<br/>    }<br/>    ]<br/>}<br/></pre>

<p>A mesma estrutura utilizando <strong>YAML</strong>:</p>

<pre class="prettyprint">blog:<br/>       nome: zeno rocha - blog<br/>       url: <a href="http://zenorocha.com" target="_blank">http://zenorocha.com</a><br/>       post:<br/>              titulo: do it! - as simple as you can<br/>              data: 13/04/2011<br/>       post:<br/>              titulo: hello world<br/>              data: 12/04/2011</pre>

<p>E agora compare-as com o formato <strong>XML</strong>:</p>

<pre class="prettyprint lang-html">&lt;?xml version="1.0" encoding="utf-8"?&gt;<br/>&lt;blog&gt;<br/>   &lt;nome&gt;zeno rocha - blog&lt;/nome&gt;<br/> &lt;url&gt;http://blog.zenorocha.com&lt;/url&gt;<br/>   &lt;post&gt;<br/>       &lt;titulo&gt;do it! - as simple as you can&lt;/titulo&gt;<br/>     &lt;data&gt;13/04/2011&lt;/data&gt;<br/>    &lt;/post&gt;<br/>  &lt;post&gt;<br/>       &lt;titulo&gt;hello world&lt;/titulo&gt;<br/>       &lt;data&gt;12/04/2011&lt;/data&gt;<br/>    &lt;/post&gt;<br/>&lt;/blog&gt;</pre>

<p>Se você está acostumado com linguagens de marcação como HTML pode até discordar de mim, mas em termos de leitura o XML é muito menos intuitivo do que as outras linguagens apresentadas.</p>

<p>Além disso, a estrutura de dados é mais simples de trabalhar e o tempo de execução de um script lendo dados em JSON é dezenas de vezes mais rápido do que ler um conteúdo XML.</p>

<p>As principais linguagens de programação server side tem suporte pra escrever dados em JSON. Mais do que isso, existem métodos nativos para decodificação desse padrão.</p>

<p>O JSON pode substituir sim o XML, e faz isso muito bem na hora de trabalhar com respostas em AJAX por exemplo. Entretanto, seria muita pretensão achar que JSON irá desbancar um formato tão estável em tão pouco tempo.</p>
