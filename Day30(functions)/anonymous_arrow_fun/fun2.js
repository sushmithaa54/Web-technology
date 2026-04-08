// ananymous function
// // without parameter and without return statement 
let f1=function(){
    console.log('hello')
}
f1()

// with parameter and without return statement 
let f2=function(fname){
    console.log('hello',fname)
}
f2('sagar')

// without parameter and with return statement 
let f3=function(){
    fname='nidhi'
    return fname
}
let r=f3()
console.log(r)

// with parameter and with return statement 
let f4=function(fname,lname){
    return `full name :${fname} ${lname}`
}
let r1=f4("Preeti","jadhav")
console.log(r1)









//arrow function

console.warn('arrow function')
//without parameter and without return statement
let a1=()=>{
    let a=10
    console.log(a)
}
a1()

//with parameter and without return statement
let a2=(fullname)=>{
    console.log(fullname)
}
a2('suhas')

//without parameter and with return statement
let a3=()=>{
    fullname='nitya'
    return(fullname)
}
let res1=a3()
console.log(res1)

//with parameter and with return statement
let a4=(a,b)=>{
    let sum=a+b
    return(`sum:${sum}`)
}
let res2=a4(10,20)
console.log(res2)

