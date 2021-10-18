
function numerosArray () {

    const itemsLista = document.querySelectorAll(`li`);
    const arrayNumeros = []

    for (let i= 0; i < itemsLista.length; i++) {
        arrayNumeros.push(Number(itemsLista[i].textContent))
    }
    return arrayNumeros;
} 

function calcularPromedioArray () { 
    arrayNumeros = numerosArray()
    let acumulador = 0;
    
    for (let i = 0; i < arrayNumeros.length; i++) {
        acumulador += arrayNumeros[i]
    }
    return acumulador / arrayNumeros.length
}

let textoPromedio = `El promedio es de ${calcularPromedioArray()}`
document.querySelector(`#em1`).innerText = textoPromedio


function numeroMenorArray () {
    arrayNumeros = numerosArray()
    let menor;

    for(let i = 0; i < arrayNumeros.length; i++) {
        if(i===0) {
            menor = arrayNumeros[i]
        } else if (arrayNumeros[i] < menor) {
            menor = arrayNumeros[i];
        }
    }
    return menor;
}

let numeroMenor = `El número más pequeño es ${numeroMenorArray()}`
document.querySelector(`#em2`).innerText = numeroMenor;

function numeroMayorArray () {
    arrayNumeros = numerosArray()
    let mayor;

    for (let i= 0; i < arrayNumeros.length; i++) {
        if(i===0) {
            mayor = arrayNumeros[i]
        } if (arrayNumeros[i] > mayor) {
            mayor = arrayNumeros[i];
        }
     }
    return mayor;
}

let numeroMayor = `El numero más grande es ${numeroMayorArray()}`
document.querySelector(`#em3`).innerText = numeroMayor;


