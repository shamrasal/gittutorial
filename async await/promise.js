

console.log(`person1: shows ticket`)
console.log(`person2: shows ticket`)

const promiseWifeBringTickets = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve('ticket')
    },3000);
})

const getPopcorn = promiseWifeBringTickets.then((t)=>{
    console.log(`wifw: i have the ${t}`)
    console.log(`we should go in `)
    console.log(`wife: no i am hungry`)
    return new Promise((resolve,reject)=>resolve(`${t} popcorn`))
})

const getButter = getPopcorn.then((t)=>{
    console.log(`husband: i got some popcorn`)
    console.log(`husband: we should go in`)
    console.log(`wife: i need butter on my popcorn`)
    return new Promise((resolve,reject)=>resolve(`${t} butter`))

})
let colddrink = getButter.then((t)=>{
    console.log(`husband: i got some butter on popcorn`)
    console.log(`wife: now i need colddrink`)
    return new Promise((resolve,reject)=>resolve(`${t} colddrink`))
})

let goForMovie = colddrink.then((t)=>{
    console.log(`husband: i got some colddrink for you`)
    console.log(`husband: anythin else darling?`)
    console.log(`wife: lets go we are getting late`)
    console.log(`husband: thanks you for the reminder`)
    return new Promise((resolve,reject)=>resolve(`${t} movie`))
})
goForMovie.then((t)=>console.log(t))

console.log(`person4: shows ticket`)
console.log(`person5: shows ticket`)
