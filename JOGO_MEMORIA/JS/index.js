document.addEvwntListener('DOMContentLoaded', () =>{})
const cartas = [
    {
        name:"empada1",img:'imagens/empada1.jpg'
    },
    {
        name:"empada2",img:"imagens/empada2.jpg"
    },
    {
        name:"empada3",img:"imagens/empada3.jpg"
    },
    {
        name:"empada4",img:"imagens/empada4.jpg"
    },
    {
        name:"empada1",img:'imagens/empada1.jpg'
    },
    {
        name:"empada2",img:"imagens/empada2.jpg"
    },
    {
        name:"empada3",img:"imagens/empada3.jpg"
    },
    {
        name:"empada4",img:"imagens/empada4.jpg"
    }
];


function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    };
};

shuffle(cartas);

const board = document.querySelector('#game-board');
const resultView = document.createElement('div');  
resultView.setAttribute('id', 'result');
document.body.appendChild(resultView);


let cartasEscolhidas = [];
let cartasEscolhidasId = [];
let cartasCombinadas = [];


/*Coloca as cartas no tabuleiro do jogo que já está criado em Board*/
function createBoard(){
    for (let i = 0 ; i < cartas.length ; i++){
        const carta = document.createElement("img");
        carta.setAttribute('src','imagens/logojess.jpeg');
        carta.setAttribute('data-id',i);
        carta.addEventListener('click',flipCard);
        board.appendChild(carta);
    };
};

/*Verifica se duas cartas foram selecionadas e se sim,vira elas com suas imagens*/
function flipCard() {
    let cartaId = this.getAttribute('data-id');
    if (!cartasEscolhidasId.includes(cartaId) && cartasEscolhidasId.length < 2) {  
        cartasEscolhidas.push(cartas[cartaId].name);
        cartasEscolhidasId.push(cartaId);
        this.setAttribute('src', cartas[cartaId].img);
        if (cartasEscolhidas.length === 2) {
            setTimeout(checkForMatch, 500);
        };
    };
};








