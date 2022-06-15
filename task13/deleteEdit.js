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
    axios.post("https://crudcrud.com/api/02da3903021d436ea3b752a240fbacff/appinfo",userDetails)
        .then((response)=>{
            showNewUserOnScreen(response.data)
            console.log(response);
        })
        .catch((err)=>{
            console.log(err)
        })
}

//previous user details
window.addEventListener("DOMContentLoaded",()=> {
    axios.get("https://crudcrud.com/api/02da3903021d436ea3b752a240fbacff/appinfo/")
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
    const parentNode = document.getElementById('items');
    const childHTML = `<li id=${user._id}> ${user.userName} - ${user.userEmail} - ${user.userPhone}
                             <button onclick=deleteinfo('${user._id}') class = "btn delete"> Delete User </button>
                             <button onclick=edituser('${user._id}') class = "btn "> Edit User </button>
                          </li>`
    parentNode.innerHTML = parentNode.innerHTML + childHTML;
}
     //delete user 
    
        function deleteinfo(userid){
                axios.delete(`https://crudcrud.com/api/02da3903021d436ea3b752a240fbacff/appinfo/${userid}`)
                    .then((response)=>{
                        console.log(response)
                     })
                     .catch((err)=>{
                         console.log(err)
                     })
                     removefromscreen(userid)
        }

        function removefromscreen(userid){
            const parentNode = document.getElementById('items');
            const childnode = document.getElementById(userid)
            if(childnode){
                parentNode.removeChild(childnode)
            }
        }
        
    //edit user
    function editInfo(userid){
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
