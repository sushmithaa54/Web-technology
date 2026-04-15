let arr=[7,3,5,6,1,2,8,4,9]
console.log(arr);

console.warn('for loop')
let res_arr=[]
for(let i=0;i<arr.length;i++){
    // arr[i]=arr[i]**2
    res_arr[res_arr.length]=arr[i]*arr[i]
}
console.log(res_arr);


console.warn('for-of loop')
let res_arr1=[]
for(let j of arr){
    res_arr1[res_arr1.length]=j*j
}
console.log(res_arr1)

console.warn('forEach loop')
let res_arr2=[]
arr.forEach((elem)=>{
     res_arr2[res_arr2.length]=elem*elem
})
console.log(res_arr2)

console.warn('map loop')

let res_arr3=arr.map((elem)=>{
    return elem*elem
})
console.log(res_arr3)





// let n=[]
// number=5
// for(i=1;i<11;i++){
//     // n[n.length]=i
//     n[n.length]=`${number}*${i}=${number*i}`
// }
// console.log(n)

console.warn('for - of')

n=[1,2,3,4,5,6,7,8,9,10]
let number1=3
for(let i of n){
    console.log(`${number1}*${i}=${number1*i}`);
}


console.warn('foreach')
number2=4
n.forEach((elem)=>{
    res=`${number2}*${elem}=${number2*elem}`
    console.log(res)
})

let number3=6
let num=n.map((elem1)=>{
    return `${number3}*${elem1}=${number3*elem1}`
})
console.log(num)




// even number 


console.warn('for loop')
let array=[4,7,6,2,5,1,9,8,3]
let ress1=[]
for(i=0;i<array.length;i++){
    if(array[i]%2==0){
        ress1[ress1.length]=array[i]
    }
}
console.log(ress1)


console.warn('for-of loop')
let ress2=[]
for(let i of array){
    if(i%2==0){
        ress2[ress2.length]=i
    }
}
console.log(ress2)

console.warn('foreach methos')
let ress3=[]
array.forEach((elem)=>{
    if(elem%2==0){
        ress3[ress3.length]=elem
    }
})
console.log(ress3)


console.warn('map method')
let a=array.map((elem)=>{
    return elem%2==0  
})
console.log(a)



console.warn('filter method')
let x=array.filter((elem)=>{
    return elem%2==0
})
console.log(x)



