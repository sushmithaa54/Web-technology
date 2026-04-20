let digital_lock=()=>{
    let elem=document.getElementsByTagName('h1')
    let dateobj=new Date()
    let curtime=dateobj.toLocaleTimeString()
    let curdate=dateobj.toLocaleDateString()
    

    elem[0].innerText=curtime
    elem[1].innerText=curdate

    let curday=dateobj.getDay()
    switch(curday){
        case 1:elem[2].innerText='MONDAY'
        break;
        case 2:elem[2].innerText='TUESDAY'
        break;
        case 3:elem[2].innerText='WEDNESDAY'
        break;
        case 4:elem[2].innerText='THURSDAY'
        break;
        case 5:elem[2].innerText='FRIDAY'
        break;
        case 6:elem[2].innerText='SATURDAY'
        break;
        case 7:elem[2].innerText='SUNDAY'
        break;
    }

}



// let digital_lock=()=>{
//     let dateobj=new Date()
//     let display=document.getElementsByTagName('h1')
//     let time=dateobj.toLocaleTimeString()
//     let date=dateobj.toLocaleDateString()
//     let day=dateobj.getDay()

//     display[0].innerText=time
//     display[1].innerText=date
    
//     switch (day){
//         case 1:
//             display[2].innerText='monday'
//     }


// }