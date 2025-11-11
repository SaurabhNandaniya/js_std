//  Primitive(call by value)

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt
// js is like dynamically assign the datatypes like you write 3 so it take it as a Number
// in typescript "const score:Number = 33 "like this we write 

const logInValue = 22
const temp = null
let emaiId; 

const id = Symbol("123")
const anotheId = Symbol("123")

console.log(id === anotheId)// symbol is unique weather it has same value in diff vari..

const bigNumber = 34567890987654345n //this n is for using the Bigint


// Reference (Non primitive) call by refrence 

// Array, Objects, Functions their data type is basicalli functions object it gives
// function in finction but it is the object function

const nameOfPeople = (["saurabh", "hell0", "heyy"])//array
let myObject = {
    Name : "Saurabh",
    age : "20"
}//this is object 

const fistFunction = function() {
    console.log("Hello World!");
    // return 0;
}
// console.log(typeof anotheId);
// console.log(typeof bigNumber);
// console.log(typeof nameOfPeople);
// console.log(typeof myObject);
// console.log(typeof fistFunction);

console.log(fistFunction());
