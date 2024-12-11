let str = "Hello world"
console.log(str)


// string methods
console.log(str.toUpperCase())

console.log(str.toLowerCase())


// index
let name1 = "Hello World"
console.log(name1.indexOf("ello"))

console.log(name1.indexOf('c'))


// Method chaining
let message = "      hello           "
console.log(message.trim().toUpperCase())


// slice
let str1 = "Hello world"
console.log(str.slice(6))
console.log(str.slice(0,5))
console.log(str1.length)

// replace
let msg = "Maveen Maveen Maveen"
console.log(msg.replace("Maveen","Chowdary"))
console.log(msg.replaceAll("Maveen","Maveen_Chowdary"))

// repeat
let fruit = "Mango "
console.log(fruit.repeat(3))



// Practise
// 1)
let mesg = " help! ";
console.log(mesg.trim().toUpperCase())

// 2)
let name = "ApnaCollege"
console.log(name.slice(4,9))
console.log(name.indexOf("na"))
console.log(name.replace("Apna","Our"))

// 3)
console.log(name.slice(4).replaceAll('l','t'))