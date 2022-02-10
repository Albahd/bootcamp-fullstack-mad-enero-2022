


// //Vamos a crear una app de Paises, para los ejercicios d nos traeremos de la siguiente url los datos de países usando la api  fetch, 'https://gist.githubusercontent.com/Yizack/bbfce31e0217a3689c8d961a356cb10d/raw/107e0bdf27918adea625410af0d340e8fc1cd5bf/countries.json'
// Mediante fetch obtén todos los datos que trae la url de los pauses y píntalo por consola.
// Crea una función que pinte en tu Html todos los países que el nombre  en ingles sea mayor a 4 caracteres.
// Pinta en tu html los paises con el nombre en español, código país y prefijo.
// Añadir un botón al anterior que tenga el texto "EN", al pulsarlo cambiarán los nombres de los paises a su versión en inglés.
// Refactorizar el código anterior para lograr que al introducir "Arg" o "arg" aparezca un listado con la información de todos los paises que empiecen por 'arg'.
// Mostrar en un html los paises cuyo prefijo telefónico se encuentre en el rango 20<x<600. Además debemos mostrar cuantos paises son en total.



// Mediante fetch obtén todos los datos que trae la url de los pauses y píntalo por consola.
async function countries() {
    const q1 = await fetch(`https://gist.githubusercontent.com/Yizack/bbfce31e0217a3689c8d961a356cb10d/raw/107e0bdf27918adea625410af0d340e8fc1cd5bf/countries.json`,);
    const data = await q1.json();
    console.log(data.countries);
    return data.countries


}




// Añadir un botón al anterior que tenga el texto "EN", al pulsarlo cambiarán los nombres de los paises a su versión en inglés.


// Refactorizar el código anterior para lograr que al introducir "Arg" o "arg" aparezca un listado con la información de todos los paises que empiecen por 'arg'.

let buscador = document.createElement('input');
buscador.classList.add('buscador')
document.body.appendChild(buscador);
const boton2 = document.createElement('button');





function pintarUno(pais) {
    const nombre = document.createElement('p');
    nombre.classList.add('parrafo')
    nombre.textContent = pais.name_en;
    document.body.appendChild(nombre)
}
function pintarTodos(paisarr) {
    paisarr.forEach(f => pintarUno(f));
}

// function pintarTodos(paisarr) {
//     // const arg = paisarr.filter(v => v.name_es.startsWith('Arg'));
//     arg.forEach(f => pintarUno(f));
// }

async function Start() {
    const paises = await countries();
    pintarTodos(paises);
}

Start();


buscador.addEventListener('keyup', async e => {

    const paises = await countries();
    const emp = document.querySelectorAll(".parrafo");
    const busca = document.querySelector(".buscador")
    const valor = busca.value
    console.log(valor)
    const nombres = paises.filter(v => v.name_es.startsWith(valor));
    console.log(nombres);
    emp.forEach(v => v.remove()
    )

    nombres.forEach(f => pintarUno(f)) ;
    pintarTodos();

}
)





