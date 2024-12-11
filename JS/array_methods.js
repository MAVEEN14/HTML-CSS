// // Array methods


// // for each: it doesnot return a new array
// let arr = [1,2,3,4,5]
// arr.forEach((el)=>{
//     console.log(el)
// })

// let arr1 = [
//     {   name:"Maveen",
//         marks: 90
//     },
//     {
//         name:"Gopi",
//         marks:94
//     },
//     {
//         name:"Guru",
//         marks:95
//     }
// ]
// arr1.forEach((s_marks) =>{
//     console.log(s_marks.marks)
// })


// // map:- it will return a new array
// let cgpa = arr1.map((el)=>{
//     return el.marks/10
// })
// console.log(cgpa)


// // filter:- if true add, else not add
// let nums = [1,2,3,4,3,2,5,6,8,7]
// let even = nums.filter((el)=>{
//     return el%2==0
// })
// console.log(even)


// // Every:- returns true if every element is true
// let num = [2,4,6]
// let res = num.every((el) => {return el%2==0})
// console.log(res)


// // some:- returns true if some element is true
// let number = [1,2,3,4,5,6]
// let ans = number.some((el) =>{
//     return el%2==0
// })
// console.log(ans)

// // reduce: reduce the all numbers to a single value
// result = number.reduce((res,el)=>{
//     return (res+el)
// })
// console.log(result)


// finding max number
// let num = [1,2,3,4,5,6,7,8,9,10,11]
// let res = num.reduce((max,el) =>{
//     if(max<el){
//         return el
//     }
//     else{
//         return max
//     }
// })
// console.log("Max value is: ",res)

// // finding minimum array
// let num = [1,2,3,4,5,-2,-1,-10]
// let min = num.reduce((min,el) =>{
//     if(min<el){
//         return min
//     }
//     else{
//         return el
//     }
// })
// console.log(min)

// // Checking all numbers are divisible by 10 or not
// let nums = [10,20,30,40,5,50]
// let res = nums.every((el) => el%10==0)
// console.log(res)

// default parameters
// function sum(a,b = 2){
//     console.log(a+b)
// }
// sum(5)


// spread
// let arra1 = [1,2,3,4,5,6,7]
// console.log(Math.min(...arra1))
// console.log(...arra1)


// spread with array literals

// console.log([..."Hello world"])

// let odd = [1,3,5,7,9];
// let even = [2,4,6,8,10];
// console.log(...odd,...even)


// spread with object literals
// let obj1 = {
//     name:"Maveen",
//     number:14
// }
// let data = {...obj1,country:"India"}
// console.log(data)


// rest
// function sum(...args){
//     console.log(args.reduce((sum,el)=> sum+el
//  ))
// }
// sum(1,2,3,4)


// destructuring
// let names = ["Tony","Bruce","Steeve","Thor","Peter"]
// let [first,second,...remaining] = names;
// console.log(first, second,remaining)


// // destructuring objects
// let student = {
//     name:"maveen",
//     age:23,
//     number:"19KN1A0314",
//     branch:"Mechanical",
//     section:'A'
// }

// let {name,age,mobile = 9347850485} = student

// console.log(name)
// console.log(mobile)
// console.log(age)



// Assignment


// Qs1. Square and sum the array elements using the arrow function and then find the
// average of the array.
let numbers = [1,2,3,4,5]
let square = numbers.map((el) => el*el)
console.log(square)
let sum = square.reduce((sum,el)=>sum+el)
console.log("sum is:",sum)
let avg = sum/numbers.length
console.log("Average is:",avg)


// Qs2. Create a new array using the map function whose each element is equal to the
// original element plus 5.

let arr1 = [1,2,3,4,5,6]
let newArr = arr1.map((el) => {
    return el+5}
)
console.log(newArr)


// Qs3. Create a new array whose elements are in uppercase of words present in the
// original array.

let ar1 = ["Maveen",'naveen','praveen','sravan','Chowdary']
let upper = ar1.map((el)=>el.toUpperCase())
console.log(upper)

