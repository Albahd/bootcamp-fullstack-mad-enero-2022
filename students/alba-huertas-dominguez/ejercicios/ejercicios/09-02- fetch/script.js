


// //1- Crear una función que realice una petición a nuestro backend (url: https://mocki.io/v1/e4b35a17-bbdd-481b-a673-174a1ff1be88, method: GET) y pinte el resultado por pantalla. Realizar el ejercicio utilizando then. Responder a las siguientes preguntas:
// ¿Qué tipo de datos tiene la respuesta?
// ¿Cuál es la ip y el puerto de la petición?
// ¿Cuántos atributos tiene nuestra respuesta?
// ¿Qué tipo de datos tiene esos atributos?
// ¿Qué código http de respuesta hemos recibido?


function inf() {
    return fetch(`https://mocki.io/v1/e4b35a17-bbdd-481b-a673-174a1ff1be88`)
        .then(r => r.json())
        .then(p => p);

}

inf();
// ¿Qué tipo de datos tiene la respuesta?
console.log(typeof inf())
// ¿Cuál es la ip y el puerto de la petición?
' obtener de la pestaña de red'

// ¿Cuántos atributos tiene nuestra respuesta?
1

//// ¿Qué tipo de datos tiene esos atributos?
'objeto'

// ¿Qué código http de respuesta hemos recibido?

200



//2 - Repetir la función del ejercicio 1 pero esta vez utilizando async/await
//3- Imprimir 1 de los atributos de la respuesta en un p en el body (editado) 

async function infor() {
    const r1 = await fetch(`https://mocki.io/v1/e4b35a17-bbdd-481b-a673-174a1ff1be88`);
    const p1 = await r1.json();
    const p2 = document.createElement('p');
    p2.textContent = p1.hola;
    document.body.appendChild(p2);
    return p1;
}


function Print(data) {

    const p2 = document.createElement('p');
    p2.textContent = p1.hola;
    document.body.appendChild(p2);

}
// await infor()
// print(d);




// Datos de frutas:
// 1- Crear una función que obtenga los datos de frutas en España. Esta función obtendrá los datos por GET de la siguiente URL (https://run.mocky.io/v3/b68bb258-78a1-4c92-acf5-2c5401707ae0 ). Construir una función usando async/await que pinte un listado de frutas en el HTML y que miestre la siguiente información de cada fruta (nombre, origen y su imagen). contestar a las siguientes preguntas:
// ¿Qué tipo de datos tiene la respuesta?
// ¿Cuál es la ip y el puerto de la petición?
// ¿Cuántos atributos tiene nuestra cada elemento de la fruta de la respuesta?
// ¿Qué tipo de datos tiene esos atributos?
// ¿Qué código http de respuesta hemos recibido?

        async function getFruits(){
            const r = await fetch('https://run.mocky.io/v3/b68bb258-78a1-4c92-acf5-2c5401707ae0');
            const fruits = await r.json();
            return fruits;
        }

        function printFruit(fruit){
            // pinta una fruta en el HTML
            const container = document.createElement('div');

            const img = document.createElement('img');
            img.src = fruit.img;

            const pName = document.createElement('p');
            pName.textContent = fruit.name;

            const pOrigin = document.createElement('p');
            pOrigin.textContent = fruit.origin;

            container.appendChild(pName);
            container.appendChild(img);
            container.appendChild(pOrigin);

            document.body.appendChild(container);
        }

        function printFruits(fruitArr){
            // pinte todas sus frutas en el HTML
            fruitArr.forEach(f => printFruit(f));
        }

        /*
            ¿Qué tipo de datos tiene la respuesta? --Array Objetos --JSON
            ¿Cuál es la ip y el puerto de la petición? -- 46.252.181.104:443
            ¿Cuántos atributos tiene cada elemento de la fruta de la respuesta? -- 3
            ¿Qué tipo de datos tiene esos atributos? -- 3 strings
            ¿Qué código http de respuesta hemos recibido? -- 202 Accepted
        */
       async function startApp(){
          const fruits = await getFruits();
          printFruits(fruits);
       }
    
       startApp();
    // let fruits;
    // getFruits().then(f => printFruits(f));
    // // se ejecuta antes que el resol
    // printFruits(fruits); // aqui fruits es undefined