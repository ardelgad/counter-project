// Tu código aquí.

//Selecciona los botones
let prev = document.querySelector(".prevBtn")

let next = document.querySelector(".nextBtn")

//Crea una variable para guardar el valor de contador
//Ponles un evento para que cuando hagas click el valor de la variable augmento o disminuya
//Has que el valor de la variable y el valor cambie/reemplaze el del html



let contador = 0;

prev.addEventListener ("click", function() {
    document.querySelector("#counter").innerHTML  = contador.toString();
    contador--;
    if(contador<-1){
        document.querySelector("#counter").style.color = "red"
    }
    return contador;
});

next.addEventListener ("click", function() {
    document.querySelector("#counter").innerHTML  = contador.toString();
    contador++;
    if(contador>1){
        document.querySelector("#counter").style.color = "green"
    }
    return contador;
});


