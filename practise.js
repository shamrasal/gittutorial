// //this used in global space
// this.car = "my car"
// console.log(this.car)

// //this used inside the object 
// const newCar = {
//     color : "red",

//     cleanCar(){
//         console.log(`${this.color} car is cleaning`)
//     }
// }
// console.log(newCar.color)

// //this inside the method
// newCar.cleanCar()

// //this inside the function
// this.bike="my bike"
// this.car= "my car"

// const cleanBike = function(){
//     console.log(`cleaning ${this.bike}`)
// }
// cleanBike.call(this)

// //this inside the inner function
// const cleanBike1 = function(value){
//     const bike1 = function(value){
//         console.log(`cleaning ${this.car} with ${value}`)
//     }
//     bike1.call(this,"water")
// }
// cleanBike1.call(this,"water")

// //this inside the constructor

// const addUser = function(name){
//     this.name = `${name}s car`
// }

// addUser.prototype.cleanBike = function(val){
//     console.log(`cleaning ${this.name} with ${val}`)
// }

// const shamsCar = new addUser("sham")

// shamsCar.cleanBike("water")

// //this inside the class

// class user {
//     constructor(name){
//         this.name = `${name}s car`
//     }
//     condition(val){
//         console.log(`${this.name}s in ${val} condition`)
//     }
// }
// const johnsCar=new user("john")
// const nikhilCar=new user("nikhil")

// nikhilCar.condition("good")



"use strict";
// var getA = function(a){
//     return a 
// }
let getA = a => a ;
console.log(getA(1))

//square of number
let a = 8
let square = () => {return a*a};
console.log(square())


//multiply two numbers
let multiply = (a,b) => {return a*b};
console.log(multiply(2,5))

var x =function(){
    this.val = 1;
    setTimeout(()=>{
        this.val++
        console.log(this.val)
    },1)
}

var xx = new x ()

var z = (...n)=>{
    console.log(n[0])
}
z(5,3,4)

