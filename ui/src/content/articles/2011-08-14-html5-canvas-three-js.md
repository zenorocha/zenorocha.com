---
title: HTML5 - Canvas + Three.js
image: http://media.tumblr.com/tumblr_lrou6aDK1U1qe3219.jpg
slug: html5-canvas-three-js
---

<!-- <p class="demo-download"><a href="http://labs.zenorocha.com/html5/canvas/" target="_blank"><img src="http://media.tumblr.com/tumblr_lk325lvHwF1qe3219.png" class="botao"/></a> <a href="https://github.com/zenorocha/HTML5-Canvas" target="_blank"><img src="http://media.tumblr.com/tumblr_lk325u7HMG1qe3219.png" class="botao"/></a> -->

Ahh o tão badalado canvas. Sempre um dos tópicos mais abordados quando o assunto é HTML5. Você já deve ter ouvido muito falar dele e, assim como eu, ter se impressionado com os [diversos experimentos](http://www.canvasdemos.com/) que surgem todos os dias pela internet.

Sempre quando via um desses pensava: “Por que não criar o meu próprio experimento?” Nada de muito incrível, apenas mais uma demonstração de quão poderoso é esse novo recurso.

Por isso há alguns meses eu e o Zanoni Miranda, nos juntamos, matamos algumas aulas da faculdade e criamos esse exemplo utilizando a engine [Three.js](https://github.com/mrdoob/three.js/).

E agora depois de todo esse tempo, venho compartilhar aqui com vocês o que é canvas, pra quer serve a engine [Three.js](https://github.com/mrdoob/three.js/) e disponibilizar o código fonte dessa brincadeira toda.

<!-- more -->

## Canvas

Eu gosto de pensar na tag `<canvas>` como um quadro em branco, esperando para ser pintado com um poderoso píncel chamado Javascript.

Mas é claro que, na verdade, é muito mais do que isso, com o canvas você consegue renderizar imagens, desenhar elementos complexos e criar animações.

O que encanta mesmo com o advento do canvas é a possibilidade de fazer tudo isso sem usar qualquer plugin proprietário no seu navegador como [Flash Player](http://get.adobe.com/br/flashplayer/) ou [Silverlight](http://www.microsoft.com/getsilverlight/Get-Started/Install/Default.aspx), é só HTML e Javascript.

## Three.js

Se você não quer ter dor de cabeça na hora de fazer qualquer coisinha em 3D no navegador, eu sugiro que você conheça a [Three.js](https://github.com/mrdoob/three.js/).

Uma engine criada pelo famoso [Mr.Doob](http://mrdoob.com/), um cara que desenvolve [experimentos fantásticos](http://mrdoob.github.com/three.js/examples/webgl_materials_normalmap2.html) utilizando principalmente WebGL. Com essa engine você consegue criar com facilidade câmeras, objetos, materiais, cenas de iluminação e muito mais. Isso tudo podendo optar como a cena será desenhada, é só escolher Canvas, WebGL ou SVG.

Depois de procurar e não encontrar absolutamente nenhum material em português sobre essa engine, decidi ir além de mais um tutorial sobre como usar canvas criando um quadradinho e resolvi explorar os recursos do 3D.

## Exemplo

Para que esse post não fique gigante, apenas trechos de código serão exibidos a seguir, portanto se estiver com alguma dúvida dê uma olhada no meu [repositório do github que contém o código completo](https://github.com/zenorocha/HTML5-Canvas). 

O exemplo será bem simples, criar um cubo e interagir com ele. Tudo isso, é claro, utilizando apenas Javascript.

Pra começar, vamos instanciar a câmera e definir seu posicionamento.

```
camera = new THREE.Camera(70, canvasWidth / canvasHeight, 1, 1000);

camera.position.y = 150;

camera.position.z = 500;

camera.target.position.y = 150;
```

Depois vamos armazenar as cores das faces em um vetor com 6 posições e atribuir essas cores para cada uma das faces do material.

```
var arrayCor, materiais = new Array();

arrayCor = [0x0092BF, 0x0092BF, 0xd9d9d9, 0xd9d9d9, 0xF14A29, 0xF14A29];



for (var i = 0; i &lt; 6; i++) {

    materiais.push( [new THREE.MeshLambertMaterial( { color: arrayCor[i] } ) ] );

}
```

Então criamos um mesh, um grafo tridimensional que contém os vértices, faces e materiais de um objeto 3D. Aí instancio o cubo passando esse mesh e atribuindo uma posição.

```
var mesh = new THREE.Cube(250, 250, 250, 1, 1, 1, materiais);



cubo = new THREE.Mesh(mesh, new THREE.MeshFaceMaterial() );

cubo.position.y = 150;
```

Criamos a cena e atribuimos o cubo nela.

```
cena = new THREE.Scene();

cena.addObject(cubo);
```

E também precisamos definir o objeto que vai renderizar esse canvas.

```
renderer = new THREE.CanvasRenderer();

renderer.setSize(canvasWidth, canvasHeight);

container.appendChild( renderer.domElement );
```

Por fim, definimos que o container estará escutando pelo evento de quando o mouse está clicado e que quando esse evento for disparado chamará a função onMouseDown.

```
container.addEventListener('mousedown', onMouseDown, false);
```

E agora paramos por aqui antes que esse post fique enorme, se você quiser saber mais sobre o resto das funções é só acessar o [repositório do github que contém o código completo](https://github.com/zenorocha/HTML5-Canvas). 

## Compatibilidade

![](http://media.tumblr.com/tumblr_lpx8vu0fgd1qe3219.jpg) Lembre-se sempre de utilizar o [Modernizr](http://Modernizr) para detectar navegadores que não possuem suporte ao canvas. Dessa vez, para informar aquelas pessoas perdidas no tempo que elas não conseguem ver esse exemplo porque seus navegadores são ruins, vamos criar um fallback bem simples. Portanto, além dele utilizar o [Modernizr](http://Modernizr), vamos utilizar também o [Yepnope](http://yepnopejs.com/) para nos auxiliar. Primeiro, testamos se o navegador tem suporte ao canvas. Caso tenha, carrego os scripts que serão responsáveis por criar essa brincadeira toda. Caso **não** tenha, carrego um css que será responsável por dizer ao nosso usuário que ele não tem suporte.

```
yepnope({

     test: Modernizr.canvas,

     yep: ['build/Three.js', 'js/RequestAnimationFrame.js', 'js/canvas.js'],

     nope: 'css/canvas-polyfill.css'

});
```

E o resultado:

![](http://media.tumblr.com/tumblr_lpx89gb3aM1qe3219.png) [Modernizr](http://www.modernizr.com/) e [Yepnope](http://yepnopejs.com/) formam um casal lindo, poderia fazer um post só sobre os dois, recomendo e muito o uso deles.

## Conclusão

Mesmo com o canvas estando em fase de especificação, ele é realmente tudo o que dizem. Ele proporciona hoje, e proporcionará ainda mais no futuro, experiências extremamente ricas que no passado só podiam ser desenvolvidas utilizando ferramentas proprietárias. E aliado ao uso da engine [Three.js](https://github.com/mrdoob/three.js/) conseguimos mais desempenho e agilidade em seu desenvolvimento. Espero que tenha gostado e aproveite pra deixar suas opiniões aqui abaixo.