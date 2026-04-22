
let otp;
let generate_otp=()=>{
    let display=document.getElementById('display')
    let random=Math.random()*10000
    otp=Math.floor(random);
    (otp>=1000)? display.innerText=otp : generate_otp();
    
}


let verify=()=>{
   let input=document.querySelector('input')
   let text=document.querySelector('h2')
    if(input.value==otp){
        text.innerText='OTP VARIFIED SUCCESFULLY'
        text.style.color='green'
    }
    
    else if(input.value==""){
        text.innerText='PLEASE ENTER OTP'
        text.style.color='orange'

    }
    else{
        text.innerText='INVALID OTP'
        text.style.color='red'
    }
    
}


let obj={
    password:12345678,
    
}
let password=()=>{
    let input1=document.querySelector('#input2')
    let text=document.querySelector('h5')
    



}

