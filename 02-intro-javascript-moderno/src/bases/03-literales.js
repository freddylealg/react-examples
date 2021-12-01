
const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 54215,
        lat: 14.5566,
        lng: -12.5666
    }
}


const persona2 = {...persona};
persona2.nombre = 'Peter';

console.log(persona);
console.log(persona2);