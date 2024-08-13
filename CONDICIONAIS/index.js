//IF,ELSE IF E ELSE

let idade = 18

if(idade < 18){
    console.log("Você é menor de idade.");
}
else if(idade === 18){
    console.log("Você tem 18 anos");
}

else{
    console.log("Você é maior de idade");
}

//SWITCH
//O switch é uma alternativa ao if para quando você tem várias condições relacionadas à mesma variável ou expressão.

let cor = 'vermelho';

switch (cor) {
    case 'azul':
        console.log("A cor é azul.");
        break;
    case 'vermelho':
        console.log("A cor é vermelha.");
        break;
    case 'verde':
        console.log("A cor é verde.");
        break;
    default:
        console.log("Cor não reconhecida.");
        break;
}

//Nesse exemplo, a variável cor é comparada com cada caso. Quando há uma correspondência, o bloco de código correspondente é executado. O default é executado se nenhum dos casos corresponder.

//LOOPS

//FOR
//O loop for é usado quando você sabe quantas vezes deseja repetir um bloco de código

for (let i = 0; i < 5; i++) {
    console.log("O número é " + i);
}
//Nesse exemplo:
//let i = 0: Inicia o contador i com 0.
//i < 5: Define a condição para continuar o loop (até que i seja menor que 5).
//i++: Incrementa i em 1 a cada iteração.


//Aqui está o que acontece:

//let i = 0: O loop começa com i igual a 0.
//i < 5: A condição é verificada antes de cada iteração. O loop continua enquanto i for menor que 5.
//i++: Ao final de cada iteração, i é incrementado em 1.
//Portanto, o loop executa o código com i assumindo os valores 0, 1, 2, 3, e 4. Quando i atinge 5, a condição i < 5 não é mais verdadeira, e o loop termina.

//WHILE
//O loop while continua a executar um bloco de código enquanto uma condição for verdadeira.

let i = 0;

while (i < 5) {
    console.log("O número é " + i);
    i++;
}


//DO WHILE
//O loop do while é semelhante ao while, mas garante que o código seja executado pelo menos uma vez, mesmo que a condição inicial seja falsa.

let numero = 10;

do {
    console.log("O número é " + numero);
    numero++;
} while (numero < 5);

//let numero = 10;: Aqui, a variável numero é inicializada com o valor 10.
//Bloco do {...}: Esse bloco será executado pelo menos uma vez.
//numero++;: Dentro do bloco, numero é incrementado em 1.
//while (numero < 5);: Após a execução do bloco, a condição é verificada. Se numero for menor que 5, o loop continuará; caso contrário, ele terminará.

//Mesmo que a condição numero < 5 seja falsa desde o início (porque 10 não é menor que 5), o código dentro do bloco do será executado uma vez antes da condição ser verificada.

//Então, o output no console será:O número é 10
