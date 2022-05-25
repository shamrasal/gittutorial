//get element by class name

var item = document.getElementsByClassName("list-group-item")
console.log(item)
item[1].textContent="hello"
item[1].style.backgroundColor ="yellow"
item[1].style.fontWeight ="bold"

//get element by tag name

var item = document.getElementsByTagName("li")
console.log(item)
item[2].textContent="tag name"
item[2].style.backgroundColor ="green"
item[1].style.fontWeight ="bold"
item[4].style.backgroundColor ="red"



