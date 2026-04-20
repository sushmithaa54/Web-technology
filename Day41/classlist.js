let onoff=()=>{
    let btn=document.getElementById('btn')
    btn.classList.toggle('on')
    btn.classList.toggle('off');

    (btn.innerText==='ON')? btn.innerText='OFF': btn.innerText='ON'
}