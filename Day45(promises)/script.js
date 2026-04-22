let p=new Promise((res,rej)=>{
    if(true){
        console.log('i am selected')
    }else{
        console.log('i am rejected')
    }
})

p.then((data)=>{
    console.log('data')
})

p.catch((err)=>{
    console.log(err)
})


p.finally(()=>{
    console.log('task completed')
})


// example for delay

let maintast=()=>{
    let time=1;
    setInterval(()=>{
        console.log(time++)
    },1000)
}

setTimeout(()=>{
    console.log('start')
},5000)
setTimeout(()=>{
    console.log('exicute')
},3000)
setTimeout(()=>{
    console.log('end')
},2000)


// call back hell

let cbfhell=()=>{
    setTimeout(()=>{
        console.log('start');
        setTimeout(()=>{
            console.log('exicute');
    
            setTimeout(()=>{
                console.log('end');
            },2000)
        },3000)
    },5000)
}

cbfhell()


// async and await

let fun=async()=>{
    return 'hello'
}
let promose=fun()
console.log(Promise);
Promise.then( data =>console.log(data))




let task=()=>{
    let promose=new Promise((res)=>{
        setTimeout(()=>{
            res('execute')
        },5000)
    })
    return Promise
}


let mainfun=async()=>{
    console.log('start');
    console.log(await task());
    console.log('end');
}
mainfun()