let numeros=[];
let usuario = 0;
let w1 = 0;
let suma= 0;
let tamanoarray = 0;
let promedio = 0;
let mediana = 0;
let medianainicial= 0;
let medianafinal= 0;
//proceso de recoleccion de datos para el array.
while (w1 !=-12000) {
    usuario =prompt('Digite un numero, sí no digita nada y preciona "enter" se cierra el proceso, las letras no son aceptadas');
    if (usuario == '') {
        w1=-12000;
    }else if(isNaN(usuario) || usuario ==' '){
        
    }else{
        numeros[w1] = parseInt(usuario);
        w1++;
    }
}
// se ordena el array de menor a mayor.
numeros.sort((a, b) => a - b);

//se suman los numeros que hay en cada espacio del array.
for (let i = 0; i < numeros.length; i++){
    suma += numeros[i];
}

tamanoarray = numeros.length;

promedio = suma / tamanoarray;

//proceso para sacar la mediana ya sea par o impar.

//redondea un número al múltiplo o al entero inferior más próximo de la cifra significativa especificada.
medianainicial = Math.floor((numeros.length - 1) / 2);

//devuelve el entero mayor o igual más próximo a un número dado.
medianafinal = Math.ceil((numeros.length - 1) / 2);

if (numeros.length % 2 == 0) {
    mediana = (numeros[medianainicial] + numeros[medianafinal]) / 2;
    console.log(mediana);
} else {
    mediana = (numeros[medianainicial] + numeros[medianafinal]) / 2;
    console.log(mediana);
}

console.log(`El promedio es:  ${promedio}`);
console.log(`el valor minimo: ${Math.min(...numeros)}`);
console.log(`el valor maximo: ${Math.max(...numeros)}`);

