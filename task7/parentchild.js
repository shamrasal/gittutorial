var items = document.querySelector("#items")

// //parentNode
// console.log(items.parentNode)
// items.parentNode.style.backgroundColor="yellow"
// console.log(items.parentNode.parentNode.parentNode)

// //parentElement
// console.log(items.parentElement)
// items.parentElement.style.backgroundColor="yellow"
// console.log(items.parentElement.parentElement.parentElement)

// //childNode
// console.log(items.childNodes)

// children
// console.log(items.children)
// console.log(items.children[1])
// items.children[1].style.backgroundColor="yellow"

//firstChild
// console.log(items.firstChild)

//firstElementChild
// console.log(items.firstElementChild)
// items.firstElementChild.textContent="hello"

//lastChild
// console.log(items.lastChild)

//lastElementChild
// console.log(items.lastElementChild)
// items.lastElementChild.textContent="sham"


// nextSibling
// console.log(items.nextSibling)

// //nextElementSibling
// console.log(items.nextElementSibling)

// // previousSibling
// console.log(items.previousSibling)

// // previousElementSibling
// console.log(items.previousElementSibling)
// items.previousElementSibling.style.color = "green"

//create element

// //create new div
// var newDive = document.createElement("div")

// //create class
// newDive.className = "hello"

// //create id
// newDive.id = "hello1"

// //add atr
// newDive.setAttribute("title", "hello div")

// //create text node
// var newDiveText = document.createTextNode("hello world")

// //append text to div
// newDive.append(newDiveText)
// console.log(newDive)

// //push div to dom
// var container = document.querySelector("header .container")
// var h1 = document.querySelector("header h1")
// // container.insertBefore(newDive,h1)

// var newhi=document.createElement("div")
// var text1 = document.createTextNode="HELLo"
// newhi.append(text1)
// container.insertBefore(newhi,h1)

// var item1 = document.querySelector("header .container")
var item1 = document.getElementById("items")
var place = item1.children[0]

var newstr = document.createElement("li")
newstr.className="list-group-item"
var text2=document.createTextNode("HELLo")
newstr.append(text2)
console.log(newstr)

item1.insertBefore(newstr,place)




