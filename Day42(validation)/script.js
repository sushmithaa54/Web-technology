
let validate=(e)=>{
    e.preventDefault()
    let err=document.querySelector('.err')
    let emailfield=e.target[0]

    if(emailfield.value===""||emailfield.value===null){
        emailfield.style.border='solid 2px red'
        err.innerHTML=`Email feild is empty`
        
    }else{
        alert('welcom')
    }
}

let login1=(e)=>{
    e.preventDefault()
    let loginn=document.querySelector('.loginn')

    let credentials={
        email:"sagar@gmail.com",
        password:"sagar123"
    }

    let {email,password}=credentials

    let emailfield1=e.target[0]
    let pswdfield=e.target[1]

    if(emailfield1.value===email){
        if(pswdfield.value===password){
            loginn.innerHTML=`Welcome`
            window.location.href="./nextpage.html"
        }else{
            loginn.innerHTML=`invalid password`
        }
    }else{
        loginn.innerHTML=`invalid email`
    }
}

let currentlocation=()=>{
    window.location.href=''
}