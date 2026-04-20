let generate_otp=()=>{
    let text=document.getElementById('text')
    let random=Math.random()*10000
    let otp=Math.floor(random);
    (otp>=1000)? text.innerText=otp : generate_otp();
}


// let generate_otp=()=>{
//     let text=document.getElementById('text')
//     let random=Math.random()*10000
//     let otp=Math.floor(random);
//     (otp>=1000)? text.innerText=otp:generate_otp();
// }