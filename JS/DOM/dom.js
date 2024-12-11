

// // let smallImages = document.getElementsByClassName("oldImg");
// // for(i =0;i<smallImages.length;i++){
// //     smallImages[i].src = "https://upload.wikimedia.org/wikipedia/en/2/21/Web_of_Spider-Man_Vol_1_129-1.png"
// //     console.log(`value of ${i} is changed`)
// // }



// // query selectors
// // console.dir(document.querySelector('p'))
// // console.dir(document.querySelector('#description'))
// // console.dir(document.querySelector('.oldImg'))
// // console.dir(document.querySelector('div a'))

// // console.dir(document.querySelectorAll('div a'))
// // console.dir(document.querySelectorAll('p'))


// // manipulating style

// // 1) using style
// // let image = console.dir(document.querySelector("img"))

// // let links = document.querySelectorAll(".box a")
// // for(i=0;i<links.length;i++){
// //     links[i].style.color = "black";
// // }

// // 2) using classList

// let heading = document.querySelector('h1')
// console.dir(heading)

// // add
// heading.classList.add('green')
// heading.classList.add('underline')

// // remove
// heading.classList.remove('underline')

// // contains
// heading.classList.contains('underline')

// // toggle
// heading.classList.toggle('green')
// // heading.classList.toggle('green')



// // navigation

// // parent
// let h4 = document.querySelector('h4')
// console.log(h4.parentElement)

// // children
// let box = document.querySelector('.box')
// console.log(box.children)
// console.log(box.childElementCount)

// // sibling
// let ul = document.querySelector('li')
// console.log(ul)
// console.log(ul.children[0])


// // Adding elements

// // creating new element
// let newh = document.createElement('h2')
// newh.innerText = "Achievements"

// let newp = document.createElement('p')
// newp.innerText = "click the below button to see achievements"

// // adding element
// let body = document.querySelector('body')
// body.appendChild(newh)

// body.appendChild(newp)

// // body.prepend(newh)

// let image = document.createElement('img')
// image.src = "https://media.licdn.com/dms/image/D5612AQFqD5cT8ipqrw/article-cover_image-shrink_600_2000/0/1680594232561?e=2147483647&v=beta&t=JrH6zW-w_mHYRMx80H9rAYdYIztahOS18t8Xh8oW7pw"
// body.appendChild(image)



// image.style.width = "250px"
// image.style.height = "200px"
// image.style.marginLeft = "0px"
// image.style.padding="0px"


// let btn = document.createElement('button')
// btn.innerText = "click me"
// body.insertAdjacentElement("afterend",btn)

// btn.style.color="white"
// btn.style.backgroundColor = "black"
// btn.style.marginLeft = '5px'
// btn.style.padding = '0px'
// btn.style.width = '150px'


// body.removeChild(image)
// btn.remove()


// let body = document.querySelector('body')

// let para1 = document.createElement('p')
// para1.innerText = "Hey I'm red!"
// body.append(para1)

// para1.classList.add("red")


// let h3 = document.createElement('h3')
// h3.innerText = "I'm a blue h3!"
// body.append(h3)

// h3.classList.add("blue")

// let div = document.createElement('div')
// let h1 = document.createElement('h1')
// h1.innerText = "I'm in a div"
// let para2 = document.createElement('para2')
// para2.innerText = "MEE TOO!"
// body.append(div)
// div.appendChild(h1)
// div.appendChild(para2)
// div.classList.add("box")



// Assignment
// // 1)
let btn = document.createElement('button')
let inp = document.createElement('input')
btn.innerText = 'click me'
document.querySelector('body').append(inp)
document.querySelector('body').append(btn)

// // 2)
btn.setAttribute('id','btn');
inp.setAttribute('placeholder','username')

// // 3)
let button = document.querySelector('#btn');
// button.style.backgroundColor = 'blue';
// button.style.color = 'white';
button.classList.add('#btn')

// 4)
let h1 = document.createElement('h1');
h1.innerHTML = "<u> DOM Practice </u>";
document.querySelector('body').append(h1);
h1.style.color = "purple";



// 5)
let p = document.createElement('p');
document.querySelector('body').append(p);
p.innerHTML = "Apna College <b> Delta </b> Practice"