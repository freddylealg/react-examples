
import { getHeroesById } from './bases/08-imports'

// const promesa = new Promise( (resolve, reject) => {
//     setTimeout(() => {
//         const heroe = getHeroesById(2);
//         resolve(heroe);
//     }, 2000);
// });

// promesa.then( ( data ) => {
//     console.log(data);
// });


const getHeroeByIdAsync = (id) => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            const heroe = getHeroesById(id);
            if (heroe) {
                resolve(heroe);
            } else {
                reject(`No se encontro el heroe con el id ${id}`);
            }
        }, 2000);
    });
};


getHeroeByIdAsync(1).then( (heroe) => {
    console.log(heroe);
}).catch( (error) => {
    console.log(error);
});