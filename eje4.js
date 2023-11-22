// sumar(a, b)
// Crear una función sumar que tome como argumentos dos números y devuelva la suma de ellos

function sumar (numero1,numero2) {
    var resultado = numero1 + numero2;
    // console.log(resultado)
    return resultado;
    // return numero1+numero2;
}


function porcentaje (n1,n2) {
    var yaSumado = sumar(n1,n2);
    var resultado = yaSumado/2;
    return resultado;
}

console.log( porcentaje(10,20) )
console.log( porcentaje(4,6) )