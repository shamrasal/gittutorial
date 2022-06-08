function countEventlistner(){
    let count=1
    document.getElementById("click").addEventListener("click", function xyz(){
        console.log("hello",count++)
    })

    document.addEventListener("DOMContentLoaded",(e)=>{
        setTimeout (()=>{
            console.log("DOM has loaded")
        },500)
       
    
    })
    
 
}
countEventlistner()

