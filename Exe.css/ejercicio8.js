let resultado = prompt("Selecciones una de las siguientes opciones 1= saber su promedio 2= solo saber la suma de sus notas");
let nota1 = prompt("Digite su primera nota");
nota1 = parseInt(nota1)
let nota2 = prompt("Digite su segunda nota");
nota2 = parseInt(nota2)
let nota3 = prompt("Digite su tercera nota");
nota3 = parseInt(nota3)
let n;
let p = 3;
if (resultado == "1") {
    n = nota1 + nota2 + nota3;
    x = n / p;
    alert("Su promedio es: " + x.toFixed(0))
} else if (resultado == "2") {
    n = nota1 + nota2 + nota3;
    alert("La suma de sus nota es: " + n)
} else {
    alert("No ingreso un numero, porfavor ingrese un numero de los solicitados")
}

if (x <= 65) {
    alert(" Usted esta quedado. Nota: " + x.toFixed(0))
}
if (x >= 65 && x <= 70) {
    alert("Usted paso rastrando. Nota: " + x.toFixed(0))
}
if (x >= 70 && x <= 85) {
    alert("Usted paso, no esta mal. Nota: " + x.toFixed(0))
}
if (x >= 85 && x <= 99) {
    alert("Usted paso, muy bien. Nota: " + x.toFixed(0))
}
if (x >= 100) {
    alert("Usted paso, excelente, te ganaste un abrazo :). Nota: " + x.toFixed(0))
}

