let edad = prompt("Digite su edad: ")

if ( edad <= 3){
    alert ("Es un bebe")
}

if(edad >= 4 && edad <= 12){
    alert ("Eres un niño de " + edad)
}

if (edad >= 12 && edad <= 18){
    alert ("Eres un adolecente de " + edad)
}

if (edad >= 18 && edad <= 65){
    alert ("Eres un adulto de " + edad)
}

if (edad >= 65){
    alert ("Eres adulto mayor de "+ edad)
}
