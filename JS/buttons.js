function aviso() {
    alert("Bienvenido al mundo JavaScript");
}

function confirmacion() {
    //Los valores que se pueden almacenar la variable confirmacion son true o false

    let confirmacion = confirm("Desea salir de la sesion?");

    /* Para imprirmir una variable en una cadena podemos utilizar las comillas simples inversas `` 
    y luego hacemos el llamado de la variable con ${aqui debera escribir el nombre de la variable}
     */

    alert(`Valor seleccionado ${confirmacion}`);
}

function capturarDatos() {
    let nombre = prompt("Cual es su nombre?");
    //Note que en campo del prompt se mostrara 0 por defecto

    let edad = prompt("Cual es tu edad?", 0);

    alert(`Su nombre es ${nombre} y su edad ${edad}`);
}

function dibujarParrafo() {
    let parrafo = prompt(
        "Escriba la informacion que sea visualizar en el parrafo"
    );

    /* 
        Utilizaremos las API DOM para accceder al momento 
        <p id= "idParrafo"></p> que hemos creado en nuestro documento HTML
    */

    const p = document.querySelector("#idParrafo");
    p.innerHTML = parrafo;
}
