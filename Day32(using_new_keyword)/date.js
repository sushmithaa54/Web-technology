let d=new Date()
console.log(d)
console.log(typeof d)
console.log(`${d.getHours()}:${d.getMonth()+1}:${d.getSeconds()}`)
console.log(`${d.getDate()}:${d.getMonth()+1}:${d.getFullYear()}`)
console.log(d.getDay())


//using constructor function
function Car(name,color){
    this.cname=name
    this.ccolor=color
}
let c1=new Car('BMW','blue')
console.log(c1)
let c2=new Car('tesla','black')
console.log(c2)


//imp example

function obj1(fname,lname,yyyy,wife){
    this.fname=fname
    this.lname=lname
    this.yyyy=yyyy
    this.fullname=function(){
        return(`my name is ${this.fname} ${this.lname}`)

    }
    this.calage=function(){
        let date=new Date()
        let age=date.getFullYear()-this.yyyy
        return(`my age is ${age}`)
    }
    this.wife=wife

}
let o1= new obj1('jaanu','raani',2004)
console.log(o1.fullname())
console.log(o1.calage())

let o2=new obj1('ram','krishna',1999,'sushmitha')
console.log(o2.fullname())
console.log(o2.calage())
console.log(`my soulmate name is ${o2.wife}`)

