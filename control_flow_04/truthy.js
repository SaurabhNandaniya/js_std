// TRUTHY AND FALSY VALUES
const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [] empty array, {} empty object, function(){} empty function


// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj = {}
//this is how we check obj is empty
if (Object.keys(emptyObj).length === 0){//use obj to check it has keys or not this give empty array
    console.log("Object is empty");
}
// for functions we have to check manually that it having any snippets or code inside
// search it on web its tricky

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10 // this assign first value
// val1 = null ?? 10// here it is null so second value
// val1 = undefined ?? 15// basically it protects from null and undefined
val1 = null ?? 10 ?? 20// here it gives 10 



console.log(val1);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")