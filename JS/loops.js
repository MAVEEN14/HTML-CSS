
// // // for loop

// // for(let i = 1;i<=5;i++){
// //     console.log("Hello World!")
// // }


// // // sum of first 5 numbers

// // let sum = 0;
// // for(let i =1;i<=5;i++){
// //     sum = sum+i
// // }

// // console.log("The sum of the given number is: ",sum)


// // // while loop

// // let i =1;
// // while(i<=5){
// //     console.log("Hello!")
// //     i=i+1
// // }

// // // do-while loop
// // let num = 1;
// // do{
// //     console.log("num=",num)
// //     num++
// // }while(num<=5);





// // // for - of loop
// // let str = "Hello World"
// // let size = 0

// // for(let val of str){
// //     console.log(val)
// //     size++
// // }

// // console.log("size is:",size);

// // // for in loop

// // let student = {
// //     name:"Maveen",
// //     number:14,
// //     branch:"Mechanical"
// // }

// // for(let val in student){
// //     console.log(val+":"+student[val]);
// // }

// // // Practise 1
// // // print 0 -100 even numbers


// // for(let number=0;number<=100;number++){
// //     if (number%2===0){
// //         console.log("number:",number,"is even number");
// //     }
// // }

// // // Practise 2
// // // Guess number


// let original_number = 14
// let guess_number = input("Guess the number: ")

// while(guess_number !== original_number){
//     guess_number = input("You entered wrong number, guess the number again!")
// }

// console.log("Congrats!, your number is correct!!");







// Loops 
// for loop

// for(let i = 1;i<=5;i++){
//     console.log(i)
// }


// for(let i =10;i>=1;i=i-2){
//     console.log(i)
// }


// let i = 2 
// console.log(i)

// 1 to 15 odd numbers

// Normal order
// for(let i = 1;i<=15;i=i+2){
//     console.log(i)
// }

// // reverse order
// for(let i =15;i>=1;i=i-2){
//     console.log(i)
// }


// all even numbers from 2 to 10

// console.log("Even numbers from 2 to 10")

// for(let i = 2;i<=10;i = i+2){
//     console.log(i)
// }

// for(let i = 10;i>=2;i = i-2){
//     console.log(i)
// }

// Multiplication of a number

// let n = prompt("Enter a number:")
// n = parseInt(n);

// for(let i =n;i<= n*10; i=i+n){
//     console.log(i)
// }

// console.log("Multiplication of 2 is:")
// for(let i =2;i<=20;i= i+2){
//     console.log(i)
// }


// // Nested for loop
// for(let i =1;i<=3;i++){
//     console.log("Outer loop",i)
//     for(let j = 1;j<=3;j++){
//         console.log(j)
//     }
// }


// while loop

// let i = 1;
// while(i<=5){
//     console.log(i)
//     i++;
// }

// let i = 5;
// while(i>=1){
//     console.log(i)
//     i--
// }


// game
// const fav_movie = "Ironman"
// let guess = prompt("Guess the movie name")
// while((guess!=fav_movie)&&(guess!='quit')){
//     guess = prompt("Wrong guess, guess again or quit to quit from page")
// }
// if(guess == fav_movie){
//     console.log("Congrats, you guess the right movie",guess)
// }
// else{
//     console.log("You quit from the page")
// }


// break
// let i = 1;
// while(i>=1){
//     if(i == 10+1){
//         break;
//     }
//     console.log(i)
//     i++

// }
// 


// loops with arrays

// let fruits = ['Mango','Apple','Banana','Litchi','Orange'];
// for(let i =0;i<fruits.length;i++){
//     console.log(i,fruits[i])
// }

// let fruits = ['Mango','Apple','Banana','Litchi','Orange'];
// for(let i = fruits.length-1;i>=0;i--){
//     console.log(i,fruits[i])
// }

// let student = [['Maveen',8.3],['Venu',9.8],['Gopi',10]]
// for(let i =0;i<student.length;i++){
//     console.log("Student",i+1)
//     for(let j=0;j<student[i].length;j++){
//         console.log(student[i][j])
//     }
// }

// for-of loop

// for(i of "Maveen Chowdary"){
//     console.log(i)
// }

// let fruits = ["apple",'banana','grapes','mango']
// for(i of fruits){
//     console.log(i)
// }


// let heroes = [["Ironman","Spiderman","Hulk","Thor"],["Captain America","Ant man","Shadow"]]
// for(i of heroes){
//     for(j of i){
//         console.log(j)
//     }
// }


// let todo = []

// let req = prompt("Enter the request")
// while(true){

//     if(req == "quit"){
//         console.log("Quitting the page")
//         break;
//     }

//     if(req == "list"){
//         console.log("___________")
//         for(let i =0;i<todo.length;i++){
//             console.log(i,todo[i])
//         }
//         console.log("______________")
//     }
//     else if(req == "add"){
//         task = prompt("Enter the task you want to add")
//         todo.push(task)
//         console.log("task added")
//     }
    
//     else if(req == "delete"){
//         idx = prompt("Please enter the index you want to delete")
//         todo.splice(idx,1)
//         console.log("item deleted")
//     }
//     else{
//         console.log("Wrong request")
//     }

//     req = prompt("Enter the request")
// }






// Assignment - 
// 1)

let arr = [1,2,3,4,5,6,2,3]
let num = 2
for(let i =0;i<arr.length;i++){
    if(arr[i] === num){
        arr.splice(i,1)
    }
    
}
console.log(arr)


// 2)
let number = 287152;
let count = 0;

let copy = number;

while(copy>0){
    count++
}