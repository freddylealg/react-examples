import React from 'react';
import { shallow } from 'enzyme'
import '@testing-library/jest-dom';
import toJson from 'enzyme-to-json';
import { GifGridItem } from '../../components/GifGridItem';

describe('Pruebas del componente GifGridItem', () => {

    const title = 'título';
    const url = 'url';
    let wrapper = shallow( <GifGridItem title={title} url={url} /> );

    beforeEach( () => { 
        wrapper = shallow( <GifGridItem title={title} url={url} /> );
    });

    test('Provar visualización del componente', () => {
        expect( toJson(wrapper) ).toMatchSnapshot();
    });

    test('Debe de tener un parrafo con el título', () => {
        const p = wrapper.find('p');
        expect( p.text().trim() ).toBe( title )
    });

    test('Debe tener la imagen de la url de los props', () => {
        const img = wrapper.find('img');
        expect( img.prop('src').trim() ).toBe( url )
        expect( img.prop('alt').trim() ).toBe( title )
    });

    test('Debe tener la clase animate__fadeIn', () => {
        const div = wrapper.find('div');
        expect( div.prop('className').includes('animate__fadeIn') ).toBe( true );
    });

});