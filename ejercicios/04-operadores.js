/*
Operadores aritméticos nos sirven para hacer operaciones
+ => Sirve para sumar o concatenar
- => Sirve para restar numeros
* => Sirve para multiplicar 2 numeros
% => Modulo nos sirve para obtener el residuo de una división
/ => división nos sirve para dividir dos numeros
*/

// Forma 1 const numero1 = 34;
// Forma 1 const numero2 = 5;

//Forma 2 los siguientes:

/* Pedir datos de entrada como texto para la función. 
const numero1 = prompt("Ingresa el número 1: ");
const numero2 = prompt("Ingresa el número 2: ");
*/

// Una solución para la suma (en lugar de concatenar, sumar valores) es hacer el "parseo" para convertirlo a otro tipo de dato. Es una buena práctica hacer la conversión de datos.
/* La solución sería:
const numero1 = parseInt(prompt("Ingresa el numero 1: "));
const numero2 = parseInt(prompt("Ingresa el numero 2: "));
*/

const numero1 = parseInt(prompt("Ingresa el numero 1: "));
const numero2 = parseInt(prompt("Ingresa el numero 2: "));

const suma = numero1 + numero2;
const resta = numero1 - numero2;
const multiplicacion = numero1 * numero2;
const division = numero1 / numero2;

// Forma 1 console.log(numero1 + numero2);
// Forma 2 console.log(suma);

console.log("Número 1: " + numero1);
console.log("Número 2: " + numero2);

// Nota: Al haber utilizado el comando prompt, reconoce todas las entradas como texto. Incluso si son números.
// Por esa misma razón los concatena y no los suma.
console.log("Suma: " + suma);

// En este caso sí hace la conversión de forma automática, ya que los símbolos solo se utilizan para operaciones aritméticas
console.log("Resta: " + resta);
console.log("Multiplicación: " + multiplicacion);
console.log("División: " + division);

console.log(5 % 3);

/*
* OPERADORES LÓGICOS
    And  &&
    Or  ||
    Not  !
*/
