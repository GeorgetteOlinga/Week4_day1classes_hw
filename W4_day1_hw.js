
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
/*  Person
attributes:

name - set name from parameter in constructor method
age - initially 0
height - initially 0
weight - initially 0
mood - integer starting at 0 initially
hamsters - empty array initially
bankAccount - initially set to 0
methods:

getName() {- returns name
getAge() - returns age
getWeight() - returns weight
greet() - logs a message with person's name
eat() - increment weight, increment mood
exercise() - decrement weight
ageUp() - increment age, increment height, increment weight, decrement mood, increment bank account by 10 (birthday money)
buyHamster(hamster) - push the hamster object onto the hamster array, increment mood by 10, decrement bankAccount by the value of the hamster (hint: use getPrice()) */

//create person class
class person{
constructor(name, age,height, weight, mood, hamsters,bankAccount ){
    this.name = name;
    this.age = 0;
    this.height = 0;
    this.mood =0;
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

} - increment weight, increment mood
exercise() - decrement weight
}