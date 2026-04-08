/* function without parameters & with return statements */
function fun(){
    let a=100
    let b=200
    let sum=a+b
    console.log(sum);
    return `${a}+${b}=${sum}`
}
// let res=fun()
// console.log(res)

/* function with parameters & with return statements */
function fun1(fname='',lname=''){
    return(`hello ${fname} ${lname}`)
}
let x=fun1('jaanu','monu')
// console.log(x)

// console.log(fun1('anju'))




// wap to check given number is even or add using general function with parameter and return statements
function fun2(num=0){
    if(num%2==0)
        return('even')
    else
        return('odd')
}
console.log(fun2(3))


//or 
function fun3(num=Number()){
    return (num%2==0)? 'even':'odd'
}
console.log(fun2(8))