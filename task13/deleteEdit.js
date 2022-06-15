var form = document.getElementById("addForm")

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

    axios.post("https://crudcrud.com/api/ba0fc1fdf92747a2a2c1d70cd4fb3d0d/appinfo",userDetails)
        .then((response)=>{
            console.log(response);
        })
        .catch((err)=>{
            console.log(err)
        })

    //localStorage.setItem(userDetails.userEmail,JSON.stringify(userDetails))
    window.location.reload()
}

//previous user details
window.addEventListener("DOMContentLoaded",()=> {
    axios.get("https://crudcrud.com/api/ba0fc1fdf92747a2a2c1d70cd4fb3d0d/appinfo")
        .then((response)=>{
            console.log(response)
            for(let i=0;i<response.data.length;i++){
                showNewUserOnScreen(response.data[i])
            }
        })
        .catch((err)=>{
            console.log(err)
        })
})


function showNewUserOnScreen(user){
    var li = document.createElement("li")
                var btn = document.createElement("button")
                var btndelete = document.createElement("button")
                //set idname
                btn.id="btnedit"
                btndelete.id="btndelete"
                
                //Set classname
                li.className="list-group-item"
                btn.className="btn"
                btndelete.className="btn delete"
        
                btn.appendChild(document.createTextNode("Edit"))
                btndelete.appendChild(document.createTextNode("delete"))
        
                //append text node
                li.appendChild(document.createTextNode("name : " + user.userName + ",  email : " + user.userEmail + ",  phone : " + user.userPhone))
                li.appendChild(btn)
                li.appendChild(btndelete)
        
                //append li in userdetails
        
                var items = document.getElementById("items")
                items.appendChild(li)
                
}





    

     //delete user 
    var itemlist = document.getElementById("items")  
 
    var deleteUser = document.getElementById("btndelete")
        itemlist.addEventListener("click",deleteinfo)
        function deleteinfo(e){
            e.preventDefault()
            if(e.target.classList.contains("delete")){
             //var clickItemInfo = JSON.parse(e.target)
                var deleteuser1 = (localStorage.key(e.target))
                localStorage.removeItem(deleteuser1)
                //var oldUser = JSON.parse(localStorage.getItem(old))
                location.reload()
            }
        }
    //edit user
    var editUser = document.getElementById("btnedit")
    itemlist.addEventListener("click",editInfo)
    function editInfo(e){
        if(e.target.classList.contains("btn")){
            var deleteuser1 = (localStorage.key(e.target))
            var val1 = localStorage.getItem(deleteuser1)
            var editingName = document.getElementById("name")
            var editingEmail = document.getElementById("email")
            var editingPhone = document.getElementById("phone")
            var localinfo = JSON.parse(val1)
            editingName.value=localinfo.userName
            editingEmail.value=localinfo.userEmail
            editingPhone.value=localinfo.userPhone
            //deleteUser()
        }

    }
