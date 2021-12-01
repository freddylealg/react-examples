
const arreglo_array = new Array( 100 );
console.log(arreglo_array);


let arreglo = [1, 2, 3, 4];
const arreglo2 = [...arreglo, 5]
console.log(arreglo);
console.log(arreglo2);

const arreglo3 = arreglo2.map(function(valor) {
    return valor * 2;
});
console.log(arreglo3);
