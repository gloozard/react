interface Person{
    firstName : string;
    lastName : string;
    age : number;
    address : Address;


    
}

interface Address {
    postalCode : string;
    city: string;
}

const humano: Person = {
firstName : "Pedro",
lastName : "Navajas",
age : 30,
address: {
    postalCode :"123123",
    city : "Gdl"
    }
};



console.log(humano)

//const persona = {...humano}; Comando spread
// const persona = structuredClone (humano);


// persona.firstName = "Alfredo";
// persona.lastName = "Nuñez";
// persona.age =22;
// persona.address.city = "Tlajoyork"


// console.log(humano,persona);