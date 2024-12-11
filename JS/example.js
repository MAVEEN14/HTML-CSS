// // // class Bike{
// // //     constructor(n,p,c){
// // //         this.name = n,
// // //         this.price = p,
// // //         this.company = c

// // //     }

// // //     modify_name(new_name){
// // //         this.name = new_name
// // //     }

// // //     set set_price(price){
// // //         this.price = price
// // //     }

// // //     get bike_details(){
// // //         return `the cost of ${this.name} is ${this.price} rupees.`
// // //     }

// // // }

// // // let bike1 = new Bike("MT-15",175000,"Yamaha")
// // // console.log(bike1)

// // // bike1.modify_name("FZ")
// // // console.log(bike1)

// // // // setters
// // // bike1.price = 200000
// // // console.log(bike1)

// // // // getters
// // // console.log(bike1.bike_details)


// // class Animal{
    
// //     constructor(n){
// //         this.name = n
// //     }

// //     dog(){
// //         console.log(`${this.name} making sound bow bow!`)
// //     }
// // }

// // let mydog = new Animal("Bobby")
// // mydog.dog()

// // class dog extends Animal{
// //     constructor(c,n){
// //         super(n);
// //         this.color = c;
// //     }

// //     speak(){
// //         console.log(`the color of the dog is: ${this.color}`)
// //     }
// // }

// // let myDog = new dog("red")
// // myDog.speak()



// class vehicle{
//     constructor(n,c){
//         this.name = n,
//         this.color = c
//     }

//     release(){
//         console.log(`the ${this.name} which color is ${this.color} is going to release next week`)
//     }

// }

// let v1 = new vehicle("Thar ROXX","black")
// v1.release()


// class bike extends vehicle{
//     constructor(n,c,p){
//         super(n,c),
//         this.price = p
//     }

//     bike_release(){
//         console.log(`the ${this.name} which color is ${this.color} is ${this.price} rupees`)
//     }

//     set setprice(p){
//         this.price = p
//     }

//     get bike_details(){
//         console.log(`the cost of the bike is ${this.price}`)
//     }

// }

// let bike1 = new bike("Yamaha MT","black",175000)
// bike1.bike_release()

// bike1.setprice = 200000
// console.log(bike1)

// bike1.bike_details()

// try{console.log(a);}
// catch{
//     console.log("a is not defined");
// }

sum = (a,b) =>{
    console.log(a+b)
}

sum(2,3)
