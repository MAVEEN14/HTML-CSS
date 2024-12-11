
// promises
// function savetodb(data){
//     let internetSpeed = Math.floor(Math.random()*10)+1;
//     if(internetSpeed>4){
//         console.log("your data was saved",data);
//     }
//     else{
//         console.log("Your data was not saved");
//     }
// }

// savetodb("Maveen Chowdary")

// or

// function savetodb(data,success,failure){
//     let internetSpeed = Math.floor(Math.random()*10)+1;
//     if(internetSpeed>4){
//         success();
//     }
//     else{
//         failure();
//     }
// }

// savetodb("Maveen Chowdary",
//     ()=>{
//         console.log("your data was saved");

//         savetodb('Hello',
//             ()=>{
//             console.log("data connection is good");

//             savetodb("Maveen",
//                 ()=>{
//                     console.log("Your name was saved");
//                 },
//                 ()=>{
//                     console.log("Your name was not saved")
//                 }
//             );

//             },
          
//             ()=>{
//                 console.log('data connection is poor')
//             });
//     },

//     ()=>{
//         console.log("Your data was not saved");
//     }
// );


// using promise

// function savetoDb(data){
//     let internetSpeed = Math.floor(Math.random()*10)+1;
//     return new Promise((resolve,reject)=>{
//         if(internetSpeed>4){
//             resolve("Success: data is saved");
//         }
//         else{
//            reject("fail: data is not saved");
//         }
//     })
// }
// savetoDb("Maveen Chowdary")

// // then and catch
// let request = savetoDb("Hello");
// request
// .then(()=>{
//     console.log("promise is fulfilled")
//     console.log(request)
// })
// .catch(()=>{
//     console.log("Promise is not fulfilled")
//     console.log(request)
// })


// promise chaining

// function savetoDb(data){
//     let internetSpeed = Math.floor(Math.random()*10)+1;
//     return new Promise((resolve,reject)=>{
//         if(internetSpeed>4){
//             resolve("Success: Connection is good");
//         }
//         else{
//            reject("fail: connection is poor");
//         }
//     })
// }
// savetoDb("Maveen Chowdary")

// savetoDb("hello Davuluri")
// .then(()=>{
//     console.log("promise1 fulfilled");
//     return savetoDb("Hello chowdary")
// })
// .then(()=>{
//     console.log("Promise2 fulfilled")
// })
// .catch(()=>{
//     console.log("promise is not fulfilled")
// })




// // results and errors in promises

// function savetoDb(data){
//     let internetSpeed = Math.floor(Math.random()*10)+1;
//     return new Promise((resolve,reject)=>{
//         if(internetSpeed>4){
//             resolve("Success: Connection is good");
//         }
//         else{
//            reject("fail: connection is poor");
//         }
//     })
// }
// savetoDb("Maveen Chowdary")

// savetoDb("hello Davuluri")
// .then((result)=>{
//     console.log("data is saved")
//     console.log("promise1 fulfilled");
//     console.log(result)
//     return savetoDb("Hello chowdary")
// })
// .then((result)=>{
//     console.log("data 2 is saved")
//     console.log("Promise2 fulfilled")
//     console.log(result)
// })
// .catch((error)=>{
//     console.log("promise is not fulfilled")
//     console.log(error)
// })


// let h1 = document.querySelector('h1')

// function changeColor(color,delay){
//     return new Promise((resolve,reject) =>{
//         setTimeout(()=>{
//             h1.style.color = color;
//             resolve('Color changed');
//         },delay);
//     });
   
// }

// changeColor('violet',200)
// .then(()=>{
//     console.log("color changed to violet");
//     return changeColor("indigo",200)
// })
// .then(()=>{
//     console.log("color changed to indigo");
//     return changeColor("blue",200)
// })
// .then(()=>{
//     console.log("color changed to blue");
//     return changeColor('green',200)

// })
// .then(()=>{
//     console.log("color changed to green");
//     return changeColor('yellow',200)
// })
// .then(()=>{
//     console.log("color changed to yellow");
//     return changeColor('orange',200)
// })
// .then(()=>{
//     console.log("color changed to orange");
//     return changeColor('red',200)
// })
// .then(()=>{
//     console.log("color changed to red");
//     console.log("rainbow colors are fulfilled")
// })

// .catch(()=>{
//     console.log("color change was interupted")
// })


// async function
// async function hello(){
//     throw ("network error occurred")
//     return("hello world!")
// }


// hello()
// .then((result)=>{
//     console.log("Promise fulfilled, result is",result)
// })
// .catch((err)=>{
//     console.log("promise was not fulfilled, err is:",err)
// })


// let demo = async()=>{
//     console.log(5)
// }
// demo()


// // Await function
// function getNum(){
//     return new Promise((resolve,reject) =>{
//         setTimeout(()=>{
//     let num = Math.floor(Math.random()*10)+1;
//     console.log(num)
//     resolve();

// },1000)
// })
// }

// async function demo(){
//     await getNum();
//     await getNum();
//     await getNum();
//     await getNum();
//     getNum();

// }



let h1 = document.querySelector('h1')

function changeColor(color,delay){
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            let num = Math.floor(Math.random()*10)+1;
            if(num>3){
                reject("error occurred")
            }
            h1.style.color = color;
            resolve('Color changed');
        },delay);
    });
   
}

async function demo(){
    try{
    await changeColor('red',1000)
    await changeColor('blue',1000)
    await changeColor('green',1000)
    await changeColor('yellow',1000)
    await changeColor('orange',1000)
}
catch(err){
    console.log("error occurred")
    console.log(err)
}

let a = 5;
console.log(a);
console.log("New number is:",a+3)
}
demo()