import { getUser, getUsuarioActivo } from '../../../src/bases/05-funciones';

describe('Prueba de funciones', () => {
    test('getUser debe de retornar un objeto', () => { 
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }
        const user = getUser();
        expect(user).toEqual(userTest);
    })

    // get usuario activo debe retornar un objeto
    test('getUser debe devolver un objecto', () => {
        const nombre = 'Juan';

        const user = getUsuarioActivo( nombre );
        expect(user).toEqual({
            uid: 'ABC567',
            username: nombre
        });
    });

})