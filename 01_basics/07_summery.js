// primitive

//7 types : string, number, boolean, null, undefined, symbol, bigint

const score = 100
const scoreValue = 100.4

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 325463726n
// Refrence type  (non primitive)

// Array , objects, functions

const heros = ["shaktiman", "naagraj", "dogs"]

let myObj = {
    name: "rakshith",
    age: 19,
}

const myFunction = function(){
    console.log("Hello world");
    
}

console.log(typeof myFunction);

// https://262.ecma-international.org/5.1/#sec-11.4.3