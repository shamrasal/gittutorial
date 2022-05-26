var form = document.getElementById("addForm")

//form submit event
form.addEventListener("submit",additem)
function additem(e){
    e.preventDefault()

    //localstorage
    var newItem = document.getElementById("item").value
    var newDesc = document.getElementById("item1").value
    localStorage.setItem(newItem,newDesc)

}
