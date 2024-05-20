//Encontrar el elemento más grande del arreglo :Dado el siguiente arreglo [4,7,9,3,1,45,67,23,29,78,11,16] - Crear un programa que encuentre cuál es el número más grande del arreglo e imprimirlo por consola - Almacenar el número más grande en una variable global y pasarlo a una función para determinar si el número es par o impar

let arregloElementos: number[]= [4,7,9,3,1,45,67,23,29,78,11,16]
let mayor:number = arregloElementos[0]

for (let index = 0; index < arregloElementos.length; index++) {
    
    if (mayor < arregloElementos [index]) {
        mayor= arregloElementos [index]
    }
}console.log("El mayor valor del arreglo es : " + mayor); 

let parImpar  = (numeroMayor: number) => {
if(numeroMayor % 2 == 0 ){
    console.log("El numero ingresado es par")
}else {
    console.log("El numero ingresado es impar")
}    
}
parImpar(mayor);

