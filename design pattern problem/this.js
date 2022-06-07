//desing pattern problem
//let i = 0 
//let i=0

class Student{
    static i = 0
    constructor(name,age,phoneNumber,boardMarks){
        this.name = name
        this.age = age
        this.phoneNumber = phoneNumber
        this.boardMarks = boardMarks
        Student.i++
    }
    checkEligible(){
        console.log( this.boardMarks >= 40 ? `${this.name} is eligible` :`${this.name} is not eligible`)
        
    }
    countUser(){
        console.log(Student.i)
    }
    checkEligibleForPlacement = () => {
        const check = this.boardMarks >= 40 && this.age >= 25 ? true : false;
        if(check == true ) return console.log(this.name) 
    }
}

const Student1 = new Student("john",25,45615,52)
const Student2 = new Student("sham",24,53155,75)
const Student3 = new Student("ankit",23,44415,25)
const Student4 = new Student("ramesh",26,451615,28)
const Student5 = new Student("suresh",30,456455,98)
Student1.checkEligible()
Student2.checkEligible()
Student3.checkEligible()
Student4.checkEligible()
Student5.checkEligible()
Student1.countUser()
Student1.checkEligibleForPlacement()
Student2.checkEligibleForPlacement()
Student3.checkEligibleForPlacement()
Student5.checkEligibleForPlacement()
Student4.checkEligibleForPlacement()






