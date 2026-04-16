let singleclick=()=>{
  let boxes =  document.getElementsByClassName('box')
  boxes[0].innerText='welcome'
  boxes[1].innerHTML=`<b>hii</b>`
  boxes[1].style.cssText=`color:yellow;background:red`
  boxes[2].style.cssText=`border-radius:50%;background:blue`
}

let changeimage=()=>{
    let image=document.querySelector('img')
    image.src='./sid.jpg'
}


let onoff=()=>{
    let btn=document.getElementById('btn')
    if(btn.innerText==='ON'){
        btn.innerText='OFF'
        btn.style.background='red'
    }else{
        btn.innerText='ON'
        btn.style.background='green'
    }
}


let daynight = () => {
    let n = document.querySelector('.body')
    let btn1 = document.getElementById('btn1')

    if(btn1.innerText === 'day'){
        btn1.innerText = 'night'
        btn1.style.background = 'white'
        btn1.style.color = 'black'
        n.style.background = 'white'
        n.style.color = 'black'
    }
    else{
        btn1.innerText = 'day'
        btn1.style.background = 'black'
        btn1.style.color = 'white'
        n.style.background = 'black'
        // n.style.color = 'white'
    }
}