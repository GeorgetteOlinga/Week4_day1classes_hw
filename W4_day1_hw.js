
class Hamster{
    constructor(owner, name, price){
        this. owner = "";
        this.name = name; 
        this.price = 15;
    }
    //methods
    wheelRun(){
        console.log("squeak squeak")
    }
       
     eatFood(){
        console.log("nibble nibble")
    }        

     getPrice(){
        return this.price 
    }
}

// create person class
class Person{
    constructor(name){
        this.name = name;
        this.age = 0;
        this.height = 0;
        this.mood = 0;
        this.hamsters = [];
        this.bankAccount = 0;
    }

    getName(){
        return this.name
    } 
    getAge(){
        return this.age
    }
    getWeight(){
        return this.weight
    } 
    greet(){
        console.log("Hello "+ this.name )
    } 
    eat(){
        this.weight++
        this.mood++
    }
    exercise() {
        this.weight--
    }
    ageUp(){
        this.age++
        this.height++
        this.weight++
        this.mood--
        this.bankAccount += 10
    }
    buyHamster(hamster) {
        this.hamsters.push(hamster)
        this.mood += 10
        this.bankAccount -= hamster.getPrice()
    }
}
let timmy = new Person("Timmy")
timmy.ageUp()
timmy.ageUp()
timmy.ageUp()
timmy.ageUp()
timmy.ageUp()
timmy.eat()
timmy.eat()
timmy.eat()
timmy.eat()
timmy.eat()
timmy.exercise()
timmy.exercise()
timmy.exercise()
timmy.exercise()
timmy.exercise()

