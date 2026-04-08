function fun(){
    console.log('hello usha evvath bandya....')
}
// fun()

function fun1(){
    console.log('yaak bande matte hogeee ushiiii 💕 gushiiii....😍')
}
// fun1()

function add(){
    let a=100
    let b=200
    let sum=a+b
    console.log(sum)
}
// add()


// function with parameter and without return
function call(fname){
    console.log('hello '+ fname)
}
// call('jaanu - goonu🐨')
// call('usha - gusha🙊' )
// call('anji - gunji🐵')
// call('raksha - riksha🛺')

function print1(fname,lname){
         console.log(`yene anjali ${fname} ${lname} 🐵🙊`)
}
// print1('mangan','magle')

function add2num(a,b){
    res=a+b
    console.log(`${a} + ${b} = ${res}`);
}
// add2num(100,200)
// add2num(90,45)

// WAP to print only even numbers from start to end using general function with parameter
function even(start,end){
    for(let i=start;i<=end;i++){
        if(i%2==0){
            console.log(i)
        }
    }
}
// even(10,20)
// even(100,150)
function even1(start,end){
    for(let i=start;i>=end;i--){
        if(i%2==0){
            console.log(i)
        }
    }
}
// even1(70,60)

function even2(start,end){
    if(start<end){
        for(let i=start;i<=end;i++){
        if(i%2==0)
            console.log(i)
    }
}else
    console.error('invalid range')

}
// even2(70,60)
// even2(20,60)


function num(start,end){
   if(typeof start==='number' && typeof end==='number'){
     if(start<end){
        for(let i=start;i<=end;i++){
        if(i%2==0)
            console.log(i)
    }
}else
    console.error('invalid range')
   }else
    console.log('it is not a number')

}
// num('a','b')


// WAP to print only odd numbers from start to end using general function with parameter
function odd(start,end){
   if(typeof start==='number'&& typeof end==='number'){
     if(start<end){
        for(let i=start;i<=end;i++){
            if(i%2!=0){
                console.log(i)
            }
        }
    }else
        console.log('invalid range')
   }else
    console.log(NaN)
}
// odd(10,20)
// odd('a'+'b')
// odd(90,40)


// change the default value of parameter

function demo1(a){
    console.log(a)
}
demo1()
demo1()

// to change using assignment
function demo(a=0){
    console.log(a)
}
// demo(100)
// demo('sagar') // we cant do like this becouse when we assign the 0 to the parameter that will be number type

u
function demo2(a,b){
    res=a+b
    console.log(`${a} + ${b} = ${res}`)
}
demo2()


function demo3(a=0,b=0){
    res=a+b
    console.log(`${a} + ${b} = ${res}`)
}
demo3()
