

let numebrUno=5
let numerDos=7
document.write( "El resultado de la suma de",numebrUno," y ",numerDos, " es ",numebrUno+numerDos,"<br>");

document.write( "El resultado de la resta de",numebrUno," y ",numerDos, " es ",numebrUno-numerDos,"<br>");
document.write( "El resultado de la multiplicacion de",numebrUno," y ",numerDos, " es",numebrUno*numerDos,"<br>");
document.write( "El resultado de la division",numebrUno," y ",numerDos, " es ",numebrUno/numerDos,"<br>");

let nombre="Alba"
let apellido="Huertas"
let resultNa=nombre+"&nbsp"+apellido

document.write("la concatenacion de nombre y apellido es ",(nombre)+"&nbsp"+(apellido));
document.write("<br>",resultNa,"<br>");

document.write("El numero de caracteres de mi nombre y apellido es ",resultNa.length,"<br>");

document.write(`la concatenacion de nombre y apellido es ${nombre} ${apellido} `,"<br>")



let pregunta= prompt("inserta los grados celsius que quieres convertir en fahrenheit");
let cuenta= (pregunta*1.8)+32;
alert(`${pregunta} grados son ${cuenta} fahrenheit`,"<br>");

document.write(cuenta>87,"<br>");

celsius=prompt("inserta los grados celsius que quieres convertir en fahrenheit");
let cuentados=(celsius*1.8)+32;


document.write(`${celsius} son ${cuentados}`)


let stringNu="55"
let numberCi=55

document.write(stringNu==numberCi,"<br>");
document.write(stringNu===numberCi,"<br>");

let numberTres=3
let numberCuatro=4
document.write(numberTres<numberCuatro,"<br>");
document.write(numberTres>numberCuatro,"<br>");


let peso=prompt("indica tu peso (en kilos)");
let altura=prompt("indica tu altura(en metros cuadrados)");
let obesidad=peso/altura;
alert(`Tu imc es ${obesidad}`);
document.write(obesidad>39.9 || obesidad<35);


document.write(`ejercicio del numero par/impar:`);

/* 
1. solicitar un numero al usuario
2. convertir el input a number
3. crear una variable booleana que verifique si es par o impar
4. mostarar el restultado
*/

let input = prompt("introduce un numero;");
let numero = parseInt(input);
let isEven = n%2 === 0;
document.write("Es par"+ isEven);




















































