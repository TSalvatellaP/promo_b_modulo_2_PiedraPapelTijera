
'use strict';
/*Piedra papel, tijera
1. Crear html y css> select, boton, resultado y titles
2. Al arrancar la pagina> vamos a jugar
3. Crear numero aleatorio  de 1 y 9
    = o < 3 --->piedra
    = > 7 ----> papel
    si no ---. tijera
4. Comparar movimientos de la jugadora y el ordenador.
5. Traer las class al js crear las variables
*/

const select = document.querySelector('.js-selector');
const btn = document.querySelector('.js-btn');
const play = document.querySelector('.js-play');
const span_gamer = document.querySelector('.js-gamer1');
const span_computer = document.querySelector('.js-computer');
let pointGamer = 0;
let pointComputer = 0;
let countClick = 0;


function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
    
    }

//Resultado segun numero random generado max numero 10
function moveAleatory () {
    const numRandom = getRandomNumber(9);
    let computerResult = '';
   //console.log(numRandom);
    if (numRandom <= 3) {
        computerResult = "Piedra";
    }
    else if (numRandom >= 7) {
        computerResult = "Papel";
    } else {
        computerResult = "Tijera";
    }
    return computerResult;
}

//Funcion para pintar la frase del resultado en el htmm
function playresult (message){
    play.innerHTML = message;
}


/*Generar una funcion que compare los resultados de gamer y computer. Creo unas constantes gamer y computer
Condicionales del juego y contar los clicks para contar las partidas*/
function compareResult(gamer, computer){
    countClick++;
     //console.log (gamer,computer);
    if (gamer === computer) {
        playresult ('EMPATE');
    }
    else if (
        (gamer === "Piedra" && computer === "Tijera") ||
        (gamer === "Papel" && computer === "Piedra") ||
        (gamer === "Tijera" &&computer === "Papel") )
        {
            playresult ('HAS GANADO');
            pointGamer++;
    } 
    else{
        playresult ('HAS PERDIDO');
        pointComputer++;
   
    }
    paintScore ();
   
}

//funcion para pintar la puntuacion en el html
function paintScore (){
    span_gamer.innerHTML = `${pointGamer}`;
    span_computer.innerHTML = `${pointComputer}`;
}


//Las funciones a las que llamo cuando doy click
function handleClick(event) {
    event.preventDefault();
    const valueSelect = select.value;
    const returnMoveAleatory = moveAleatory ();
    //Vuelvo a decir cuales son las constantes gamer y computer ahora
    compareResult(valueSelect, returnMoveAleatory);
   
        //console.log(returnMoveAleatory);

}

btn.addEventListener('click', handleClick);

