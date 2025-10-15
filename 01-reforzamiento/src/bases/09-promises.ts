const myPromise = new Promise<number>((resolve, reject)=> {

    setTimeout(() =>{
        resolve (100)
       // reject("Mi amigo se perdio")

    }, 2000)

})

myPromise.then(
    (MyMoneyIsBack) => {
        console.log(`tengo mi dinero ${MyMoneyIsBack}`)
    }
).catch(reason =>{
    console.warn(reason)
}).finally(() =>{
    console.log("A seguir con mi vida")
})


