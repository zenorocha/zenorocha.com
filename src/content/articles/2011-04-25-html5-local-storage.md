---
title: HTML5 - Local Storage
image: /images/html5.jpg
---

<!-- <p class="demo-download"><a href="http://labs.zenorocha.com/html5/local-storage/" target="_blank"><img class="botao" src="http://media.tumblr.com/tumblr_lk325lvHwF1qe3219.png"/></a> <a href="https://github.com/zenorocha/HTML5-Local-Storage" target="_blank"><img class="botao" src="http://media.tumblr.com/tumblr_lk325u7HMG1qe3219.png"/></a></p> -->

Imagine um **[cookie](http://pt.wikipedia.org/wiki/Cookie)** com muito mais espaço de armazenamento, onde os dados não são transitados a cada requisição de página e que, ainda por cima, não tenha data para expirar. Pronto, você imaginou a [API Web Storage](http://dev.w3.org/html5/webstorage/) do HTML5.

Ela se divide em dois tipos: **sessionStorage** e **localStorage**.

* A **sessionStorage** ficará disponível apenas para a janela que criou o dado até que seja fechada (por exemplo, quando a sessão for encerrada). Se você abrir outra janela, ela não terá acesso aos dados daquela sessão.
* A **localStorage**, por outro lado, não depende da sessão. Se você setar um dado no local storage esse ficará automaticamente disponível para qualquer janela. Além disso, permanecerá disponível até que seja explicitamente deletada pelo programador do site ou pelo o usuário. Perceba, o usuário pode fechar sua janela, reiniciar seu computador, viajar para o Acre e voltar mas os dados vão continuar lá.

<!-- more -->

## Exemplo

No nosso exemplo vamos criar uma to-do list (lista de tarefas), foram retirados pequenos trechos do código para facilitar o entendimento, mas tudo o que você precisa saber sobre nosso estudo da API Storage se encontra aqui. Lembrando que é possível baixar o código dessa demonstração, caso queira olhar com mais detalhes.

Foi utilizado **jQuery** para facilitar a escrita na hora de codificar o Javascript, para os que não estão familiarizados podem recorrer a **[documentação](http://docs.jquery.com/)** ou a mim mesmo nos comentários desse post.

**HTML**

Vamos criar uma lista não-ordenada para armazenar cada tarefa. E um botão para limpar o armazenamento, caso o usuário queira apagar as tarefas. O segredo aqui é a propriedade **contentEditable **definida como **true**, com isso tornamos editável essa lista.

```
<ul id="lista" contenteditable="true">
  <li>nbsp;</li>
</ul>

<button id="limpar">Limpar</button>
```

**JS**

Aqui definimos o método **setItem**, pertencente ao objeto **localStorage**, atribuindo a variável "dados" todo o html da nossa `<ul>` com id "lista". Note que, nesse exemplo, o método é chamado a cada evento de tecla pressionada, mas você pode criar um botão e só chamar esse método ao clicá-lo por exemplo. Melhorando assim a performance da aplicação.

```
$("#lista").keypress(function() {
  localStorage.setItem('dados', $("#lista").html());
});
```

Aqui fazemos um **if** simples verificando se existe algum valor na variável "dados" ao chamar o método **getItem** do objeto **localStorage**. Caso exista, atribui a `<ul>` com id "lista" o html armazenado nela.

```
if (localStorage.getItem('dados')) {
  $("#lista").html(localStorage.getItem('dados'));
}
```

Podemos também utilizar o método **clear** que, como o próprio nome já diz, limpa o objeto **localStorage**. E, em seguida, atualiza o navegador para esvaziar os campos. Isso tudo ao ser clicado o `<button>` de id "limpar".

```
$("#limpar").click(function() {
  localStorage.clear();
  window.location = window.location;
});
```

## Resultado

Colocando tudo isso dentro de uma função temos:

```
<script type="text/javascript">
$(function() {
  $("#lista").keypress(function() {
    localStorage.setItem('dados', $("#lista").html());
  });

  if (localStorage.getItem('dados')) {
    $("#lista").html(localStorage.getItem('dados'));
  }

  $("#limpar").click(function() {
    localStorage.clear();
    window.location = window.location;
  });
});
</script>
```

*Mais fácil que isso, só ganhando do atlético paranaense.*

## Compatibilidade

Agora, se você deseja implementar esse tipo de funcionalidade hoje, fique atento aos navegadores. Usando o [Modernizr](http://www.modernizr.com/) você consegue detectar o suporte dos browsers para essa API.

```
if (Modernizr.localstorage) {
  // esse navegador suporta HTML5 Storage :D
} else {
  // esse navegador NÃO suporta HTML5 Storage :(
}
```

E por hoje é só, fique atento a novos tutoriais de HTML5 e CSS3 que estão por vir.