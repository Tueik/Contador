// Necesito que este contador haga 3 cosas
// Incremente de uno en uno
// Decremente de uno en uno
// Borre toda la cuenta
// Necesitamos iniciar en 0

var valorContador = 0; // Inicializamos nuestra variable en 0
function incrementar (){
    valorContador++; //incrementar de 1 en 1
    document.getElementById("contador").innerHTML = valorContador;

}

function decrementar() {
    valorContador--; //decrementar de 1 en 1
    document.getElementById("contador").innerHTML = valorContador;
}

function resetear() {
    valorContador = 0;
    document.getElementById("contador").innerHTML = valorContador;
}


