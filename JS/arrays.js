// Arrays
array1 = ["Maveen","Naveen","Chowdary"]
console.log(array1)

let arr1 = ["Maveen",23,9347850485,"OC"]
console.log(arr1);
console.log(arr1[0])
console.log(arr1[0].length)
console.log(arr1[0][0])

// arrays are mutable
arr1[0] = "Maveen_Chowdary"
console.log(arr1)

arr1[20] = "20th element"
console.log(arr1)
console.log(arr1.length)


// Array methods
let cars = ["maruthi","benz","audi","Thar"]
console.log(cars)

cars.push("Thar ROXX")
console.log(cars)

cars.pop()
console.log(cars)

cars.unshift("Thar ROXX")
console.log(cars)

cars.shift()
console.log(cars)


// practise
let months = ["January","July","March","August"]
months.shift()
months.shift()
months.unshift("June")
months.unshift("July")

console.log(months)

console.log(months.indexOf("March"))
console.log(months.indexOf("MARCH"))

console.log(months.includes("June"))
console.log(months.includes("JUNE"))

let array = ["Sunday","Monday","Tuesday","Wednesday"];
let array2 = ["Thursday","Friday","Saturday"]
let array3 = array.concat(array2)
console.log(array3)

console.log(array3.reverse())

console.log(months.slice(3))

console.log(array3.slice(4))

let Array1 = ["Maruti","Benz","audi","wagon","mahindra","thar","thar_roxx"]
Array1.splice(0,1);
console.log(Array1)

Array1.splice(1,0,"Toyota");
console.log(Array1)

Array1.splice(0,1,"BMW")
console.log(Array1)


let sqaures = [16,2,4,9,36,25]
console.log(sqaures.sort())

let char = ['b','c','a','f','d','g','e']
console.log(char.sort())

// practise
let month = ['january','july','march','august']
month.splice(0,2,"July","June")
console.log(month)

let languages = ['c','c++','html','javascript','python','java','c#','sql']
console.log(languages.reverse().indexOf('javascript'))


// Array reference
console.log([1] == [1])

let n1 = [1,2,3]
let n2 = n1
console.log(n1 == n2)


// Array constant
const arr2 = [1,2,3,4]
arr2.unshift(5)
console.log(arr2)


// Nested Array
let naray = [[1,2],[3,4],[5,6]]
console.log(naray)


// Practise
let game = [['X','O','O'],['O','X','O'],['O','O','X']]
console.log(game)