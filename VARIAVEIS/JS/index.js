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

 //LET,VAR,CONST

 //O let não permite redeclarar uma variável(dará erro nesse código por isso está como comentário)
 let pessoa = 'Lucas';
 let pessoa = 'Bia'; //dará erro
 
 //permite apenas reatribuir em mesmo escopo:
 let pessoa ='Lucas'
 pessoa = 'Bia'; //dará certo

 //cada variável let considera o valor atribuída a ela de acordo em que parte do escopo do código ela está inserida(as variáveis let não podem ser redeclaradas num mesmo escopo,apenas em escopos diferentes,por isso ai deu certo pois um esta em escopo global e a outra em escopo de bloco)

 let b = '10';//aqui b é 10 
    {
        let b = '2'; //aqui b é 2 apenas dentro desse bloco
    }
document.getElementById("texto").innerHTML = b; //aqui o valor será 10,pois essa parte do código está no escopo global,logo o x no escopo global vale 10.Se usassemos document.getElementById("texto").innerHTML = b dentro do bloco,ai sim imprimiria 2,pois essa parte do código estaria dentro do escopo de bloco em que b vale 2

//variáveis let são elevadas ao topo do escopo,mas não podem ser usadas antes de sua declaração no código.Tentar usar a variável antes da declaração resultará em erro de referência

console.log(c);//dará erro
let c = 5 ;


//VAR:

//cada variável var considera o valor atribuída a ela e pode ser redeclarada ou reatribuída independente do escopo do código.
var x = '10';
    {
        var x = '2';
    }
document.getElementById("texto").innerHTML = x; //aqui o valor vai ser 2,pois houve redeclaração de variável x,mesmo as duas variáveis estando em escopos diferentes


//o var permite redeclarar ou retribuir
 var pessoa = 'Lucas';
 var pessoa = 'Bia';
 pessoa = "Lia"

 //Variáveis declaradas com 'var' são elevadas ao topo,mas o valor não é inicializado.Isso significa que voce pode usar a variável antes de declara-la,mas ela terá valor 'undefined'
 console.log(z) //undefined
 var z = 5
 

 //const o valor dessa variável é constante não muda nunca em nenhum lugar do código(semelhante ao let só que de forma mais estrita)


 //RESUMO
 
 //var
//Redeclaração no mesmo escopo: Permitida
//Reatribuição no mesmo escopo: Permitida

//let
//Redeclaração no mesmo escopo: Não Permitida
//Reatribuição no mesmo escopo: Permitida

//const
//Redeclaração no mesmo escopo: Não Permitida
//Reatribuição no mesmo escopo: Não Permitida

//Em escopos diferentes (como dentro de um bloco {}), você pode redeclarar qualquer uma dessas variáveis, mas const ainda não pode ser reatribuída mesmo em escopos diferentes.

//MAIS OBSERVAÇÕES SOBRE VARIÁVEIS

//se você deixar de colocar a palavra-chave var, você não irá receber um erro...

someOtherVar = 10;

// ...mas sua variável será criada no escopo global, não no escopo em que você definiu ela










 


