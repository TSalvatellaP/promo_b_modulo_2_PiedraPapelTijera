
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
6. Finalizar el juego en 10 partidas, aparece el boton reinicio y esconde el boton jugar.
7. al finalizar el juego se muestra quien ha ganado.
8. al clickar reinicio desaparece este boton, se resetea todo a 0 y aparece el boton jugar
*/

const select = document.querySelector('.js-selector');
const btn = document.querySelector('.js-btn');
const play = document.querySelector('.js-play');
const span_gamer = document.querySelector('.js-gamer1');
const span_computer = document.querySelector('.js-computer');
const btn_reload = document.querySelector('.js-btnReload');
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

function gameOver(){
    if (countClick === 10){
        if (pointGamer > pointComputer){
            playresult ('HAS GANADO EL JUEGO');
        } else if (pointGamer < pointComputer){
            playresult ('HAS PERDIDO EL JUEGO');
        } else {
            playresult ('JUEGO EMPATADO');
        }
    btn.classList.add('hidden');
    btn_reload.classList.remove('hidden');

    }
}

//Las funciones a las que llamo cuando doy click
function handleClick(event) {
    event.preventDefault();
    const valueSelect = select.value;
    const returnMoveAleatory = moveAleatory ();
    //Vuelvo a decir cuales son las constantes gamer y computer ahora
    compareResult(valueSelect, returnMoveAleatory);
        //console.log(returnMoveAleatory);
    gameOver()

}

btn.addEventListener('click', handleClick);


//las funciones que llamo cuando doy al boton reset
function handleReset (event){
    event.preventDefault();
    btn.classList.remove('hidden');
    btn_reload.classList.add('hidden');
    pointGamer = 0;
    pointComputer = 0;
    countClick = 0;
    playresult ('Vamos a jugar!');
    paintScore ();
    select.value = "inicio";

}
btn_reload.addEventListener('click', handleReset);


