var form = document.getElementById("addForm")

form.addEventListener("submit",storeuser)

function storeuser(e){
    e.preventDefault()
    var amount = document.getElementById("Amount").value;
    var description = document.getElementById("Description").value;
    var category = document.getElementById("category").value;
    const userDetails = {
        amount,
        description,
        category
    }
    localStorage.setItem(userDetails.description,JSON.stringify(userDetails))
    location.reload()
}

for(let i = 0 ; i<localStorage.length;i++){
    var old=localStorage.key(i)
    var oldUser = JSON.parse(localStorage.getItem(old))

    //create li and add class 
    var li = document.createElement("li")
    var li1 = document.createElement("li")
    
    var btnedit = document.createElement("button")
    var btndelete = document.createElement("button")
    btnedit.id = "btnedit"
    btndelete.id = "btndelete"
    btnedit.className = "btn btn-info end-0"
    btndelete.className = "btn btn-danger delete "
    btnedit.appendChild(document.createTextNode("Edit Expense"))
    btndelete.appendChild(document.createTextNode("Delete Expense"))
    li.className = "list-group-item list-group-item-light"

    //appeend text to li 
    li.appendChild(document.createTextNode(`Amount: ${oldUser.amount}, Description: ${oldUser.description},category: ${oldUser.category}`))
    li1.appendChild(btnedit)
    li1.appendChild(btndelete)
    var items = document.getElementById("items")
    items.appendChild(li)
    items.appendChild(li1)
}

//delete expense

var itemlist = document.getElementById("items")
var deleteUser = document.getElementById("btndelete")
itemlist.addEventListener("click", deleteinfo)
function deleteinfo(e) {
    e.preventDefault()
    if(e.target.classList.contains("delete")){
        var deleteuser1 = localStorage.key(e.target)
        localStorage.removeItem(deleteuser1)
        location.reload()
    }
}

//edit expense
var ediexpence = document.getElementById("btnedit")
itemlist.addEventListener("click",editInfo)

function editInfo(e){
    if(e.target.classList.contains("btn")){
        var edituser1 = localStorage.key(e.target)
        var val1 = localStorage.getItem(edituser1)
        var editAmount = document.getElementById("Amount")
        var editdescription = document.getElementById("Description")
        var editcategory = document.getElementById("Category")
        var localinfo = JSON.parse(val1)
        editAmount.value=localinfo.amount
        editdescription.value=localinfo.description
        editcategory.value=localinfo.category
        
    }

}
