let banca = document.querySelector('#banca');


let divInferior = document.querySelector('.inferior');


let entradaUm = divInferior.querySelector('#entrada-1');
let sorosUm = divInferior.querySelector('#soros-1');

let entradaDois = divInferior.querySelector('#entrada-2');
let sorosDois = divInferior.querySelector('#soros-2');


let entradaTres = divInferior.querySelector('#entrada-3');
let sorosTres = divInferior.querySelector('#soros-3');






/*
    - Esse addEventListener vai escutar e parar o disparo do evento, e invocar a função checaLoss() e o checaWin()
    - Eu preciso disso para checar quantas vezes o usuário clicou no botão para eu fazer a lógica do gerenciamento
    - O contador vai ser o espião que vai ter o valor [0], toda vez que o usuário clicar no loss ou no botão, 
    o contador vai ser incrementado, meu objetivo é que o contador finalize com 2 dois cliques, então a sessão
    será finalizada.
*/
let contadorWin = 0;
let contadorLoss = 0;

let loss = document.querySelector('#loss');
loss.addEventListener('click',function(event){
    event.preventDefault();
    contadorLoss++;
    checaLoss();
});

let win = document.querySelector('#win');
win.addEventListener('click',function(event){
    event.preventDefault();
    contadorWin++;
    checaWin();
});


function checaWin(){
    if(contadorWin === 1){
        console.log('um win')
    }
    if(contadorWin === 2){
        console.log('Dois wins, sessão finalizada')
    }

}

function checaLoss(){
    console.log('Loss');
}