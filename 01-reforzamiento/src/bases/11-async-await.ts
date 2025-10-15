import type { GiphyRamdomResponse } from "../data/giphy.response"

const API_KEY = "TkZVzlrtWWwT3bbQTiBu7rp2HycMtlx6"




const createImageInsideDom =(url:string) =>{
    const imgElement  = document.createElement("img")
    imgElement.src = url
    document.body.append(imgElement)
}

const getRandomGifUrl = async( ) : Promise<string>=>{

    const myRequest = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`)

    const {data}: GiphyRamdomResponse =await myRequest.json()

    
    return data.images.original.url

}


getRandomGifUrl().then(
    url => createImageInsideDom(url)
).catch()