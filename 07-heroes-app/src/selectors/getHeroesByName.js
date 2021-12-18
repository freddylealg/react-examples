import { heroes } from "../data/heroes";

export const getHerosByName = (name = '') => {
    console.log('name', name);
    if( name.trim() === ''){
        return [];
    }

    name = name.toLowerCase();
    return heroes.filter(hero => hero.superhero.toLowerCase().includes(name) )
}