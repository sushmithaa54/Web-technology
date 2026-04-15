let ChangeContent = ()=>{
    let elem=document.getElementById('head')
    elem.innerText='i love java script'
    elem.style.color='blue'
    elem.style.background='pink'
}

console.log(document.getElementById('abc'))
console.log(document.getElementsByClassName('hi')[2])
console.log(document.getElementsByTagName('h2')[1])
console.log(document.getElementsByName('fname'))
console.log(document.querySelector('h2'))
console.log(document.querySelectorAll('h2')[2])

let appycolor=()=>{
    let el=document.getElementsByTagName('h2')
    el[0].style.background='orange'
    el[0].style.color='white'
    el[0].style.height='10vh'
    el[0].style.padding='3vh'
    el[1].style.color='blue'
    el[2].style.cssText=`background:green;color:white;height:10vh;padding:3vh`
}