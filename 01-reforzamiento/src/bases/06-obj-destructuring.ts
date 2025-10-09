const person ={
    name:"Tony",
    age:45,
    key:"Ironman"
}

const {age,key,name:ironmanName} = person;

// const name = person.name
// const age = person.age
// const key = person.key


console.log({age,ironmanName,key})

interface Hero {
    name:string,
    age: number,
    key: string,
    rank?: string
}


const useContext = ({key,name,age,rank}:Hero) => {
    
    
    
    return{
        keyname:key,
        user:{
            name,
            age
        },
        rank:rank

    }

}

const {rank,keyname,user:{name}} = useContext(person)

console.log(rank, keyname,name)