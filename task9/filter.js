var form = document.getElementById("addForm")
var itemList = document.getElementById("items")
var filterName = document.getElementById("filter")

//form submit event
form.addEventListener("submit",additem)
itemList.addEventListener("click",removeIt)
filterName.addEventListener("keyup",searchItem)

function additem(e){
    e.preventDefault()

    //get new item
    var newItem = document.getElementById("item").value
    var newDesc = document.getElementById("item1").value

    //create li
    var li = document.createElement("li")
    var li1 = document.createElement("li")

    //create classname
    li.className=("list-group-item")
    li1.className=("list-group-item")

    //push item into li
    li.appendChild(document.createTextNode(newItem))
    li1.appendChild(document.createTextNode(newDesc))
    
    //create button
    var btn = document.createElement('button')
    var btn1 = document.createElement('button')

    //class name
    btn.className="btn btn-danger btn-sm float-right delete"
    btn1.className="btn btn-danger btn-sm float-right delete"

    //apppend text node
    btn.appendChild(document.createTextNode("x"))
    btn1.appendChild(document.createTextNode("x"))
    
    //append btn to li
    li.appendChild(btn)
    li1.appendChild(btn1)

    //append li to itemlist
    itemList.appendChild(li)
    itemList.appendChild(li1)
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

function searchItem(e){
    var text1 = e.target.value.toLowerCase()
    var items1 =itemList.getElementsByTagName("li")
    Array.from(items1).forEach(function(item){
        var itemName = item.firstChild.textContent
        
        if(itemName.toLowerCase().indexOf(text1)!= -1){
            item.style.display="block"
        }else{
            item.style.display="none"
        }
    })


}
