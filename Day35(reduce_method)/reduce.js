let arr=[2,4,3,7,5]
console.log(arr);
let res=arr.reduce((preval,curval)=>{
    let sum=preval+curval
    console.log(`${preval}+${curval}=${sum}`);
    return sum
})
console.log(res);


// print larger number in the array
let res1=arr.reduce((p,c)=>{
    return p>c?p:c
})

console.log(res1)

// sort method 
// direct sort
let arr1=[1,5,2,4,8,5,9,7,6,3]
console.log(arr1)
let x=arr1.sort()
console.log(x)
// to reverse
console.log(x.reverse())


// 2nd way 
// ascending
let y=arr.sort((a,b)=>{
    return a-b
   
})
 console.log(y)
// descending
let z=arr.sort((a,b)=>{
    return b-a
   
})
 console.log(z)

 
