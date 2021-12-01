
// desestructuración

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman',
};

console.log( persona.nombre );
console.log( persona.edad );
console.log( persona.clave );

// desestructurando datos
console.log(' ')
console.log("      Datos Desestructurados");
const { nombre, clave, edad } = persona;

console.log( nombre );
console.log( clave );
console.log( edad );


console.log(' ')
console.log('     Desestructurando argumentos');
// desestructuración en argumentos
const retornaPersona = ({nombre, edad, rango='Capitan'}) => {
    return {
        nombre: nombre, 
        edad: edad, 
        rango: rango,
        latlng: {
            lat: 12.12,
            lng: -13.12
        }
    }
}

const {nombre:nombre1, edad:edad1, rango:rango1, latlng:{lat, lng}} = retornaPersona(persona);
console.log('Desde la función', nombre1, edad1, rango1, lat, lng);