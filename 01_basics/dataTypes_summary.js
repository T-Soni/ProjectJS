//  Primitive

//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);
console.log(typeof heros);
console.log(typeof myObj);
console.log(typeof myFunction);
console.log(typeof bigNumber);
console.log(typeof outsideTemp); //object tho null

// https://262.ecma-international.org/5.1/#sec-11.4.3


/* Stack -> Primitive -> creates a copy
    Heap -> Non-Primitive -> passes direct refernce
    variable declared in stack -> value in heap -> variable points to value's addr in heap
     */
let animal = "cat"
let anotherAnimal = animal
anotherAnimal = "dog"
console.log(animal);
console.log(anotherAnimal);

let userOne = {
    name: "Ram",
    marks:40,
}

let userTwo = userOne

userTwo.marks = 70
console.log(userOne.marks);
console.log(userTwo.marks);


