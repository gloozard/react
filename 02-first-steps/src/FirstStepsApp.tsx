import type { CSSProperties } from "react"
import ItemCounter from "./shopping-cart/ItemCounter"


interface ItemInCart {
    productName: string,
    quantity: number
}

const itemsInCart: ItemInCart[] = [

    {
        productName: "Nintendo Switch 2",
        quantity: 1
    },

    {
        productName: "Play",
        quantity: 3
    },

    {
        productName: "Xbox",
        quantity: 5
    }

]



export const Componente1 = () => { //Crear un componente con una arrow function
    return (
        <>
            <h1>Hola mundo</h1>
            <p>Esto es un párrafo</p>

            <button>Click me</button>

            <div>
                <h2>Hola dentro de un div</h2>
            </div>
        </>
    )

}

export function FirstComponent() { //Crear un componente con una  function
    return (
        <>
            <h1>Carrito de compras</h1>


            {
                itemsInCart.map((item) => (
                    <ItemCounter key={item.productName} name={item.productName} quantity={item.quantity} />))
            }



            {/* <ItemCounter name ="Nintendo Switch2" quantity={1}/>
        <ItemCounter name ="xbox"quantity={2}/>
        <ItemCounter name ="play" quantity={5}/> */}
        </>
    )
}

const firstName = "Emiliano"
const lastName = "Kick"
const favoriteGames = ["elpepe", "etesech", "tralalero tralala"]
const isActive = true

const address = {
    zipcode: "ABC-123",
    country: "Mexico"
}

const myStyles: CSSProperties = {
    backgroundColor: "green",
    borderRadius: isActive ? 10 : 20,
    padding: 10,
    marginTop: 50
}
export function MyAwesomeApp() {



    return (
        <>
            <h1>{firstName}</h1>
            <h3>{lastName}</h3>
            <p>{favoriteGames.join(', ')}</p>
            <h1>{isActive ? "Activo" : "Inactivo"}</h1>


            <p style={myStyles}>
                {JSON.stringify(address)}</p>
        </>
    )

}

export const MyAwesomeAppArrow = () => {

    const firstName = "Emiliano"
    const lastName = "Kick"
    const favoriteGames = ["elpepe", "etesech", "tralalero tralala"]


    return (
        <>
            <h1>{firstName}</h1>
            <h3>{lastName}</h3>
            <p>{favoriteGames.join(', ')}</p>
        </>
    )
}