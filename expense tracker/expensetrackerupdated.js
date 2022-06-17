var form = document.getElementById("addForm")
form.addEventListener("submit",addExpense)

function addExpense(e){
    e.preventDefault()
    var amount = document.getElementById("Amount").value
    var description = document.getElementById("Description").value
    var category = document.getElementById("category").value
    const expenseDetails = {
        amount,
        description,
        category
    }

    axios.post("https://crudcrud.com/api/6f4e8a8d1fc7485991bd868c6a333db1/expense",expenseDetails)
        .then((Response)=>{
            console.log(Response)
            showNewExpenseOnScreen(Response.data)
        })
        .catch((err)=>{
            console.log(err)
        })
}

window.addEventListener("DOMContentLoaded",()=>{
    axios.get("https://crudcrud.com/api/6f4e8a8d1fc7485991bd868c6a333db1/expense")
        .then((Response)=>{
            for(let i=0 ; i<Response.data.length ; i++){
                console.log(Response)
                showNewExpenseOnScreen(Response.data[i])
                
            }
        })
        .catch((err)=>{
            console.log(err)
        })
})

function showNewExpenseOnScreen(user){
    var parentNode = document.getElementById("items")
    var childHTML = `<li id = ${user._id}> ${user.amount} - ${user.description} -${user.category} 
                    <button onclick = deleteExpense('${user._id}')>Delete Expense</button>
                    <button onclick = editExpense('${user._id}','${user.amount}','${user.description}')>Edit Expense</button>
                    </li>`
    parentNode.innerHTML = parentNode.innerHTML + childHTML  
}

function deleteExpense(id){
    axios.delete(`https://crudcrud.com/api/6f4e8a8d1fc7485991bd868c6a333db1/expense/${id}`)
        .then((Response)=>{
            removeExpense(id)
            console.log(Response)
        })
        .catch((err)=>{
            console.log(err)
        })
}

function removeExpense(id){
    var parentNode = document.getElementById("items")
    var child = document.getElementById(id)
    if(child){
        parentNode.removeChild(child)
    }
}

function editExpense(id,amount,description){
    document.getElementById("Amount").value = amount
    document.getElementById("Description").value = description
    removeExpense(id)
}



