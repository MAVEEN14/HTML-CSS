// ON CLICK

// let btn = document.querySelector('button')
// console.dir(btn)

// btn.onclick = function(){
//     // console.log("button was clicked");
//     alert("button was clicked")
// };



// EVENT LISTENER

// let btns = document.querySelectorAll("button")

// for(btn of btns){
//     // btn.onclick = sayhello;
//     // btn.onclick = sayname;
    
//     btn.onmouseenter = function(){
//         console.log("you are enter into button")
//     }   

//     btn.addEventListener("click",sayname)
//     btn.addEventListener("click",sayhello)


//    }

// function sayhello(){
//     alert("Button is clicked")
// }

// function sayname(){
//     alert("Thanks")
// }


// let para = document.querySelector('p')
// para.addEventListener('click',function(){
//     console.log("para clicked")
// })

// let div = document.querySelector('.box')
// div.addEventListener('mouseenter',function(){
//     console.log("You entered inside the box")
// })



// this
// let btn = document.querySelector('button')
// let h1 = document.querySelector('h1')
// let h3 = document.querySelector('h3')
// let p = document.querySelector('p')

// function properties(){
//     console.dir(this.innerText);
//     this.style.backgroundColor = "blue";
// }

// btn.addEventListener('click',properties)

// h1.addEventListener('click',properties)

// h3.addEventListener('click',properties)

// p.addEventListener('click',properties)



// keyboard events

// let btn = document.querySelector('button')


// btn.addEventListener('click',function(event){
//     console.log("Button was clicked");
//     console.log(event);
// })


// btn.addEventListener('dblclick',function(event){
//     console.log("Button was clicked");
//     console.log(event);
// })

// let inp = document.querySelector('input')
// inp.addEventListener('keydown',function(){
//     console.log("Key pressed")
// })

// inp.addEventListener('keyup',function(event){
//     console.log("Key pressed");
//     console.log("key",event.key);
//     console.log("code",event.code);
// })


// let inp = document.querySelector('input')
// inp.addEventListener('keydown',function(event){

//     if(event.code == "KeyU"){
//         console.log("character moves to UP");
//     }
//     else if(event.code == "KeyD"){
//         console.log("character moves down");
//     }
//     else if(event.code == "KeyL"){
//         console.log("character moves left");
//     }
//     else if(event.code == "KeyR"){
//         console.log("character moves right");
//     }
// })


// form events
// let form = document.querySelector('form');

// // form.addEventListener('submit',function(){
// //     alert("do you want to submit?");
// // });

// form.addEventListener('submit',function(event){
//     event.preventDefault();
//     alert("do you want to submit?");
// });




// Extracting from data

// let form = document.querySelector('form');



// form.addEventListener('submit',function(event){
//     event.preventDefault();
    
//     let inp = document.querySelector('input');
//     console.dir(inp)
//     console.log(inp.value);
// });


// let form = document.querySelector('form');

// form.addEventListener('submit',function(event){
//     event.preventDefault();
//     console.dir(form)

//     // let user = document.querySelector('#user')
//     // let pass = document.querySelector('#pass')

//     let user = this.elements[0]
//     let pass = this.elements[1]

//     console.log("username:",user.value);
//     console.log("password:",pass.value);

//     alert(`Hi ${user.value} you password is ${pass.value}`)
// })





// more events

// change event
let form = document.querySelector('form');

form.addEventListener('submit',function(event){
    event.preventDefault();
   
})

let user = document.querySelector('#user')

user.addEventListener('change',function(){
    console.log("change event");
    console.log("final value:",this.value);
})

// input event
user.addEventListener('input',function(){
    console.log("input event");
    console.log("final value:",this.value);
})

let button = document