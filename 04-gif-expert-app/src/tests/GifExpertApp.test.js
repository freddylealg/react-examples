import React from 'react';
import { shallow } from 'enzyme'
import '@testing-library/jest-dom';
import toJson from 'enzyme-to-json';
import GifExpertApp from '../GifExpertApp';

describe('Prueba el componente GifExpertApp', () => {

    test('Debe mostrarse correctamente', () => {
        const wrapper = shallow(<GifExpertApp />)
        expect( wrapper ).toMatchSnapshot();
    })
    
    test('Debe mostrar una lista de categorias', () => {
        const categories = ['Programing', 'Vegeta']
        const wrapper = shallow(<GifExpertApp defaultCategories={categories} />)
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('GifGrid').length ).toBe( categories.length )
    })
    
})
