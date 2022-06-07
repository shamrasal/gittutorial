
// call apply and bind  
const obj1 = {
    "model" : "city",
}
const obj2 = {
    "model" : "tavera",
}
const obj3 = {
    "model" : "fortuner",
}

function carSpec (a,b,c){
    return console.log("car "+this.model + " - " + a + ", " + b + ", " + c)
}

carSpec.call(obj1,"pink","Red","blue")

let arr = ["blac","yellow","grey"]
carSpec.apply(obj2,arr)

const bound = carSpec.bind(obj3)
bound("red","green","white")

// using bind print the age of student 

const student={
    age : 20
}

function printInfo(){
    return console.log("age " + this.age)
}

const student1 = printInfo.bind(student)
student1()

//curying by blind method

let multiply = function(x,y){
    console.log(x*y)
}

let multiplyByTwo = multiply.bind(this,2)
multiplyByTwo(3)

let multiplyByThree = multiply.bind(this,3)
multiplyByThree(5)

//curying by clouser method

let multiply1 = function(x){
    return function(y){
        console.log(x*y)
    }
}
let multiplyByTwo1 = multiply1.bind(this,2)
multiplyByTwo(5)

let multiplyByThree1 = multiply1.bind(this,3)
multiplyByThree(10)