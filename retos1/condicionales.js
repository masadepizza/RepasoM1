"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEven = void 0;
//2. Realizar una función que dada una fecha de nacimiento te devuelva el signo zodiacal.
//La fecha de nacimiento vendrá indicada por dos números: dia y mes.
//La cabecera de la función tendrá el siguiente aspecto: function zodiac(day, month)
function zodiac(day, month) {
    if (month == "Enero" && day >= 20 || month == "Febrero" && day <= 18) {
        return "Acuario";
    }
    if (month == "Febrero" && day >= 19 || month == "Marzo" && day <= 20) {
        return "Piscis";
    }
    if (month == "Marzo" && day >= 21 || month == "Abril" && day <= 19) {
        return "Aries";
    }
    if (month == "Abril" && day >= 20 || month == "Mayo" && day <= 20) {
        return "Tauro";
    }
    if (month == "Mayo" && day >= 21 || month == "Junio" && day <= 20) {
        return "Géminis";
    }
    if (month == "Junio" && day >= 21 || month == "Julio" && day <= 22) {
        return "Cáncer";
    }
    if (month == "Julio" && day >= 23 || month == "Agosto" && day <= 22) {
        return "Leo";
    }
    if (month == "Agosto" && day >= 23 || month == "Septiembre" && day <= 22) {
        return "Virgo";
    }
    if (month == "Septiembre" && day >= 23 || month == "Octubre" && day <= 22) {
        return "Libra";
    }
    if (month == "Octubre" && day >= 23 || month == "Noviembre" && day <= 21) {
        return "Escorpio";
    }
    if (month == "Noviembre" && day >= 22 || month == "Diciembre" && day <= 21) {
        return "Sagitario";
    }
    if (month == "Diciembre" && day >= 22 || month == "Enero" && day <= 19) {
        return "Capricornio";
    }
}
var day = 9;
var month = "Agosto";
var signozodiaco = zodiac(day, month);
console.log(signozodiaco);
//3. Realizar un procedimiento que dado el nombre de un país te imprima en qué continente
//estás. (Max 5 países por continente).
//La cabecera del procedimiento tendrá el siguiente aspecto: function continent(country)
function continent(country) {
    var europa = ["España", "Francia", "Alemania"];
    if (europa.includes(country)) {
        return "Europa";
    }
    var asia = ["India", "Japón", "China"];
    if (asia.includes(country)) {
        return "Asia";
    }
    var america = ["Canada", "Mexico", "Colombia"];
    if (america.includes(country)) {
        return "America";
    }
    var africa = ["Senegal", "Nigeria", "Madagascar"];
    if (africa.includes(country)) {
        return "Africa";
    }
    var oceania = ["Australia", "Nueva Zelanda", "Polinesia Francesa"];
    if (oceania.includes(country)) {
        return "Oceania";
    }
}
var country = "Polinesia Francesa";
var continente = continent(country);
console.log(continente);
//4.Realizar una función que te imprima por consola el siguiente mensaje:
//- “El numero es par”, si el numero introducido como parámetro de entrada es par
//- “El numero es impar”, si el numero introducido como parámetro de entrada es impar
//5.La cabecera de la función tendrá el siguiente aspecto: function isEven(number)
function isEven(number) {
    if (number % 2 == 0) {
        return "El número es par";
    }
    else {
        return "El número es impar";
    }
}
exports.isEven = isEven;
var number = 97;
var elnumero = isEven(number);
console.log(elnumero);
