// // This keyword
// const student = {
//     name:"Maveen",
//     age:23,
//     math:95,
//     eng:75,
//     hindi:91,

//     avg_marks(){
//         return(`The average marks is ${(this.math + this.eng + this.hindi)/3}`)
//     }
// }
// console.log(student.avg_marks())


// // try and catch

// console.log("Hello")
// console.log("Hello")

// try
// {console.log(a)}
// catch{
//     console.log("a is not defined")
// }

// console.log("World")
// console.log("World")


// // Arrow function
// let sum = (a,b) => {
//     console.log(a+b)
// }
// sum(2,3)

// let cube = (n)=>{
//     console.log(n*n*n)
// }
// cube(5)

// let pow = (a,b) =>{
//     return(a**b)
// }
// console.log(pow(3,2))


// implicit return
// const sum = (a,b) => (a+b)
// console.log(sum(2,3))
// console.log(sum(10,3))


// timeout function

// console.log("Hi")
// setTimeout( ()=>{
//     console.log("timeout function in Javascript")
// },3000)
// console.log("Welcome to")

// setInterval function

// let id = setInterval( ()=>{
//     console.log("Hello world")
// },3000)

// clearInterval(id)  //used to stop in a certain interval

// Practise

// 1)
// const square = (n)=>(n*n)
// console.log(square(121))


// 2)
let id = setInterval(()=>{
    console.log("hello world!")
},2000);

setTimeout(()=>{
    clearInterval(id),
    console.log("interval done")
},10000);
