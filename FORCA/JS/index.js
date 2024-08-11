var palavra_aleatoria;
var tamanho_palavra_aleatoria;
var tracos;
var letras_erradas;

function Forca(){
     
     letras_erradas = [""];
    
     var palavras = ["javascript", "programacao", "computador","desenvolvimento"];

     var tamanho_lista = palavras.length;

     var indice_aleatorio = Math.floor(Math.random() * tamanho_lista);
    
     palavra_aleatoria = palavras[indice_aleatorio];
    
     tamanho_palavra_aleatoria = palavra_aleatoria.length;
    
     tracos = Array(tamanho_palavra_aleatoria).fill("_") 

     document.getElementById('tracos').innerHTML = tracos.join(" ");
     document.getElementById('titulo_letras_erradas').innerHTML = "Letras Erradas";

     var Jogo_Div = document.getElementById('jogo');

     Jogo_Div.innerHTML="";
     
     var input_letra = document.createElement('input');
     input_letra.id = "letra_usuario";
     input_letra.placeholder = "Digite uma letra";

     var botao_verifica = document.createElement('button');
     botao_verifica.type="button";
     botao_verifica.textContent = "Verificar Letra";
     botao_verifica.onclick = Verificar

     Jogo_Div.appendChild(input_letra);
     Jogo_Div.appendChild(botao_verifica);




    
     
     /* TENTE USAR UM ALERT PRA O SUSUÁRIO DIGITAR AS LETRAS E VOCE VERIFICAR DEPOIS(ESSE ERA O CÓDIGO QUE ESTAVAMOS UTILIZANDO)
     /*setTimeout(function(){
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
     },100);*/

};

function Verificar(){
    
        var letra_enviada = document.getElementById("letra_usuario");
        
        var letra = letra_enviada.value.toLowerCase();
        
        if (palavra_aleatoria.includes(letra)){
            for(let i = 0; i < tamanho_palavra_aleatoria;i++){
                if(letra === palavra_aleatoria[i]){
                    tracos[i] = letra;
                };
            };
            document.getElementById("tracos").innerHTML=tracos.join(" ");
        }else{
             letras_erradas.push(letra);
             document.getElementById("letras_erradas").innerHTML = letras_erradas.join(" ");
                };
        
        if (!tracos.includes("_")){
            alert("Parabéns,você venceu");
        };
        
    };






    
    

