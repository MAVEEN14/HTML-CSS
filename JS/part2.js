console.log("Hello World!");
// console.log("This is Maveen Davuluri");
// let a = 10;
// let b = 20;
// console.log("The sum of the two numbers is:", a+b);

// console.log(`The sum of the two numbers is: ${a+b}`);

a = 5.4
console.log(Math.floor(a))

// Operators

// Arithmetic operators

// let a = 10;
// let b = 5;
// console.log("The addition of two numbers is:",a+b);
// console.log("The subtraction of two numbers is:",a-b);
// console.log("The multiplication of two numbers is:",a*b);
// console.log("The division of two numbers is:",a/b);
// console.log("The modulo of two numbers is:",a%b);
// console.log("The power of two numbers is:",a**b);

// unary operators

// console.log(a++);
// console.log(++a);

// if statement
console.log("Congrats!");
let age = 20;
if(age>18){
    console.log("You are eligible to vote");
}
if(age<18){
    console.log("You re not eligible to vote")
}

console.log("Voting completed")

let first_name = "Maveen";
if(first_name=="Maveen"){
    console.log(`Welcome Mr ${first_name} Chowdary`);
}



// Practise1

let color = "red";
if(color==="red"){
    console.log("STOP!, color of the light is red");
}
if(color === "yellow"){
    console.log("Slow down!, color of the light is yellow ");
}
if(color==="green"){
    console.log("Go!,color of the light is green");
}

// Example
let a = 10;
let b = 20;
let c = 30;
if(a>b & a>c){
    console.log("a is greater value");
}
else if(b>c & b>a){
    console.log("b is greater value");
}
else if(c>a & c>b){
    console.log("c is greater value");
}

// if-else

let num = 10;
if(num%2==0){
    console.log(`${num} is an even number`);
}
else{console.log(`${num} is an odd number`);

}

// Practice2

let size = 'XL';
if(size === 'XL'){
    console.log("Price of the popcorn is Rs. 250");
}
else if(size === 'L'){
    console.log("Price of the popcorn is Rs. 200");
}
else if(size === 'M'){
    console.log("Price of the popcorn is Rs. 100");
}
else {
    console.log("Price of the popcorn is Rs. 50");
}


// Nested if-else

let marks = 70;
if(marks>=35){
    console.log("Pass")

    if(marks>=85){
        console.log("Grade A+")
    }

    else{console.log("Grade A")}
}
else{
    console.log("Fail")
}


// Logical operators

// &&
let mar = 35;
if(mar>=35 && mar>=85){
    console.log("Pass");
}

// ||

if(mar>=35 || mar>=90){
    console.log("PASS");
}

// !

if(marks!=95){
    console.log("Grade B");
}

// Practice QS

let str = "apple";
if((str[0]==='a')&&(str.length > 3)){
    console.log("Good String")
}
else{
    console.log("Not a good string")
}

let number = 12;
if((number%3===0) && (number+1 == 15) || (number-1 == 11)){
    console.log("safe")
}
else{
    console.log("unsafe")
}


// switch statement

let colour = "green";
switch(colour){
    case "red": console.log("STOP");
    break;
    case "yellow": console.log("SLOW DOWN");
    break;
    case "green": console.log("GO");
    break;
    default:console.log("Light is broken");


}

// Practise QS

let day = 6;
switch(day){
    case 1:console.log("Monday");
    break;
    case 2:console.log("Tuesday");
    break;
    case 3:console.log("Wednesday");
    break;
    case 4:console.log("Thursday");
    break;
    case 5:console.log("Friday");
    break;
    case 6:console.log("Saturday");
    break;
    case 7:console.log("Sunday");
    break;

    default:console.log("Holiday")
}

// alert and prompt

// alert("click ok to open");
// let Age = prompt("Enter you age to continue");
// console.log("Age:",Age);

// let fname = prompt("Enter your first name:");
// let sname = prompt("Enter your last name:");
// alert("Hello "+fname+" "+sname+" !");


// Assignment -1

// Q-1
let numm = 10;
if(numm%10==0){
    console.log("good");
}
else{
    console.log("bad");
}

// Q-2

// let Name = prompt("Enter your Name:");
// let Age = prompt("Enter your Age:");
// alert(`${Name} is ${Age} years old.`);


// Q-3
let Quarter = 4;
switch(Quarter){
    case 1: console.log("January, February, March");
    break;

    case 2: console.log("April, May, June");
    break;

    case 3: console.log("July, August, September");
    break;

    case 4: console.log("October, November, December");
    break;

    default:console.log("no months");
}


// Q-4
let string = "apples";
if((string[0] == 'A' || 'a') && (string.length>5)){
    console.log("golden string");
}
else{
    console.log("not a golden string");
}

// Q-5

let num1 = 10;
let num2 = 20;
let num3 = 30;
if(num1>num2 && num2>num3){
    console.log(`${num1} is greater number`);
}
else if(num2>num3 && num3>num1){
    console.log(`${num2} is greater number`);
}
else{console.log(`${num3} is greater number`)};


// Q-6
let n1 = 35467;
let n2 = 47857;
if(n1%10 == n2%10){
    console.log(`${n1} and ${n2} have the same last digit i.e. ${n1%10}`);
}
else{
    console.log("Both the numbers doesnot have the same ending value")
}
