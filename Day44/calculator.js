let input=document.querySelector('input')

let getvalue=(e)=>{
    let text = e.target.innerText
    input.value+=text
}

let calculate =()=>{
    let res=eval(input.value)
    input.value=res
}

let cl=()=>{
    input.value=""
}

let clear1=()=>{
    let delone=input.value.slice(0,-1)
    input.value=delone
}

