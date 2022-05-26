//get form
var form = document.getElementById("my-form")

//add event on submit
form.addEventListener("submit",storeLocal)

//function on submit
function storeLocal(e){
    e.preventDefault()
    var userName = document.getElementById("name").value
    var userEmail = document.getElementById("email").value

    const userinfo = {
        userName : userName,
        userEmail : userEmail
    }
    localStorage.setItem("userinfo",JSON.stringify(userinfo))

}

//previous user details show in forntend
var preeviousUser = JSON.parse(localStorage.getItem("userinfo"))

//create element
var li = document.createElement("li")

//get classname
li.className = "item"

//li append user details
li.appendChild(document.createTextNode(preeviousUser.userName))
li.appendChild(document.createTextNode(preeviousUser.userEmail))

//li append to form
form.appendChild(li)






