// Class is a blueprint for creating objects

class vehicle{
    constructor(n,c,p){
        this.name = n,
        this.company = c,
        this.price = p
    }

    set setprice(p){
        this.price = p
    }

    update_details(un,up){
        this.name = un,
        this.price = up
    }

    get getdetails(){
        return "The cost of " + this.company + " "+ this.name + " is "+this.price + " rupees"
    }
}

let v1 = new vehicle("Thar","Mahindra",1200000)
console.log(v1)

v1.setprice = 1400000
console.log(v1)

console.log(v1.getdetails)

v1.update_details("Thar ROXX",1200000)
console.log(v1)

class car extends vehicle{
    constructor(n,p,c,color){
        super(n,p,c)
        this.color = color
    }

    get car_details(){
        return(`the cost of the ${this.company} ${this.name} is ${this.price} and its color is ${this.color}`)
    }

}
let c1 = new car("Fortuner","toyota",4500000,"white")
console.log(c1)

console.log(c1.car_details)