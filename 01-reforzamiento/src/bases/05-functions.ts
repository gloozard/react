function greet(name:string): string{

    return `hola ${name}`
}


const greet2 = (name:string): string => `hola ${name}`



interface User {
    uid:string
    username : string
    // addNumber : ()=> void;

}



const message = greet("Pedro")
const message2 = greet2("Luis")



console.log(message, message2)


function getUser():User {

    return {
        uid: "ABC-123",
        username : "TuPapiCaliente7u7"
    }

}

const getUser2 = () :User =>({
 
        uid: "ABC-123",
        username: "AhiDiceGratis"
    })



const user = getUser()
const user2 = getUser2()

console.log(user,user2);



const myNumbers : number[] = [1,2,3,4,5,6]

// myNumbers.forEach(function(value){
//     console.log(value)
// })

// myNumbers.forEach((value)=>console.log(value))
myNumbers.forEach(console.log)

