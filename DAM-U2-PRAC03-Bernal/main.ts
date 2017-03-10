import { Cadena } from './cadena'
import { Numero } from './numero'

let text: Cadena = new Cadena("anita lava la tina");
let numbers : Numero = new Numero(5,5);
let letters : number[] = text.getLetters;
let number : boolean[] ;
console.log("Métodos de cadena");
console.log(`La palabra ${text.getText} es palindromo: ${text.getPalindromo}`);
console.log(`La palabra ${text.getText} cuanta con un total de ${text.getCountLetters} letra(s)`);
console.log(`La palabra ${text.getText} cuanta con : a=${letters[0]} ,e=${letters[1]},i=${letters[2]},o=${letters[3]},u=${letters[4]}`);
console.log(`La palabra ${text.getText} cuanta con un total de ${text.getCountWords} palabra(s)`);
console.log("-----------------------------------------------");
console.log("Métodos de números");
console.log(`La suma de los números ${numbers.getvalue1} y ${numbers.getvalue2} es de = ${numbers.getAdd}`);
console.log(`La resta de los números ${numbers.getvalue1} y ${numbers.getvalue2} es de = ${numbers.getSubstract}`);
console.log(`El factorial de ${numbers.getvalue1} es de: ${numbers.getFactorial[0]} y la del ${numbers.getvalue2} es de: ${numbers.getFactorial[1]}`);
console.log(`El número ${numbers.getvalue1} es primo? ${numbers.getPrimo[0]} y el otro valor de: ${numbers.getvalue2} es?: ${numbers.getPrimo[1]}`);