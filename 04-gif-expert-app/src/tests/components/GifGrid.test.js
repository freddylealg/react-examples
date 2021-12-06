import React from 'react';
import { shallow } from 'enzyme'
import '@testing-library/jest-dom';
import toJson from 'enzyme-to-json';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';

jest.mock('../../hooks/useFetchGifs');

describe('Prueba de GifGrid', () => {
    
    test('Probar snapshot ', () => {
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });
        const wrapper = shallow(<GifGrid category="vegeta" />);
        expect( wrapper ).toMatchSnapshot(); 
    });


    test('Debe de mostar items cuando se cargan imágenes useGetchGifs', () => {
        const gifs = [{
            id: 'ABC',
            url: 'https:test.com',
            title: 'ejemplo'
        },
        {
            id: 'ABCD',
            url: 'https:test.com',
            title: 'ejemplo'
        }];

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });
        
        const wrapper = shallow(<GifGrid category="vegeta" />);

        // expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('p').exists() ).toBe( false );
        expect( wrapper.find('GifGridItem').length ).toBe( gifs.length );
    })
    
    

});
