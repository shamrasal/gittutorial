//async await with promise

const { reject } = require("async");

const premovie = async()=>{
    
    const promiseWifeBringTickets = new Promise((resolve,reject)=>{
        setTimeout(() => resolve('ticket'), 3000);
    })

    const getpopcorn = new Promise((resolve,reject)=>resolve(`popcorn`))
    const addButter = new Promise((resolve,reject)=>resolve(`butter`))
    const getcoldDrink = new Promise((resolve,reject)=>resolve(`colddrink`))


    let ticket = await promiseWifeBringTickets;
    console.log(`wifw: i have the ${ticket}`)
    console.log(`we should go in `)
    console.log(`wife: no i am hungry`)

    let popcorn = await getpopcorn
    console.log(`husband: i got some ${popcorn}`)
    console.log(`husband: we should go in`)
    console.log(`wife: i need butter on my popcorn`)
    let butter = await addButter
    console.log(`husband: i got some ${butter} on popcorn`)
    console.log(`wife: now i need colddrink`)
    
    let colddrink = await getcoldDrink
    console.log(`husband: i got some ${colddrink}for you`)
    console.log(`husband: anythin else darling?`)
    console.log(`wife: lets go we are getting late`)
    console.log(`husband: thanks you for the reminder`)
    
    return ticket
}

premovie().then((m)=>console.log(`person3 :shows ${m}`))

console.log(`person4: shows ticket`)
console.log(`person5: shows ticket`)



//async await with promise.all

console.log(`person1: shows ticket`)
console.log(`person2: shows ticket`)

const premovie1 = async()=>{
    
    const promiseWifeBringTickets = new Promise((resolve,reject)=>{
        setTimeout(() => resolve('ticket'), 3000);
    })

    const getpopcorn = new Promise((resolve,reject)=>resolve(`popcorn`))
    const getcandy  = new Promise((resolve,reject)=>resolve(`candy`))
    const getcoke = new Promise((resolve,reject)=>resolve(`coke`))


    let ticket = await promiseWifeBringTickets;
    let [popcorn,candy,coke] = await Promise.all([getpopcorn,getcandy,getcoke])    

    console.log(`${popcorn},${candy},${coke}`)
    return ticket
}

premovie1().then((m)=>console.log(`person3 :shows ${m}`))

console.log(`person4: shows ticket`)
console.log(`person5: shows ticket`)


// use await and async for createpost and deletepost
const posts = [
    { title : 'Post one', body: 'this is first post', createdAt: Date.now()},
    { title : 'Post two', body: 'this is second post',createdAt: Date.now()}
]
let intervalId = 0
function getpost(){
    clearInterval(intervalId)
    setInterval(() => {
        let output = ""
        posts.forEach(post => {
            const mili = Date.now()-post.createdAt
            output += `<li> ${post.title} created ${Math.floor(mili/1000)} seconds ago</li>`
        })
        document.body.innerHTML = output
    }, 1000);
}
function createPost (post){
    return new Promise ((resolve,reject)=>{
        setTimeout(() => {
            posts.push({...post,createdAt : Date.now()})
            const error = false
            if(!error){
                resolve()
            }else{
                reject('something went wrong')
            }
        }, 2000);
    })
}
function create4thPost(post){
    return new Promise ((resolve,reject)=>{
        setTimeout(() => {
            posts.push({...post,createdAt : Date.now()})
            const error = false
            if(!error){
                resolve()
            }else{
                reject('something went wrong')
            }
        }, 6000);
    })
}
function deletePost(){
    return new Promise ((resolve,reject)=>{
        setTimeout(() => {
            posts.pop()
            const isempty = (posts.length === 0) ? true : false;
            if(isempty){
                reject('array is empty now')
            }else{
                resolve()
            }
        
        }, 1000);
    })
}
getpost()
async function prepost(){
    try{
        await createPost({ title : 'Post three', body: 'this is three post'})
        await createPost({ title : 'Post four', body: 'this is four post'})
        await deletePost()
        await deletePost()
        await deletePost()
        await deletePost()
        await deletePost()
    }catch(err){
        console.error(err)
    }
}
prepost()

// how async await is better then the pomise.then design pattern

// if there is lot of function which are called after one another 
// then the code becomes too messy 
// it is becoming difficult to understand or making changes to it 
// but async await is solve this problem and makes coding in clean manner so we can understand it 
// following is the example of it

const buyCar1 = function buycar(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("buying a car")
            
        }, 1000);
    })
}

const goaTrip1 = function goaTrip(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("on the way goa")
        }, 1000);
    })
}

const onBeach1 = function onBeach(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve ("on baga beach goa")
        }, 1000);
    })
}
//following is the promise.then design pattern

buyCar1().then((msg)=>{
    console.log(msg)
    goaTrip1().then((msg1)=>{
        console.log(msg1)
        onBeach1().then((msg2)=>{
            console.log(msg2)
        })
    })
})
//if we have some more functions then this design pattern makes code too messy 
//where as async and await make it so clear
//following is the asynch await pattern

async function fun1(){
    try{
        let sample1 = await buyCar1()
        console.log(sample1)
        let sample2 = await goaTrip1()
        console.log(sample2)
        let sample3 = await onBeach1()
        console.log(sample3)
    }catch(err){
        console.loge(err)
    }
}
fun1()

//so asynch await is the better design pattern than the promise.then