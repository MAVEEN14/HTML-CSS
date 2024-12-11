
// // JSON to JS
// let jsonRes = '{"fact":"Ailurophile is the word cat lovers are officially called.","length":57}'
// console.log(jsonRes)

// let validRes = JSON.parse(jsonRes);
// console.log(validRes)
// console.log(validRes.length)

// // JS to Json
// let obj = {
//     name:"Maveen",
//     workId:"W613793",
//     module:"Network",
//     bugs_raised:446
// }

// let json_obj = JSON.stringify(obj)
// console.log(json_obj)




// let url = "https://catfact.ninja/fact"
// fetch(url)

// .then((res)=>{
//     console.log(res)
//     return res.json()
//     })
//     .then((data)=>{
//         console.log(data.fact)
//         return fetch(url)
//     })
//     .then((res)=>{
//         return res.json();
//     })
//     .then((data2)=>{
//         console.log(data2.fact)
//     })

// .catch((err)=>{
//     console.log(err)
// })



// using async function
let url = "https://catfact.ninja/fact"
async function getUrls(){
try{
    let res = await fetch(url);
    let data = await res.json();
    console.log(data.fact);

    let res2 = await fetch(url);
    let data2= await res2.json();
    console.log(data2.fact);
}
catch(e){
    console.log("error",e);
}

console.log('bye');
}
