//MANIPULAÇÃO DE OBJETOS 

//PROPRIEDADES
//são valores associados a um objeto.Você pode acessar e modificar propriedades usando objeto.propriedade ou objeto['propriedade'].

let carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2022
};

// ACESSANDO PROPRIEDADES
console.log(carro.marca); // "Toyota"
console.log(carro['modelo']); // "Corolla"

//ADICIONANDO PROPRIEDADEA A OBJETOS

carro.rodas = 4;//Adiciona a carros a propriedade rodas


// MODIFICANDO PROPRIEDADES
carro.ano = 2023;
console.log(carro.ano); // 2023

//MÉTODOS
// são funções associadas a objetos.Eles são definidos como funções dentro de um objeto e invocados usando objeto.metodo().

let pessoa = {
    nome: "João",
    saudacao: function() {
        return "Olá, meu nome é " + this.nome;//this quando está dentro de uma função que está dentro de um objeto,esse this refere-se ao próprio objeto em que está inserido através da função e acessa alguma propriedade desse objeto.Nesse exemplo this = objeto pessoa ;e acessa a propriedade "nome" desse objeto    
    }
};

// INVOCANDO UM MÉTODO
console.log(pessoa.saudacao()); // "Olá, meu nome é João"


//MANIPULAÇÃO DE ARRAYS EM JAVASCRIPT

//ACESSANDO ELEMENTOS DE UM ARRAY

let numeros = [10, 20, 30];
console.log(numeros[0]); // 10
console.log(numeros[2]); // 30

//MÉTODOS COMUNS

//PUSH()
//Adiciona um ou mais elementos ao final de um array.

let frutas = ["maçã", "banana"];
frutas.push("laranja");
console.log(frutas); // ["maçã", "banana", "laranja"]


//POP()
//Remove e retorna o último elemento de um array

let frutas = ["maçã", "banana", "laranja"];
let ultimaFruta = frutas.pop();
console.log(ultimaFruta); // "laranja"
console.log(frutas); // ["maçã", "banana"]

//SHIFT()
// Remove e retorna o primeiro elemento de um array.

let frutas = ["maçã", "banana"];
let primeiraFruta = frutas.shift();
console.log(primeiraFruta); // "maçã"
console.log(frutas); // ["banana"]

//UNSHIFT()
//Adiciona um ou mais elementos do início de um array

let frutas = ["banana"];
frutas.unshift("maçã");
console.log(frutas); // ["maçã", "banana"]

//MAP()
//Cria um novo array com os resultados de uma função aplicada a cada elemento do array original

let numeros = [1, 2, 3];
let dobro = numeros.map(function(num) { //num será cada elemento do array em cada iteração
    return num * 2;
});
console.log(dobro); // [2, 4, 6]

//FILTER()
//Cria um novo array mcom todos os elementos que passam em um teste

let numeros = [1, 2, 3, 4, 5];
let pares = numeros.filter(function(num) {
    return num % 2 === 0;
});
console.log(pares); // [2, 4]


//REDUCE()

//O QUE FAZ?
//O método reduce() é usado para reduzir um array a um único valor aplicando uma função a cada elemento do array. Ele "acumula" os valores do array em um resultado final.

//COMO FUNCIONA?
//Parâmetros do reduce():
//Função de Callback: Uma função que será chamada para cada elemento do array.
//acumulador: O valor acumulado que é passado para a próxima chamada da função.
//valorAtual: O valor do elemento atual do array.
//Valor Inicial (Opcional): O valor inicial para o acumulador. Se não for fornecido, o primeiro elemento do array é usado como o valor inicial.

//PROCESSO
//A função de callback é chamada para cada elemento do array.
//O acumulador começa com o valor inicial (ou o primeiro elemento, se não fornecido).
//Em cada chamada, a função de callback recebe o acumulador e o valorAtual, e retorna o novo valor do acumulador.
//Esse novo valor é passado para a próxima chamada da função de callback.

//RESULTADO FINAL
//Depois de passar por todos os elementos, o reduce() retorna o valor final do acumulador.

let numeros = [1, 2, 3, 4];
let soma = numeros.reduce(function(acumulador, valorAtual) {
    return acumulador + valorAtual;
}, 0);
console.log(soma); // 10

/*EXPLICAÇÃO PASSO A PASSO
Array Original: numeros é [1, 2, 3, 4].

Método reduce():

A função de callback é function(acumulador, valorAtual) { return acumulador + valorAtual; }.
O valor inicial do acumulador é 0.

Processo:
Primeira Iteração:
acumulador = 0 (valor inicial)
valorAtual = 1 (primeiro elemento do array)
A função retorna 0 + 1 = 1.

Segunda Iteração:
acumulador = 1 (resultado da iteração anterior)
valorAtual = 2
A função retorna 1 + 2 = 3.

Terceira Iteração:
acumulador = 3
valorAtual = 3
A função retorna 3 + 3 = 6.

Quarta Iteração:
acumulador = 6
valorAtual = 4
A função retorna 6 + 4 = 10.

Resultado Final:
Depois de todas as iterações, o valor final do acumulador é 10, que é o resultado retornado por reduce().*/


