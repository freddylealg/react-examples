import { useState} from 'react'
import AddCategory from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Programing']);

    return (
        <div>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories } />
            <hr />

            <ol>
            { categories.map( (category, i ) => {
                return <GifGrid category={category} key={category}/>;
                }) 
            }
            </ol>
        </div>
        );
}


export default GifExpertApp;