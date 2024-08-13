//GETELEMENTBYID
// Seleciona um elemento com um ID específico.
var elemento = document.getElementById('meuID');

//QUERYSELECTOR
//Seleciona o primeiro elemento que corresponde ao seletor CSS fornecido (ID, classe, tag, etc.).

var elemento = document.querySelector('.minhaClasse'); // Seleciona o primeiro elemento com a classe 'minhaClasse'
var elemento = document.querySelector('#meuID');       // Seleciona o elemento com o ID 'meuID'
var elemento = document.querySelector('div');          // Seleciona o primeiro <div> na página

//MANIPULAR ELEMENTOS

//INNERHTML
//Modifica o conteúdo HTML interno de um elemento. Isso significa que você pode adicionar tags HTML dentro do elemento, e essas tags serão interpretadas como HTML.
//Use quando você precisa incluir HTML, como adicionar uma nova estrutura, imagens ou outros elementos HTML.

//html
<div id="meuID">Texto original</div>


//javascript
var elemento = document.getElementById('meuID');
elemento.innerHTML = '<b>Texto em negrito</b> e <i>texto em itálico</i>';

//resultado
//o conteúdo do <div> será:
//<b>Texto em negrito</b> e <i>texto em itálico</i>

//O HTML dentro do innerHTML é interpretado e exibido como HTML.


//TEXTCONTENT
//Modifica apenas o texto interno de um elemento. Qualquer HTML dentro do textContent será tratado como texto comum, não como código HTML
// Use quando você só precisa alterar ou adicionar texto, sem formatação HTML.

//html
<div id="meuID">Texto original</div>

//javascript
var elemento = document.getElementById('meuID');
elemento.textContent = '<b>Texto em negrito</b> e <i>texto em itálico</i>';

//resultado
//o conteúdo do <div> será:
//&lt;b&gt;Texto em negrito&lt;/b&gt; e &lt;i&gt;texto em itálico&lt;/i&gt;

//O HTML dentro do textContent é exibido como texto literal, incluindo as tags HTML como parte do texto.

//ALTERAR ATRIBUTOS DE UM ELEMENTO
//Modificar atributos como src, href, class, etc.

var imagem = document.querySelector('img');
imagem.src = 'nova-imagem.jpg'; // Muda o caminho da imagem
imagem.title = 'Nova página'; //Muda o títul do html
imagem.alt = 'nova imagem' //Muda o alt(o que o navegador identifica daquela imagem)

//ou utilizando setAttribute()

var imagem = document.querySelector('img');
imagem.setAttribute('src', 'nova-imagem.jpg');
imagem.setAttribute('title','Nova página');
imagem.setAttribute('alt','nova imagem')




//ADICIONAR EVENT LISTENERS
//Um event listener (ou ouvinte de evento) é uma função que você registra para ouvir e responder a eventos específicos em um elemento HTML. Eventos podem ser ações que o usuário realiza, como clicar em um botão, enviar um formulário ou mover o mouse sobre um elemento. O event listener permite que você defina o que deve acontecer quando um desses eventos ocorre.
//Adiciona uma função que será chamada quando um evento ocorrer.

var botao = document.getElementById('meuBotao');// Passo 1: Selecionar o elemento

botao.addEventListener('click', function() { // Passo 2: Registrar o event listener(nesse caso o click)
  alert('Botão clicado!'); //especifica o que a função deve fazer caso haja click no botão
});

//Aqui, um alerta será mostrado quando o botão for clicado.


//REMOVER EVENT LISTENERS
//Remove um listener previamente adicionado.

function minhaFuncao() {
    alert('Botão clicado!');
  }
  
  var botao = document.getElementById('meuBotao');
  botao.addEventListener('click', minhaFuncao);
  
  botao.removeEventListener('click', minhaFuncao);

//TIPOS COMUNS DE EVENTOS

//CLICK
//Ocorre quando o usuário clica em um elemento.

elemento.addEventListener('click', function() {
    console.log('Elemento clicado!');
  });

//SUBMIT
//Ocorre quando um formulário é enviado.

var formulario = document.getElementById('meuFormulario');
formulario.addEventListener('submit', function(evento) {
  evento.preventDefault(); // Impede o envio padrão do formulário(normalmente quando clicamos no botão com o evento de submit,a página é recarregada ou somos direcionados pra outra página.Com preventDefault(),esse padrão é ignorado e é executado algo que realmente queiramos,como a mensagem no console abaixo )
  console.log('Formulário enviado!');
});

//Parâmetro evento: É um objeto que contém informações sobre o evento (neste caso, submit) e permite que você interaja com ele.
//se for feito:
var formulario = document.getElementById('meuFormulario');

formulario.addEventListener('submit', function(evento) {
  console.log(evento); // Mostra o objeto evento no console
  
  // Informações importantes sobre o evento
  console.log('Tipo de Evento:', evento.type); // 'submit'
  console.log('Elemento que acionou o evento:', evento.target); // O formulário

//MOUSEOVER
//Ocorre quando o ponteiro do mouse passa sobre um elemento.

elemento.addEventListener('mouseover', function() {
    console.log('Mouse sobre o elemento!');
  });


//MOUSEOUT
//Ocorre quando o ponteiro do mouse sai de um elemento.

elemento.addEventListener('mouseout', function() {
    console.log('Mouse saiu do elemento!');
  });










