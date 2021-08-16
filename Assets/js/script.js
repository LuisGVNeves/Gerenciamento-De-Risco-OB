let divInferior = document.querySelector('.inferior');

// Capital da conta - A cada win vai ser alterado
let capital = document.querySelector('#capital');
capital.innerHTML = 300;



// Declaração das entradas e soros
// Entrada 1 
let entradaUm = divInferior.querySelector('#entrada-1').innerHTML = 2.75;
entradaUm = parseFloat(entradaUm);

let sorosUm = divInferior.querySelector('#soros-1').innerHTML = 4.68;
sorosUm = parseFloat(sorosUm);


// Entrada 2
let entradaDois = divInferior.querySelector('#entrada-2').innerHTML = 3.85;
entradaDois = parseFloat(entradaDois);
let sorosDois = divInferior.querySelector('#soros-2').innerHTML = 6.55;
sorosDois = parseFloat(sorosDois);


// Entrada 3
let entradaTres = divInferior.querySelector('#entrada-3').innerHTML = 2.65;
entradaTres = parseFloat(entradaTres);
let sorosTres = divInferior.querySelector('#soros-3').innerHTML = 4.50;
sorosTres = parseFloat(sorosTres);


// Entrada 4
let entradaQuatro = divInferior.querySelector('#entrada-4').innerHTML = 6.46;
entradaQuatro = parseFloat(entradaQuatro);
let sorosQuatro = divInferior.querySelector('#soros-4').innerHTML = 10.99;
sorosQuatro = parseFloat(sorosQuatro);


// Entrada 5
let entradaCinco = divInferior.querySelector('#entrada-5').innerHTML = 9.05;
entradaCinco = parseFloat(entradaCinco);
let sorosCinco = divInferior.querySelector('#soros-5').innerHTML = 15.39;
sorosCinco = parseFloat(sorosCinco);


// Entrada 6
let entradaSeis = divInferior.querySelector('#entrada-6').innerHTML = 9.92;
entradaSeis = parseFloat(entradaSeis);
let sorosSeis = divInferior.querySelector('#soros-6').innerHTML = 16.87;
sorosSeis = parseFloat(sorosSeis)


// Entrada 7
let entradaSete = divInferior.querySelector('#entrada-7').innerHTML = 16.64;
entradaSete = parseFloat(entradaSete);
let sorosSete = divInferior.querySelector('#soros-7').innerHTML = 28.29;
sorosSete = parseFloat(sorosSete);


// Entrada 8
let entradaOito = divInferior.querySelector('#entrada-8').innerHTML = 23.31;
entradaOito = parseFloat(entradaOito);
let sorosOito = divInferior.querySelector('#soros-8').innerHTML = 39.64;
sorosOito = parseFloat(sorosOito);


// Entrada 9
let entradaNove = divInferior.querySelector('#entrada-9').innerHTML = 29.90;
entradaNove = parseFloat(entradaNove);
let sorosNove = divInferior.querySelector('#soros-9').innerHTML = 50.82;
sorosNove = parseFloat(sorosNove);


// Entrada 10
let entradaDez = divInferior.querySelector('#entrada-10').innerHTML = 44.62;
entradaDez = parseFloat(entradaDez);
let sorosDez = divInferior.querySelector('#soros-10').innerHTML = 75.86;
sorosDez = parseFloat(sorosDez);


// Entrada 11
let entradaOnze = divInferior.querySelector('#entrada-11').innerHTML = 62.49;
entradaOnze = parseFloat(entradaOnze);
let sorosOnze = divInferior.querySelector('#soros-11').innerHTML = 106.24;
sorosOnze = parseFloat(sorosOnze);


// Entrada 12
let entradaDoze = divInferior.querySelector('#entrada-12').innerHTML = 87.51;
entradaDoze = parseFloat(entradaDoze);
let sorosDoze = divInferior.querySelector('#soros-12').innerHTML = 148.77;
sorosDoze = parseFloat(sorosDoze);



let ordensDB = document.querySelector('.ordens');

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
    contadorLoss++
    checaEntradas();
});


let win = document.querySelector('#win');
win.addEventListener('click',function(event){
    event.preventDefault();
    contadorWin++
    checaEntradas();
});


