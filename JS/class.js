// class is a bluprint for creating objects

class Mobiles{
    constructor(n,r,p){
        this.name = n;
        this.price = p;
        this.ram = r
    }


    
    update_ram_price(uram,uprice){  //if we want to update then we use direct function
        this.ram = uram;
        this.price = uprice;
    }

    

    // in setter function we need to give value like object.setter_name = value, we can't call the setter function like object.setter_name(value)
    // if we want to modify two things then we have to create two setters.
    set Price_set(p)
    { 
        if(p<=0){
            alert("Price cannot be less than or equal to 0")
        }
        else{
            this.price = p
        }
    }



    get getname(){
        return "Mobile Name:" + this.name + " ram is:"+this.ram + " Price is:"+this.price
    }
}


let m1 = new Mobiles("Redmi note 7","3gb",20000);
console.log(m1);

m1.update_ram_price("8gb", 500000)
console.log(m1);



let m2 = new Mobiles("Poco C3","3gb");
console.log(m2);

    m2.update_ram_price("8gb",20000); //we use the function with object to modify

    console.log(m2);

m1.Price_set = 12000;
m2.Price_set = 7500;

console.log(m1.getname);
console.log(m2.getname);