# zenorocha.com

Meu site pessoal onde abordo temas sobre desenvolvimento front-end como HTML5, CSS3 e JavaScript.

## Como funciona?

Utilizo o [Jekyll](http://jekyllrb.com/), um static generator em Ruby, para criar esse blog.

## Primeiros passos

1. Instale o [Git](http://git-scm.com/downloads) e o [Ruby](http://www.ruby-lang.org/pt/downloads/), caso você não os tenha ainda.

2. Uma vez tendo instalado essas dependências, abra o terminal e instale o [Jekyll](http://jekyllrb.com/) através do comando:

  ```
  gem install jekyll
  ```

3. Agora clone o projeto:

  git clone git@github.com:zenorocha/zenorocha.com.git

4. Depois vá para pasta do projeto:

  cd zenorocha.com

5. E finalmente rode:

  jekyll

Agora você irá ver o site rodando em `localhost:4000` :D

## Browser Support

![IE](https://raw.github.com/alrra/browser-logos/master/internet-explorer/internet-explorer_48x48.png) | ![Chrome](https://raw.github.com/alrra/browser-logos/master/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/firefox/firefox_48x48.png) | ![Opera](https://raw.github.com/alrra/browser-logos/master/opera/opera_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/safari/safari_48x48.png)
--- | --- | --- | --- | --- |
IE 8+ ✔ | Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ |

## Estrutura

A estrutura básica do projeto se dá na seguinte forma:

<pre>
.
|-- _includes
|-- _layouts
|-- _plugins
|-- _posts
|-- _site
|-- assets
|-- _config.yml
`-- index.html
</pre>

### [_includes](https://github.com/zenorocha/blog/tree/master/_includes)

São blocos de código utilizados para gerar a página principal do site ([index.html](https://github.com/zenorocha/blog/blob/master/index.html)).

### [_plugins](https://github.com/zenorocha/blog/tree/master/_plugins)

Contém os plugins utilizados.

### [_posts](https://github.com/zenorocha/blog/tree/master/_posts)

Contém a lista de posts.

### [_layouts](https://github.com/zenorocha/blog/tree/master/_layouts)

Contém o template padrão da aplicação.

### _site

É onde os arquivos gerados são armazenados, uma vez que o Jekyll tenha sido rodado. Porém, esse diretório se torna desnecessário no nosso modelo, por isso está ignorado ([.gitignore](https://github.com/zenorocha/blog/blob/master/.gitignore)).

### [assets](https://github.com/zenorocha/blog/tree/master/assets)

Possui as imagens, arquivos CSS e JS.

### [_config.yml](https://github.com/zenorocha/blog/blob/master/_config.yml)

Armazena de forma fácil a maior parte das configurações da aplicação.

### [index.html](https://github.com/zenorocha/blog/blob/master/index.html)

É o arquivo que importa todas as seções da aplicação.

*Mais informações sobre a estrutura de arquivos do Jekyll, [clique aqui](https://github.com/mojombo/jekyll/wiki/Usage).*

## Créditos

Inspirado por Andy Taylor.
