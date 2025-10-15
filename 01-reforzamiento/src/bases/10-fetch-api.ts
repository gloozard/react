import type { GiphyRamdomResponse } from "../data/giphy.response"

const API_KEY = "TkZVzlrtWWwT3bbQTiBu7rp2HycMtlx6"


const myRequest = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`)


const createImageInsideDom =(url:string) =>{
    const imgElement  = document.createElement("img")
    imgElement.src = url
    document.body.append(imgElement)
}


myRequest.then((response) =>response.json())
.then (({data}:GiphyRamdomResponse) => {

    const imageUrl = data.images.original.url
    createImageInsideDom(imageUrl)



})
.catch(err => {
    console.log(err)
}).finally(() =>{

})