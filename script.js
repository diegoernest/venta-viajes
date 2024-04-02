import { barcelona , roma , parís , londres } from './ciudades.js'

// Obtener los elementos del DOM 
let enlaces =document.querySelectorAll('a')
let tituloElemento = document.getElementById('titulo')
let subTituloElemento = document.getElementById('subtitulo')
let parrafoElemento = document.getElementById('parrafo') 
let precioElemento = document.getElementById('precio') 


console.log(enlaces)  

// Agregar un evento clik a cada enlace 
enlaces.forEach(function (enlace) { 
    enlace.addEventListener('click', function () {
        //remover la clase active de todos los enlaces 
        enlaces.forEach(function (enlace) {
            enlace.classList.remove('active');
        });

        //Agregar la clase active al enlace actual 
        this.classList.add('active')
        //obtener el contenido correspondiente segun el enlace 
        let contenido = obtenerContenido(this.textContent) 

        tituloElemento.innerHTML = contenido.titulo
        subTituloElemento.innerHTML = contenido.subtitulo
        parrafoElemento.innerHTML = contenido.parrafo 
        precioElemento.innerHTML = contenido.precio 
    });

});
       //funcion para traer la informacion correcta desde ciudades . js 
function obtenerContenido(enlace){
    let contenido = {
        'Barcelona' : barcelona,
        'Roma' : roma,
        'París' : parís,
        'Londres' : londres
    };
    return contenido[enlace];
}






