// let student = {
//     name:"Maveen",
//     age:23,
//     number:14,
//     marks:94.4
// };
// console.log(student)

// // get values
// console.log(student.age)

// console.log(student.marks)



// const obj = {
//     1:"a",
//     2:"b",
//     true:"Hello",
//     undefined:"World"
// };

// console.log(obj)
// console.log(obj[1])
// console.log(obj[2])


// // Modifying values
// console.log(student)
// student.marks = 9.44
// console.log(student)

// // adding property
// student.gender = 'Male'
// console.log(student)


// // deleting property and value
// delete student.number
// console.log(student)


// // object of objects
// const classInfo =
// {
//     maveen:{city:"Ongole",grade:'A+'},
//     gopi:{city:"Vij",grade:"A"},
//     venu:{city:"Edara",grade:'O'}
// };

// console.log(classInfo)
// console.log(classInfo.maveen.city)



// // Array of objects
// const student_info = [
//     {name:"Maveen",age:23},
//     {name:"Gopi",age:23},
//     {name:"Bugs",age:24}
// ];

// console.log(student_info)
// student_info[2].name="Venu"
// console.log(student_info)


// // Math
// console.log(Math.random())
// console.log(Math.abs(-6))
// console.log(Math.pow(2,3))
// console.log(Math.floor(-5.5))
// console.log(Math.ceil(5.6))


// // random integer
// console.log(Math.floor(Math.random()*10)+1)

// console.log(Math.floor(Math.random()*100)+1)

// console.log(Math.floor(Math.random()*5)+20)

// console.log(Math.floor(Math.random()*5)+21)

// Practise

const max = prompt("Enter a maximum number");

const random = Math.floor(Math.random()*max)+1;

let guess = prompt("Please guess the random number")

while(true){
    if(guess == 'quit'){
        console.log("Quitting the page")
        break;
    }
    if(guess == random){
        console.log("Hey! Congrats! Your guess is right, number is:",random)
        break;
    }
    else if(guess>random){
        guess = prompt("Hint: the guess number is large, please enter a small number")
    }
    else{
        guess = prompt("Hint: the guess number is small, please enter a larger number")
    }
} 