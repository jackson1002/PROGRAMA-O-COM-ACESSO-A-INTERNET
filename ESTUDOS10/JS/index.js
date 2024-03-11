/* onclick:dispara algo quando determinado elemento do html é clicado.Definimos no html no nosso botao o onclick e dentro passamos a função 
abaixo.Quando apertamos no botão,será disparado um alert e o  background da página irá mudar assim que apertarmos no ok do alert */

function EventoClick(){
   
    document.body.style.backgroundColor = 'pink';
    alert("acionou um evento de click");
}

/* onload:Disparado quando a página terminou de ser carregada.Body.É usado normalmente em páginas muito grandes e pesadas onde temos
que esperar bastante pra tudo carregar na página.Com isso,podemos exibir primeiro o que é importante pra página e com o onload definir
elementos menos importantes pra serem exibidos somente depois que a página terminou de ser carregada por completo.*/
 