/*
    A cada win o contadorWIn vai ser incrementado e atingir o objetivo final que é 2 wins
*/
function checaEntradas(){
    if(contadorWin === 1 && contadorLoss === 0){
        ordensDB.innerHTML += `<p>Sessão com ${contadorWin} Win finalizada ! + 1.93</p> <br>`;
        capital.innerHTML = (parseFloat(capital.innerHTML) + entradaUm).toFixed(2);
        capital.style.color = "rgb(82, 230, 89)";
        capital.style.fontWeight = "bold";
    }
    if(contadorWin === 2 && contadorLoss === 0){
        ordensDB.innerHTML += `<p>Sessão com ${contadorWin} Win Finalizada ! + 3.27</p> <br>`;
        capital.innerHTML = (parseFloat(capital.innerHTML) + sorosUm).toFixed(2);
    }

    /*Caso dê sequencia de varias derrotas */
    if(contadorWin === 0 && contadorLoss === 1){
        ordensDB.innerHTML += `<p>Sessão finalizada com ${contadorLoss} Loss ! -2,75</p> <br>`;
        capital.innerHTML = (parseFloat(capital.innerHTML) - entradaUm).toFixed(2);
        capital.style.color = "rgb(255, 66, 66)";
        capital.style.fontWeight = "bold";
    }
    if(contadorWin === 0 && contadorLoss === 2){
        ordensDB.innerHTML += `<p>Sessão finalizada com ${contadorLoss} Loss ! -3,85</p> <br>`;
        capital.innerHTML = (parseFloat(capital.innerHTML) - entradaDois).toFixed(2);
        
    }
    if(contadorWin === 0 && contadorLoss === 3){
        ordensDB.innerHTML += `<p>Sessão finalizada com ${contadorLoss} Loss ! -2,65</p> <br>`;
        capital.innerHTML = (parseFloat(capital.innerHTML) - entradaTres).toFixed(2);
    }
    if(contadorWin === 0 && contadorLoss === 4){
        ordensDB.innerHTML += `<p>Sessão finalizada com ${contadorLoss} Loss ! -6,46</p> <br>`;
        capital.innerHTML = (parseFloat(capital.innerHTML) - entradaQuatro).toFixed(2);
    }
    if(contadorWin == 0 && contadorLoss == 5){
        ordensDB.innerHTML += `<p>Sessão finalizada com ${contadorLoss} Loss ! -9,05</p> <br>`;
        capital.innerHTML = (parseFloat(capital.innerHTML) - entradaCinco).toFixed(2);
    
    }
    if(contadorWin === 0 && contadorLoss === 6){
        ordensDB.innerHTML += `<p>Sessão finalizada com ${contadorLoss} Loss ! -9,92</p> <br>`;
        capital.innerHTML = (parseFloat(capital.innerHTML) - entradaSeis).toFixed(2);
    }
    if(contadorWin === 0 && contadorLoss === 7){
        ordensDB.innerHTML += `<p>Sessão finalizada com ${contadorLoss} Loss ! -16,64</p> <br>`;
        capital.innerHTML = (parseFloat(capital.innerHTML) - entradaSete).toFixed(2);
    }
    if(contadorWin === 0 && contadorLoss === 8){
        ordensDB.innerHTML += `<p>Sessão finalizada com ${contadorLoss} Loss ! -23,31</p> <br>`;
        capital.innerHTML = (parseFloat(capital.innerHTML) - entradaOito).toFixed(2);
        capital.style.color = "rgb(255, 46, 36)";
    }
    if(contadorWin === 0 && contadorLoss === 9){
        ordensDB.innerHTML += `<p>Sessão finalizada com ${contadorLoss} Loss ! -29,90</p> <br>`;
        capital.innerHTML = (parseFloat(capital.innerHTML) - entradaNove).toFixed(2);
    }
    if(contadorWin === 0 && contadorLoss === 10){
        ordensDB.innerHTML += `<p>Sessão finalizada com ${contadorLoss} Loss ! -44,62</p> <br>`;
        capital.innerHTML = (parseFloat(capital.innerHTML) - entradaDez).toFixed(2);
    }
    if(contadorWin === 0 && contadorLoss === 11){
        ordensDB.innerHTML += `<p>Sessão finalizada com ${contadorLoss} Loss ! -62,49</p> <br>`;
        capital.innerHTML = (parseFloat(capital.innerHTML) - entradaOnze).toFixed(2);
    }
    if(contadorWin === 0 && contadorLoss === 12){
        ordensDB.innerHTML += `<p>Sessão finalizada com ${contadorLoss} Loss ! -87,51</p> <br>`;
        capital.innerHTML = (parseFloat(capital.innerHTML) - entradaDoze).toFixed(2);
    }
    

}

