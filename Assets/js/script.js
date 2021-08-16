// Capital da conta - onde cada win vai ser somado ou subtraido a ela
let capital = document.querySelector('#capital');
capital.innerHTML = 300;


// Onde estão acopladas as minhas variaveis de entrada e soros
let divInferior = document.querySelector('.inferior');


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



// Esse é o meu "mini" banco de dados onde fica aparecendo as ordens dadas do usuário
let ordensDB = document.querySelector('.ordens');



/*
    - Esses são responsaveis por capturar o clique nas caixas WIN E LOSS e fazer com que o meu contadorWin
    e contadorLoss sejam incrementados a cada clique, graças a eles eu consigo  fazer a lógica nas funções 
*/

let contadorWin = 0;
let contadorLoss = 0;

let loss = document.querySelector('#loss');
loss.addEventListener('click',function(event){
    event.preventDefault();
    contadorLoss++;
    primeiraEntrada();
    segundaEntrada();
});


let win = document.querySelector('#win');
win.addEventListener('click',function(event){
    event.preventDefault();
    contadorWin++;
    primeiraEntrada();
    segundaEntrada();
});


/*
    1. Se contadorWin for igual a um clique E contadorLOSS não tiver nenhum clique
        - Eu vou adicionar o lucro da primeira entrada 2.75 = 1.93
        - E vou mandar alterar na minha div que está meu capital

    2. Se contadorWin tiver dois cliques e contadorLOSS não teve nenhum, isso significa que batemos a meta
        - Então eu vou adicionar ao meu capital o lucro da mão de soros

    3. Se o contadoWIn tiver um clique e contalosLOSS tiver um clique, então houve empate e tivemos prejuizo
        - Então como a 1 mão já foi somada na lógica de cima, eu só preciso retirar o valor do sorosUM

    4. Se o contadorWin tiver nenhum clique e o contadosLOSS tiver um clique, isso significa que já tomamos
    prejuizo de cara, então tiramos o valor da primeiraEntrada

    5. Por fim, invoco a 2 função para dar conta caso haja o 1 loss e assim vou indo fazer até a 12 função
    onde acaba o gerenciamento
*/
function primeiraEntrada(){
    if(contadorWin === 1 && contadorLoss === 0){
        ordensDB.innerHTML += `<p>Sessão com ${contadorWin} Win finalizada ! + 1.93</p> <br>`;
        capital.innerHTML = (parseFloat(capital.innerHTML) + entradaUm).toFixed(2);
        capital.style.color = "rgb(82, 230, 89)";
        capital.style.fontWeight = "bold";
    }
    if(contadorWin === 2 && contadorLoss === 0){
        ordensDB.innerHTML += `<p>Sessão com ${contadorWin} wins META DO DIA finalizada ! + 3.27</p> <br>`;
        capital.innerHTML = (parseFloat(capital.innerHTML) + sorosUm).toFixed(2);

    }
    if(contadorWin === 1 && contadorLoss === 1){
        ordensDB.innerHTML += `<p>Sessão com ${contadorWin} Win e ${contadorLoss} loss Finalizada ! - 4.68</p> <br>`;
        capital.innerHTML = (parseFloat(capital.innerHTML) - sorosUm ).toFixed(2);
    }

    //Caso tenha dado loss vou invocar a segunda função
    if(contadorWin === 0 && contadorLoss === 1){
        ordensDB.innerHTML += `<p>Sessão com ${contadorLoss} loss STOP LOSS BATIDO ! - 2.75</p> <br>`;
        capital.innerHTML = (parseFloat(capital.innerHTML) - entradaUm).toFixed(2);
        capital.style.color = "rgb(255, 66, 66)";
        capital.style.fontWeight = "bold";
    }
    segundaEntrada();
    
}
function segundaEntrada(){
    if(contadorLoss === 2 && contadorWin === 0){
        ordensDB.innerHTML += `<p>Sessão com ${contadorLoss} loss STOP LOSS BATIDO ! - 3.85</p> <br>`;
        capital.innerHTML = (parseFloat(capital.innerHTML) - entradaDois).toFixed(2);
    }
}


/*
    function checaEntradas(){


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
*/


