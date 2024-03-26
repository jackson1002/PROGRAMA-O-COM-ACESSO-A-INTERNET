/* array é uma lista em js*/


/*forEach*/
var listaDeFrutas = ['Maçãs','Uvas','Bananas','Morangos']
forEach() /*é um for que percorre uma lista*/


/*indexOf*/
var posicao = listaDeFrutas.indexOf("Bananas") /*encontra o indice daquele item na lista*/


/* Adicionar - itens da lista*/

/* Adiciona No final da lista */
listaDeFrutas.push("Laranjas")

/* Adiciona no inicio da lista*/
listaDeFrutas.unshift("Kiwis")

/* Remover itens da lista */


/* Remove o primeiro item*/
listaDeFrutas.shift()

/* Remove o último item */

listaDeFrutas.pop()

/*Remover itens específicos pelo nome do item*/

listaDeFrutas.shift('Bananas')

/*ou*/

listaDeFrutas.pop("Bananas")


/*Remover itens específicos pelo índice*/

var pos = listaDeFrutas.indexOf("Uvas")

listaDeFrutas.splice(pos)

/*Pra saber o tamanho do array*/

var tam = listaDeFrutas.length()

/* verifica se a variável usada é um array*/

var isArray = listaDeFrutas.isArray() /*Retorna True ou False*/













