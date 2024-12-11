// // function name(){
// //     console.log("Hello world!")
// // }
// // name()


// // function sum(a,b){
// //     console.log(a+b)
// // }
// // sum(10,12)


// // function add(a,b,c){
// //     let sum = a+b+c
// //     console.log(sum)
// // }
// // add(10,12,2)

// // default parameters
// // function sum(a,b=3){
// //     console.log(a+b);
// // }
// // sum(2,5)

// // rest parameter
// // function sum(a,...b){
// //     console.log(a);
// //     console.log(b);
// // }
// // sum(1,2,2,3,5,6,6,7,9)

// // arrow     function

// // let sum = (x,y) => console.log(x+y)

// // sum(2,3)


// // nested function

// // let town = "Hyderabad"
// // function outer(){
// //     let name = "Hello"
// //     console.log(town)
// //     console.log(age)

// //     function inner(){
// //         let age = 25
// //         console.log(name)
// //         console.log(town)
// //     }
// //     inner()
// // }
// // outer()



// // // function scope


// // // 1. variables declared inside a function cannot be accesed outside the function
// // // 2. variables are declared outside the function can have a scope of inside the function

// // let a = 10;
// // let b = 20;
// // let c = 30;
// // function add(){
// //     console.log(a+b+c);
// // }
// // add()


// // function call back
// // function greet(name,message){
// //     console.log(`hi ${name},${message}`)
// // }

// // function greeting(){
// //     return `How are you`
// // }
// // greet("Maveen",greeting())



// // pure function
// // function saygreeting(name){
// //     console.log("Hello",name)
// // }

// // saygreeting("Welcome")


// // IIFE
// // (function(){
// //     console.log('IIFE')
// // })()



// // recursive function
// // function factorial(n){
// //     if(n==0){
// //         return 1;
// //     }
// //     else{
// //         return n*factorial(n-1);
// //     }
// // }
// // console.log(factorial(5))


// function myfunc(msg){
//     console.log(msg="Hello world")
// }
// myfunc()




// Functions

function hello(){
    console.log("Hello")
}
hello()



function printName(){
    console.log("Maveen Chowdary")
}
printName()



function isAdult(){
    let age = 18;
    if(age>=18){
        console.log("You are eligible to vote")
    }
    else{
        console.log("you are not eligible to vote")
    }
}

isAdult()


function add(){
    let a = 2;
    let b = 3;
    console.log("The addition of the given two numbers is",a+b)
}
add()

// Poem
function poem(){
    console.log("twinkle twinkle little star")
    console.log("how i wonder what you are" ) 
    console.log("Up above the world is so high") 
    console.log("like a diamond in the sky")
}
poem()

// dice rolling

function diceRoll(){
    let random = Math.floor(Math.random()*6)+1;
    console.log(random)
}
diceRoll()


// add
// function add(a,b){
//     a=7,
//     b=3
//     console.log(a+b)
// }
// add()

function add(a,b){
    console.log(a+b)
}
add(4,0)

// Practise
function average(a,b,c){
    let avg = (a+b+c)/3
    console.log("The average of the given numbers is",avg)
}
average(1,2,3)

// multiplication
function table(n){
    for(let i =n;i<=n*10;i = i+n){
        console.log(i)
    }
}
table(7)




// return keyword
// sum
function sum(a,b){
    return a+b
}
console.log(sum(3,5))
console.log(sum(sum(3,4),9))


// or

function subtraction(a,b){
    return a-b
}
let s = subtraction(10,5)
console.log(s)


// is adult

function isadult(age){
    if(age>=18){
        return("You are an adult")
    }
    else{
        return("You are not an adult")
    }
}

console.log(isadult(20))

// sum of n numbers
function getsum(n){
    let sum = 0
    for(let i = 1;i<=n;i++){
        sum = sum+i
    }
    return sum
}
console.log(getsum(100))



// sum of the strings
let str = ["Hello ","Maveen ","Chowdary "]

function sum_of_strings(){
    let sum = ""
    for(let i = 0;i<str.length;i++){
        sum = sum+str[i]
    }
    return sum
}
console.log(sum_of_strings())


// Scope
let S_sum = 40
function sum_of_numbers(a,b){
    let addition = a+b
    return addition

}
console.log(sum_of_numbers(10,20))
console.log(S_sum)

// Global scope
let age = 25
if(age>18){
    var s_str = "You are an adult"
}
console.log(s_str)


// lexical scope
function outer(){
    let x = 10
    let y = 20
    function inner(){
        let a =20
        console.log(x+y)
    }
    inner()
}
outer()
// console.log(a)


// Practise
let greet = "Hello"
function changegreet(){
    let greet = "namaste";
    console.log(greet);
    function innergreet(){
        console.log(greet)
    }
    innergreet()
}
console.log(greet)
changegreet()

// function expression
let a = function(a,b){
    return a+b
}
console.log(a(3,4))


// Higher order function

function Higher(func,count){
    for(let i = 0;i<=count; i++){
        func()
    }
}

function Greet(){
    console.log("Hello")
}

Higher(Greet,10)


// Methods
const calculator = {
    add:function(a,b){
        return a+b
    },
    sub:function(a,b){
        return a-b
    },
    mul:function(a,b){
        return a*b
    }
};
console.log(calculator.add(2,3))
console.log(calculator.sub(10,3))
console.log(calculator.mul(10,2))
