// Object
let student={
    sname:"chaya",
    branch:"cse",
    college:"UBDT"
}
console.log(`${student.sname} in ${student.branch} branch`)


// destructuring
let {sname,branch,college}=student
console.log(`${sname} in ${branch} branch`)

// CRUD OPERATION ON OBJECT
//creating the object
let sports={
    name:"vallyball",
    age:25,
    weight:60
}
console.log(sports)

//reading the properties of object
//using pripertis
console.log(`for playing ${sports.name} the age should be less than ${sports.age}`)

//using destructuring
let {name,age,weight}=sports
console.log(`and the wieght should be less than ${weight}`)


//adding the new property to the object
sports.class=10
console.log(sports)

//updating the value/property of the object
sports.age=30
console.log(sports)

//to deleting the property of object
delete sports.class
console.log(sports)


//NESTED OBJECT
let person={
    pname:"ranjan",
    job:"majdhoori",
    age:"25",
    address :{
        streetno:"#123",
        street:"chiiii",
        area:"theragupete"

    }
}

console.log(person)
console.log(`${person.pname} is a good boy ,his area is ${person.address.area}`)

// destructuring the person and address
let {pname,address}=person
let {area}=address
console.log(`${pname} is a good boy ,his area is ${area}`)


// functions inside the object
let admi={
    aname:'sheeraz',
    lname:'ahmed',
    dob:1991,
    fullname:function(){
        console.log(`my name is ${this.aname} ${this.lname}`)
    },
    calculateage:function(){
        let age=2026-this.dob
        console.log(`${this.aname} age is ${age}`)
    }
}
admi.calculateage()
admi.fullname()