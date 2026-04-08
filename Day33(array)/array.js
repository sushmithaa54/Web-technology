// WAP to print only even numbers from array using for loop and result store it in results array(note:without using any inbuilt functions)


let arr=[10,15,20,25,30,35]
let res=[]
for (let i=0;i<arr.length;i++){
    if (arr[i]%2==0){
        res[res.length]=arr[i]
    }
}
console.log(res);


// WAP to print only odd numbers from array using for loop and result store it in results array(note:without using any inbuilt functions)

let arr1=[10,15,20,25,30,35]
let res1=[]
for(i=0;i<arr1.length;i++){
    if(arr1[i]%2!=0){
        res1[res1.length]=arr1[i]
    }
}
console.log(res1);

console.warn('using for-in loop')
let arr2=[10,15,20,25,30,35]
for(let j in arr2){
    console.log(j)
}





console.warn('using for-of loop')
let arr3=[10,15,20,25,30,35]
for(let k of arr3){
    console.log(k)
}


console.warn('using for-each method')
arr3.forEach((value,key)=>{
    console.log(`elements:${value} and index:${key}`)
})





console.warn('using map method')
let a=arr3.map((value,key)=>{
    return `${value}:${key}`
})
console.log(a)

let res2=arr.map((elem)=>{
    return elem%2==0

})

// console.log(res2)

// arr2.map((elem,val)=>{
//     console.log(elem);
//     console.log(val);
// })






console.warn('filter method')
let x=arr.filter((elem)=>{
    return elem%2==0

})
console.log(x)
