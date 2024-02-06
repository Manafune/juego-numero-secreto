let numeroSecreto = 0;
let intentos = 1;
let listaNumerosSorteados = []
let numeroMaximo = 10;
let limiteIntentos = 5;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
console.log(numeroSecreto)
function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if(intentos <= limiteIntentos){
        if(numeroDeUsuario === numeroSecreto){
            asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
            document.getElementById('reiniciar').removeAttribute("disabled");
        }else{
            if (numeroDeUsuario < numeroSecreto) {
                asignarTextoElemento('p', 'El número secreto es mayor');
            } else {
                asignarTextoElemento('p', 'El número secreto es menor');
            }
            intentos++;
            limpiarCaja();
        }
    }else{
        mostrarMensajeYReiniciar();
    }
    

    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function condicionesIniciales(){
    asignarTextoElemento("h1", "Juego del número secreto");
    asignarTextoElemento("p",`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto=generarNumeroSecreto();
    intentos=1;
}

function reiniciarJuego() {
    //limpiar la caja
    limpiarCaja();
    //Indicar mensaje de intervalo de numeros
    //generara el numero aleatorio
    //Inicializar el numero de intentos
    condicionesIniciales();
    //deshabilitar el boton de nuevo juego
    document.getElementById('reiniciar').setAttribute("disabled", "true");
    
}

function generarNumeroSecreto() {
    // Genera un número secreto entre 1 y 10
   let numeroGenerado = Math.floor(Math.random() *numeroMaximo)+1;
   console.log(numeroGenerado);
   console.log(listaNumerosSorteados);
    //si ya sorteamos todos los numeros
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
    }else{
        //Si el numeroGenerado esta incluido en la lista
        if(listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }


}

function mostrarMensajeYReiniciar() {
    asignarTextoElemento('p', 'Has agotado todos los intentos. Reiniciando el juego.');
    // Esperar 2 segundos antes de reiniciar el juego
    setTimeout(reiniciarJuego, 2000); 
}

condicionesIniciales();