//FUNÇÕES DECLARATIVAS
function nomeDaFuncao() {
    // Código da função
}

function saudacao() {
    console.log("Olá, mundo!");
}

//Características:
//Pode ser chamada em qualquer lugar do código, até mesmo antes da sua declaração (devido ao hoisting).
//Tem um nome, que é usado para invocar a função


//INVOCAÇÃO DE FUNÇÃO DECLARATIVA
saudacao(); // Chama a função e exibe "Olá, mundo!"


//EXPRESSÃO DE FUNÇÃO
const nomeDaFuncao = function() {
    // Código da função
};

const saudacao = function() {
    console.log("Olá, mundo!");
};

//Características:
//A função é armazenada em uma variável.
//Não pode ser chamada antes de sua declaração.
//Pode ou não ter um nome (se não tiver, é chamada de função anônima).


//INVOCAÇÃO DE EXPRESSÃO DE FUNÇÃO
saudacao(); // Chama a função e exibe "Olá, mundo!"

//FUNÇÃO ANONIMA
const saudacao = function() {
    console.log("Olá, mundo!");
};

const multiplicar = function(a, b) {
    return a * b;
};

//Características:
//Não tem nome próprio, o que as distingue de funções declarativas.
//São geralmente usadas em expressões de função ou passadas como argumentos para outras funções.


//INVOCAÇÃO DE FUNÇÕES ANONIMAS
console.log(multiplicar(2, 3)); // Retorna 6

