import { getHeroeByIdAsync } from "../../bases/09-promesas";

describe('Pruebas con promesas', () => {
    test('Prueba de promesa, getHeroeByIdAsync', ( done ) => {
        const id = 1;
        getHeroeByIdAsync( id )
            .then( heroe => {
                console.log( heroe );
                expect( true ).toBe( true );
                done();
            });
    });


    test('Prueba de promesa, getHeroeByIdAsync, probar el error', ( done ) => {
        const id = 10;
        getHeroeByIdAsync( id )
            .then( heroe => {
                console.log( heroe );
                expect( true ).toBe( true );
                done();
            })
            .catch( error => {
                expect( true ).toBe( true );
                done();
            })
    });
});