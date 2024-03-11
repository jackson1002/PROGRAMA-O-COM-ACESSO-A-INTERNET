/*No Javascript temos 3 palavras chave pra declarar variáveis:
var
let 
const
*/
var a = '1';
alert(a)

var a = 2;
var b = 3;
var c = a + b;
alert(c);

//ou(mais organizado)

//declaração de variáveis
var a,b,c;

//atribuição de variáveis
var a = 3;
var b = 3;
var c = a + b;
alert(c);


//problemas de variáveis não definidas e de variáveis sem valor
var h;
alert(h); //Não definimos valor para essa variável logo no alert aparecerá undefined

var m,n,o;
var o = m + n;
alert(o); //dará NaN(não é um número,pois ele não entende que são números já que não atribuimos valor numerico a nenhuma das variáveis da soma)

//concatenação(junção de palavras)

var nome,sobrenome,nome_completo;

var nome = 'Jackson';

var sobrenome = 'Freitas';

var nome_completo = nome+sobrenome;

document.getElementById("texto").innerHTML = nome_completo

//espaço entre a concatenação

var nome,sobrenome,nome_completo;

var nome = 'Jackson';
var sobrenome = 'Freitas';
var nome_completo = nome +" "+ sobrenome; //agora teremos espaço entre o nome Jackson e Freitas

document.getElementById("texto").innerHTML = nome_completo;

 //let,var,const

 //O let não permite redeclarar uma variável(dará erro nesse código por isso está como comentário)
 //let pessoa = 'Lucas';
 //let pessoa = 'Bia';

 //cada variável let considera o valor atribuída a ela de acordo em que parte do escopo do código ela está inserida

 let b = '10';//aqui b é 10 
    {
        let b = '2'; //aqui b é 2 apenas dentro desse bloco
    }
document.getElementById("texto").innerHTML = b; //aqui o valor será 10,pois essa parte do código está no escopo global,logo o x no escopo global vale 10


//cada variável var considera o valor atribuída a ela e pode ser redeclarada independente do escopo do código.
var x = '10';
    {
        var x = '2';
    }
document.getElementById("texto").innerHTML = x; //aqui o valor vai ser 2,pois houve redeclaração de variável x,mesmo as duas variáveis estando em escopos diferentes


//o var permite redeclarar
 var pessoa = 'Lucas';
 var pessoa = 'Bia';

 //const o valor dessa variável é constante não muda nunca em nenhum lugar do código(semelhante ao let só que de forma mais estrita)




 


