var form = document.getElementById("addForm")
var itemList = document.getElementById("items")

//form submit event
form.addEventListener("submit",additem)
itemList.addEventListener("click",removeIt)

function additem(e){
    e.preventDefault()

    //get new item
    var newItem = document.getElementById("item").value

    //create li
    var li = document.createElement("li")

    //create classname
    li.className=("list-group-item")

    //push item into li
    li.appendChild(document.createTextNode(newItem))
    
    //create button
    var btn = document.createElement('button')
    var editbtn=document.createElement("button")

    //class name
    btn.className="btn btn-danger btn-sm float-right delete"
    editbtn.className="btn btn-danger btn-sm float-right delete"
    //apppend text node
    btn.appendChild(document.createTextNode("x"))
    editbtn.appendChild(document.createTextNode("edit"))
    

    //append btn to li
    li.appendChild(editbtn)
    li.appendChild(btn)

    //append li to itemlist
    itemList.appendChild(li)
}

//remove item
function removeIt(e){
    if(e.target.classList.contains("delete")){
        if(confirm("are you sure")){
            var li= e.target.parentElement
            itemList.removeChild(li)
        }
    }
}