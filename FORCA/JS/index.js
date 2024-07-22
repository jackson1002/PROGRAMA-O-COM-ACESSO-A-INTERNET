

function Forca(){
     var vitoria = false

    
     const palavras = ["javascript", "programacao", "computador","desenvolvimento"];

     var tamanho_lista = palavras.length;

     var indice_aleatorio = Math.floor(Math.random() * tamanho_lista);
    
     var palavra_aleatoria = palavras[indice_aleatorio];
    
     var tamanho_palavra_aleatoria = palavra_aleatoria.length;
    
     tracos = Array(tamanho_palavra_aleatoria).fill("_")

     document.getElementById('tracos').innerHTML = tracos;
    
     setTimeout(function(){
        var letra_usuario = prompt("Digite uma letra: ");
        if(palavra_aleatoria.includes(letra_usuario)){
            for(const letra of palavra_aleatoria){
                indice = 0
                if (letra === letra_usuario){
                    tracos[indice] = letra_usuario
                    indice = indice + 1
                };
            };
        };
     },100);

    

    
     document.getElementById('tracos').innerHTML = tracos;


};

