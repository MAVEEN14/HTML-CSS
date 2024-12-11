let form = document.querySelector('form')
form.addEventListener('submit',function(event){
    event.preventDefault();

    let inputs = document.querySelectorAll('.input');
    for(let input of inputs){
        console.log(`${input.placeholder}: ${input.value}`);
    }

    form.reset();
    window.location.href = "http://127.0.0.1:5500/JS/DOM/p1.html"

    
});

