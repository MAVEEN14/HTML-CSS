
// // Call stack (LIFO)
// function hello(){
//     console.log("inside function")
//     console.log("Hello world")
// }

// function demo(){
//     console.log("inside demo function")
//     hello()
// }

// demo()
// console.log("completed")


// Eg:

// function one(){
//     return 1;
// }

// function two(){
//     return one() + one()
  
// }

// function three(){
//     sum = two()+one()
//     console.log(sum)
// }
// three()


// callback hell

let h1 = document.querySelector('h1')
function changeColor(color,delay,nextColorChange){
    setTimeout(()=>{
        h1.style.color = color;
        if(nextColorChange)nextColorChange();
    },delay);
    }

changeColor('red',1000,()=> {
    changeColor('orange',1000,()=>{
        changeColor('green',1000,()=>{
            changeColor('blue',1000,()=>{
                changeColor('pink',1000)
            });
        });
    });
});

