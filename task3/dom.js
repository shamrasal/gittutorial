console.dir(document)
console.log(document.URL)
console.log(document.title)
//document.title = 123
//console.log(document.all[10])
//document.all[10].textContent ="hello"

//get element by element id 
var headertitile = document.getElementById("header-title")
var additem = document.querySelector(".title")
console.log(headertitile)
headertitile.textContent="hello"
headertitile.style.borderBottom ="solid 3px #000"
// additem.style.color = "green"
console.log(additem)
additem.style.fontWeight = "bold"
additem.style.color = "green"

