alert ("Opciones: 1 suma, 2 restas, 3 mutiplicación, 4 división")
let v = prompt ("Digite la operacion que desea realizar: ")
let v1 = prompt ("Ingrese un primer valor numerico: ")
let v2 = prompt ("Ingrese un segundo valor numerico: ")

suma = (Number (v1)) + (Number (v2))
resta = v1 - v2
multiplicacion = v1 * v2
division = v1 / v2

if (v == "1"){
    alert (suma)
} else if (v==2){
    alert (resta)
} else if (v==3){
    alert (multiplicacion)
} else if (v==4){
    alert (division)
}