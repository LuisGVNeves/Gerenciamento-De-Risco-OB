// Capital da conta - onde cada win vai ser somado ou subtraido a ela
let capital = document.querySelector('#capital');
capital.innerHTML = 300;

// Atribuição das entradas que estão na div
let entradas = [0,2.75,3.85,2.65,6.46,9.05,9.92,16.64,23.31,29.90,44.65,62.49,87.51];
let [V1,V2,V3,V4,V5,V6,V7,V8,V9,V10,V11,V12] = entradas;


// Atribuição do lucro que estão nas variaveis
let lucro =[0,1.93,3.27,2.70,4.58,1.85,3.15,4.53,7.69,6.34,10.77,6.95,11.81,11.65,19.81,16.32,27.74,20.93,35.58,31.23,53.10,43.74,74.37,61.26,104.14]; 
let [entradaUm,sorosUm,entradaDois,sorosDois,entradaTres,sorosTres,entradaQuatro,sorosQuatro,entradaCinco,sorosCinco,entradaSeis,sorosSeis,entradaSete,sorosSete,entradaOito,sorosOito,entradaNove,sorosNove,entradaDez,sorosDez,entradaOnze,sorosOnze,entradaDoze,sorosDoze] = lucro;


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
    erreTodasSeguidas()
});


let win = document.querySelector('#win');
win.addEventListener('click',function(event){
    event.preventDefault();
    contadorWin++;
    acertaTodasSeguidas()
});

/*
    - De acordo com a probabilidade só podemos ter 4 cases aqui:
    1.Usuario acerta todas as entradas
    2.Usuario erra todas as entradas
    3. Usuario erra e acerta:  LOSS x WIN  LOSS x WIN  LOSS x WIN  LOSS x WIN  ...
    4. Usuario acerta e erra:  WIN x LOSS  WIN x LOSS  WIN x LOSS  WIN x LOSS
*/

// Caso o usuario acerte todas as entradas
function acertaTodasSeguidas(){
    for(let i=contadorWin; i <= contadorWin && i < 25; i++){
        if(i === 2 || i === 4 || i === 6 || i === 8 || i === 10 || i === 12 || i === 14 || i === 16 || i === 18 || i === 20 || i === 22){
            ordensDB.innerHTML += `<p>Sessão com ${contadorWin} Win META BATIDA COM SUCESSO ! + ${lucro[i]}</p> <br>`;
            capital.innerHTML = (parseFloat(capital.innerHTML) + lucro[i]).toFixed(2);
        }
        else{
            ordensDB.innerHTML += `<p>Sessão com ${contadorWin} Win finalizada ! + ${lucro[i]}</p> <br>`;
            capital.innerHTML = (parseFloat(capital.innerHTML) + lucro[i]).toFixed(2);
        }
    }
}
// Caso o usuario erre todas as entradas
function erreTodasSeguidas(){
    for(let i=contadorLoss; i <= contadorLoss && i < 25; i++){
        if(i === 2 || i === 4 || i === 6 || i === 8 || i === 10 || i === 12 || i === 14 || i === 16 || i === 18 || i === 20 || i === 22){
            ordensDB.innerHTML += `<p>Sessão com ${contadorLoss} loss STOP LOSS ATINGIDO ! - ${entradas[i]}</p> <br>`;
            capital.innerHTML = (parseFloat(capital.innerHTML) - entradas[i]).toFixed(2);
        }
        else{
            ordensDB.innerHTML += `<p>Sessão com ${contadorLoss} loss finalizada ! - ${entradas[i]}</p> <br>`;
            capital.innerHTML = (parseFloat(capital.innerHTML) - entradas[i]).toFixed(2);
        }
    }
}
