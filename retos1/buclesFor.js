"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = void 0;
//1. Realizar una función que imprima los números impares existentes hasta el número
//indicado como parámetro de entrada.
//La cabecera de la función tendrá el siguiente aspecto: function evenNumbers(num)
function evenNumbers(num) {
    for (var item = 1; item <= num; item++) {
        if (item % 2 != 0) {
            console.log(item);
        }
    }
}
var num = 8;
evenNumbers(num);
//2. Realizar una función que como parámetro de entrada reciba un array y como salida
//devuelva el array revertido. No se puede utilizar el método revert de la clase array
//La cabecera de la función tendrá el siguiente aspecto: function myRevert(myArr)
function myRevert(myArr) {
    var arrayRevertido = [];
    for (var item = myArr.length - 1; item >= 0; item--) {
        arrayRevertido.push(myArr[item]);
    }
    return arrayRevertido;
}
var arrayOriginal = [1, 984, 243, 87, 5];
var arrayRevertido = myRevert(arrayOriginal);
console.log(arrayRevertido);
//3. Realizar una función que reciba como parámetro un array de strings que contenga
//nombres de colores y te imprima en cada caso si el color está en el arcoíris o no.
//La cabecera de la función tendrá el siguiente aspecto: function isRainbow(colors)
function isRainbow(colors) {
    var arcoiris = ["rojo", "amarillo", "naranja", "verde", "azul", "morado"];
    for (var _i = 0, colors_1 = colors; _i < colors_1.length; _i++) {
        var color = colors_1[_i];
        if (arcoiris.includes(color)) {
            console.log("El ".concat(color, " S\u00CD est\u00E1 en el arco\u00EDris"));
        }
        else {
            console.log("El ".concat(color, " NO est\u00E1 en el arco\u00EDris"));
        }
    }
}
var arrayColores = ["rojo", "negro", "amarillo", "marrón", "verde", "blanco"];
isRainbow(arrayColores);
//4. Realizar una función que te devuelva la suma del numero de caracteres de las palabras
//almacenadas en un array.
//La cabecera de la función tendrá el siguiente aspecto: function add(myWords)
function add(myWords) {
    var suma = 0;
    for (var item = 0; item < myWords.length; item++) {
        suma += myWords[item].length;
    }
    return suma;
}
exports.add = add;
var palabras = ["hola", "adios", "coliflor", "móvil"];
console.log(add(palabras));
