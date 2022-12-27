let input1 = document.getElementById('_1')
let input2 = document.getElementById('_2')
let btn = document.querySelector('button')
let result = document.querySelector('#result')
let form = document.querySelector('#formulario')

form.addEventListener('submit',calcular)

function calcular(event){
    event.preventDefault();
result.innerText ='El Resultado es: ' + (+input1.value + +input2.value)+ ' \n por favor no lo copies y pegues en otro lado'
}

result.addEventListener("copy",aleeerta)

function aleeerta(){
    while(true){
        alert('estas copiando')
    }

}