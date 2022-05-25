//get element by quaryselector

var item = document.querySelector("#items")
console.log(item.children[2])
item.children[1].style.backgroundColor ="green"
item.children[2].style.visibility ="hidden"

// get element by quaryselectorall
var item1 = document.querySelectorAll("li")
item.children[1].style.color ="green"
var odd = document.querySelectorAll("li:nth-child(odd)");
for(let i=0;i<odd.length;i++){
    odd[i].style.backgroundColor ="green"
}


