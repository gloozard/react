import  { heroes, type Hero,Owner }  from "../data/heroes.data" 


const getHeroById =(id:number):Hero | undefined=>{

    const hero =  heroes.find((hero)=>{
        return hero.id === id
     })
    // if (!hero){
    //     throw new Error(`No existe un superheroe con el id ${id}` )
        
    // }

    return hero
}

export const getHeroesByOwner = (Owner:Owner) =>{
    const heroesByOwner =heroes.filter((hero)=>{
        return hero.owner === Owner
    })

    return heroesByOwner
}


console.log(getHeroById(6))
// console.log(getHeroesByOwner("DC"))