
class Hamster{
    constructor(owner, name, price){
        this. owner = owner;
        this.name = name; 
        this.price = price;
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
        this.weight = 0;
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
    buyHamster(Hamster) {
        this.hamsters.push(Hamster)
        this.mood += 10
        this.bankAccount -= Hamster.getPrice()
    }
}


const timmy = new Person ("Timmy");
for (let i= 0; i <5; i++) {
  timmy.ageUp()
}

for (let i= 0; i <5; i++) {
    timmy.eat()
}

for (let i= 0; i <5; i++) {
    timmy.exercise()
}

for (let i= 0; i <9; i++) {
    timmy.ageUp()
}

const gus = new Hamster('Timmy', 'Gus', 15)
// gus.owner = 'Timmy'
timmy.buyHamster(gus)
// console.log(timmy)

for(let i =0; i < 15; i++){
  timmy.ageUp()
}
timmy.eat()
timmy.eat()
timmy.exercise()
timmy.exercise()


console.log(timmy);

// chef Make Dinner

 class Dinner {
   constructor (appetizer, entree,dessert){
     this.appetizer = appetizer;
     this.entree = entree ;
     this.dessert = dessert;
   }

  }

  class Chef {
    
constructor (name){
    this.name = name
}
 makeDinner (appetizer, entree, dessert){
    const newdinner = new Dinner(appetizer, entree, dessert)
    return newdinner
 }
  }
const georgette = new Chef("georgette")
const dinner1 = georgette.makeDinner("soup", "shrimp","chocolate Cake")
console.log(dinner1)

const dinner2 = georgette.makeDinner("salad", "tilapia fillet","creme glace")
console.log(dinner2)

const dinner3 = georgette.makeDinner("onion ring", "steak","capuccino")
console.log(dinner3)