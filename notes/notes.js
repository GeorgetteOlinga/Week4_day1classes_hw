/*
    node notes.js
    node --watch notes.js

    Basic javascript
        data types
            PRIMITIVE (not unique)
                number, boolean, string, undefined, null
            NON-PRIMITIVE (unique)
                [], {}, class, NaN
        expressions
            code that turns into a value
                Math Expressions
                    5 + 5       ->  10
                    +, -, *, /, **, %
                Boolean expressions (aka comparison expressions)
                    ==      roughly equal
                    !=      not roughly equal
                    ===     strictly equal
                    !==     not strictly equal
                    >, <, >=, <=

                    5 == 5      ->  true
                    5 < 10      ->  true
        variables
        if
            if (value) {
                code to be execute if the value is true
            } else if () {

            } else {

            }

                TRUTHY              FALSY
                non-0               0
                true                false
                " "                 ""
                []                  undefined
                {}                  null
                                    NaN

        for
        functions, arguments, parameters
        arrays
        objects
*/

let x = 5
let myName = "Doug"
myName = "Georgette"
if (undefined) {
    console.log(123)
    console.log(x)
}

// let ps5Price = 650
// let myMoney = 3000
// let myRent = 750

// if (myMoney-ps5Price<myRent) {
//     console.log("I can't afford it")
// } else {
//     console.log("I can afford it")
// }

/*
    define a variable called temp which stores a number.
    depending on the number, print
        "it's cold outside"
        "it's nice outside"
        "it's hot outside"
*/
let  temp = 30
temp = 80
temp++
temp = temp + 1
temp += 1
temp -= 40

// console.log(temp)
// if (temp<45) {
//     console.log("It's cold outside")
// } else if (temp>75) {
//     console.log( "it's hot outside")
// } else {
//     console.log("it's nice outside")
// }

/*
    for(<1>; <2>; <3>) {
        <4>
    }

    1. define a counter (usually let i = 0)
    2. condition to repeat the loop (usually i < number)
    3. reassign the counter (usually i++)
    4. the code to be executed
*/

// console.log('before')

for (let i = 0; i < 5; i++) {
    // console.log("Hello! The current iteration is: ", i)
}

// console.log('after')
// console.log(12%2)

/*
    write a for loop that prints numbers from 0 to 50, but only if they are even
*/
for (let i=0; i<51; i+=2){
    // console.log(i)
}
for (let i=0; i<51; i++){
    if (i%2===0) {
        // console.log(i)
    }
}

let students = ["Georgette", "Kristie", "Doug"]
let you = students[0]
// console.log(you)
// console.log(students[2])

/*
    DEFINING A FUNCTION
        telling the computer about some code you may want to execute later

        function <1>(<2>) {
            <3>
        }

    CALLING A FUNCTION
        telling the computer to execute the code you previously defined

    <1>(<4>)

    1. name of the function
    2. parameters (optional)
    3. code to be executed
    4. arguments (optional)

        PARAMETERS are set when DEFINING a function
            they are like private variables just for that function
            they are also like placeholders

        ARGUMENTS are passed when CALLING a function
            they represent what you want to take the place of the parameter(s)
*/


// listArray([1, 2, 3]) // telling the computer: go back to funciton listArray() {}
// listArray(students)
// listArray(["hello", [1, 4, 5], undefined, 5=="5"])

// console.log("Hello" + myName)

/*
define a function called greet which takes a string and prints
        "Hello, _____!"
*/

function greet(name) {
    console.log("Hello, " + name)
}

function greetStudents(array) {
    for (let i=0; i<array.length; i++){
        greet(array[i])
    }
}

greetStudents(students)
greetStudents(['John', 'Tyler', 'Phoebe'])

// greet("Doug")
// greet("Georgette")
// greet(students[1])