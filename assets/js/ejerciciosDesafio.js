// Ejercicio 2
var num1 = prompt("Ingrese el primer número (que sea mayor a cero)");
var num1 = parseInt(num1);
var num2 = prompt("Ingrese el segundo número (que sea mayor a cero)");
var num2 = parseInt(num2);
suma = num1 + num2;
suma = num1 - num2;
suma = num1 * num2;
suma = num1 / num2;
suma = num1 % num2;
document.write("<h2>Ejercicio 2: </h2>");
document.write(`&#42 La suma de ${num1} más ${num2} es: ${num1 + num2}`);
document.write(`</br>&#42 La resta de ${num1} menos ${num2} es: ${num1 - num2}`);
document.write(`</br>&#42 La multiplicación de ${num1} por ${num2} es: ${num1 * num2}`);
document.write(`</br>&#42 La división de ${num1} por ${num2} es: ${num1 / num2}`);
document.write(`</br>&#42 El módulo de ${num1} en ${num2} es: ${num1 % num2}`);
document.write(`<hr>`);


//Ejercicio 3
var temp = prompt ("Ingrese la temperatura actual en grados Celsius");
temp = parseInt(temp);
Kelvin = (273.15 + temp).toFixed(2);
Faren = ((temp*1.8)+32).toFixed(2);
document.write ("<h2>Ejercicio 3: </h2>");
document.write (`La temperatura es: ${Kelvin}ª K y ${Faren}ª F`);
document.write(`<hr>`);


//EJercicio 4
var num = prompt ("Ingrese un número (Cantidad de días) para el cálculo de su correspondencia en tiempo calendario: ");
var num = parseInt(num);
var years = (num / 365);
var years = Math.floor (years);
var calcSemana = (num % 365);
var semana = (calcSemana / 7);
var semana = Math.floor (semana);
var dias = (calcSemana % 7);
document.write ("<h2>Ejercicio 4:</h2>");
document.write (`El número ingresado corresponde a: ${years} año(s), ${semana} semana(s) y ${dias} dia(s)`);
document.write(`<hr>`);


//Ejercicio 5
var num1 = prompt ("Ingrese primer número: ");
var num1 = parseInt(num1);
var num2 = prompt ("Ingrese segundo número: ");
var num2 = parseInt(num2);
var num3 = prompt ("Ingrese tercer número: ");
var num3 = parseInt(num3);
var num4 = prompt ("Ingrese cuarto número: ");
var num4 = parseInt(num4);
var num5 = prompt ("Ingrese quinto número: ");
var num5 = parseInt(num5);
var sumaNum = (num1 + num2 + num3 + num4 + num5);
var prom = (num1 + num2 + num3 + num4 + num5) / 5;
document.write ("<h2>Ejercicio 5:</h2>");
document.write (`La suma total de los números ingresados es: ${sumaNum}`);
document.write (`<br/>El promedio de los números ingresados es: ${prom}`);