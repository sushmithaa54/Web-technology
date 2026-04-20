let handleinput=(e)=>{
    e.preventDefault()
    let printname=document.getElementById('printname')

    let fname=e.target[0].value
    let lname=e.target[1].value
    let dob= e.target[2].value
    let place= e.target[3].value
    
    let d=new Date()
    let age=d.getFullYear()-dob.slice(0,4)
    printname.innerText=`my name is : ${fname} ${lname} and age is : ${age} , i am from : ${place}`
    
}



let color=()=>{
    prompt('enter the color')
    
}