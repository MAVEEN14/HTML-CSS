// let div = document.querySelector('div');
// let ul = document.querySelector('ul');
// let lis = document.querySelectorAll('li');


// div.addEventListener('click',function(){
//     console.log('div is clicked');
// })

// ul.addEventListener('click',function(event){
//     console.log('u; is clicked');
//     event.stopPropagation();
// })

// for(li of lis){
//     li.addEventListener('click',function(event){
//         console.log('li is clicked');
//         event.stopPropagation();
//     })
// }



// Task
let inp = document.querySelector('input')
let btn = document.querySelector('button')
let ul = document.querySelector('ul')


btn.addEventListener('click',function(){
    let item = document.createElement('li');
    item.innerText = inp.value;

    let delbtn = document.createElement('button');
    delbtn.innerText = 'Delete';
    delbtn.classList.add('delete')


    ul.appendChild(item)
    inp.value = "";
    item.appendChild(delbtn)

});  

ul.addEventListener('click',function(event){
    if(event.target.nodeName == "BUTTON"){
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log("deleted");
    }

});



// let delbtns = document.querySelectorAll(".delete")
// for(delBtn of delbtns){
//     delBtn.addEventListener('click',function(){
//         let par = this.parentElement;
//         console.log(par)
//         par.remove()
//     });
// }