import heroes from '../../data/heroes';
import { getHeroeById, getHeroesByOwner } from '../../bases/08-imp-exp';

describe('Pruebas de importación y exportación', () => {
    
    test('Pruebas de obtener heroes', () => {
        const id = 1;
        const heroe = getHeroeById( id );
        const heroeData =  heroes.find(h => h.id === id)

        expect( heroe ).toEqual( heroeData );
    })

    test('Pruebas de obtener heroes que no existen en el arreglo', () => {
        const id = 10;
        const heroe = getHeroeById( id );

        expect( heroe ).toBe( undefined );
    })

    test('Pruebas de obtener heroes de DC', () => {
        const heroes = getHeroesByOwner( 'DC' );
        const heroesData = heroes.filter(x => x.owner === 'DC' )
        expect( heroes ).toEqual( heroesData );
    })

    test('Pruebas de obtener heroes de DC', () => {
        const heroes = getHeroesByOwner( 'Marvel' );
        const heroesData = heroes.filter(x => x.owner === 'Marvel' )
        expect( heroes.length ).toEqual( 2 );
    })

})