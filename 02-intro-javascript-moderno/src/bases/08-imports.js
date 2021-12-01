
import heroes, {owners} from '../data/heroes'

console.log( owners )
// console.log( heroes )

const getHeroesById = (id) => heroes.find(hero => hero.id === id)

// console.log(getHeroesById(2))


const getHeroesByOwner = (owner) => heroes.filter(hero => hero.owner === owner)
// console.log(getHeroesByOwner('DC'))

export {
    getHeroesById, 
    getHeroesByOwner
}