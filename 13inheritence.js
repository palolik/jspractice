class Vehicle{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
    move(){
        console.log('gari chole na chole na chole na re')
    }
}

class Bus extends Vehicle{
    constructor(name, price, seat, ticketPrice){
        super(name, price);
        this.seat = seat;
        this.ticketPrice = ticketPrice;
    }

}

class Truck extends Vehicle{
    constructor(name, price, load){
        super(name, price);
        this.load = load;
    }
    
}
class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    sleep(){
        console.log(`Sleeping now ${this.name}`)
    }
    activity(){
        this.sleep();
    }
}

const kodom = new Person('Kodom Ali', 21)
console.log(kodom)
kodom.sleep();
const badam = new Person('Kacha badam', 23)
badam.sleep();

// bejal 
const lazy = kodom.sleep;
lazy()