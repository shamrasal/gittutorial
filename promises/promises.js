
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
createPost({title : 'Post three', body: 'this is third post'}).then(getpost)
create4thPost({title : 'Post four', body: 'this is third post'})
    .then(getpost)
    .then(deletePost)
    .then(deletePost)
    .then(deletePost)
    .then(deletePost)
    .then(deletePost)
create4thPost({title : 'Post five', body: 'this is five post'})
    .then(getpost)
    .then(deletePost)


const promise1 = Promise.resolve('hello world')
const promise2 = 10
const promise3 = new Promise((resolve,reject) =>
    setTimeout(resolve,2000,'good bye')
);

function updateLastUserActivityTime () {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.lastActivityTime = new Date().getTime()
            const error = false
            if(!error){
                resolve()
            }else{
                reject('something went wrong')
            }
        },1000)   
    })
}

function userupdatepost (){
    Promise.all([createPost,updateLastUserActivityTime])
        .then(([createpostupdate,updateLastUserActivityTimeresolve]) => {
            console.log(updateLastUserActivityTimeresolve)
        })
        .catch(error =>console.log(error));
}
createPost({title : 'Post six', body: 'this is six post'})
    .then(getpost()).then(updateLastUserActivityTime).then(userupdatepost).then(deletePost)

    

Promise.all([promise1, promise2, promise3]).then(values => console.log(values))
