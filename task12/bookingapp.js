var form = document.getElementById("my-form")

form.addEventListener("submit",storeuser)

function storeuser(e){
    e.preventDefault()
    var userName = document.getElementById("name").value
    var userEmail = document.getElementById("email").value
    var userPhone = document.getElementById("phone").value

    const userDetails = {
        userName,
        userEmail,
        userPhone
    }
    localStorage.setItem(userDetails.userEmail,JSON.stringify(userDetails))
}

//previous user details
//var oldUser = JSON.parse(localStorage.getItem("userDetails.userEmail"))



for (let i=0;i<localStorage.length;i++)
{
    var old = (localStorage.key(i))
    var oldUser = JSON.parse(localStorage.getItem(old))
    //crete li
    var li = document.createElement("li")

    //Set classname
    li.className="list-group-item"

    //append text node
    li.appendChild(document.createTextNode("name :- " + oldUser.userName + ",  email : " +oldUser.userEmail + ",  phone : " + oldUser.userPhone))

    //append li in userdetails

    var items = document.getElementById("items")

    items.appendChild(li)
}



