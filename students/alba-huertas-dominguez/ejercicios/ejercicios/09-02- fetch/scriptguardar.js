// Crea una función que pinte en tu Html todos los países que el nombre  en ingles sea mayor a 4 caracteres.
function pintarUno (pais){
    const nombre = document.createElement('p');
      nombre.textContent =pais.name_en;
      document.body.appendChild(nombre)
     }


function pintarTodos(paisarr){
    const cinco = paisarr.filter( v => v.name_en.length>25)
    cinco.forEach(f => pintarUno(f));
}

async function Start(){
    const paises = await countries();
    pintarTodos(paises);
}

Start();


// Pinta en tu html los paises con el nombre en español, código país y prefijo.
// Pinta en tu html los paises con el nombre en español, código país y prefijo.

function pintarundato (pais){
    const datos = document.createElement('p');
      datos.textContent =`Nombre${pais.name_es}codigo pais${pais.dial_code}prefijo${pais.code}`;
      document.body.appendChild(datos)
     }


function pintarTodosdatos(paisarr){
  paisarr.forEach(f => pintarundato(f));
}

async function Start(){
    const paises = await countries();
    pintarTodosdatos(paises);
}

Start();


countries().then(res => console.log(res))

function pintarundato(pais) {
    const datos = document.createElement('p');
    datos.classList.add('parrafo')
    datos.textContent = `Nombre ${pais.name_es} codigo pais ${pais.dial_code} prefijo ${pais.code}`;
    document.body.appendChild(datos)
}


function pintarTodosdatos(paisarr) {
    paisarr.forEach(f => pintarundato(f));
}

async function Start() {
    const paises = await countries();
    pintarTodosdatos(paises);
}

Start();




// Añadir un botón al anterior que tenga el texto "EN", al pulsarlo cambiarán los nombres de los paises a su versión en inglés.

const boton = document.createElement('button');
boton.textContent = 'EN';
document.body.appendChild(boton);


boton.addEventListener('click', async e => {

    const paises = await countries();
    console.log(paises)
    const ingles = document.querySelectorAll(".parrafo");

    ingles.forEach((v, i) => {

        v.textContent = `Nombre ingles ${paises[i].name_en} codigo pais ${paises[i].dial_code} prefijo ${paises[i].code}`



    }
    )

}

)
