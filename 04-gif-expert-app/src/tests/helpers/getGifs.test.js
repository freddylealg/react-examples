import { getGifts } from "../../helpers/getGifs";

describe('Pruebas del getGifts', () => {

    test('Debe de traer 10 elementos', async() => {
        const gifs = await getGifts('Dragon Ball');
        expect( gifs.length ).toBe( 10 )
    });

    test('Debe traer 0 elementos cuando no hay categorias', async() => {
        const gifs = await getGifts('');
        expect( gifs.length ).toBe( 0 )
    });

});