const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);//convert to string and its properties using
// console.log(balance.toFixed(2));//after decimal digits

const otherNumber = 123.8966

console.log(otherNumber.toPrecision(4));/*this is for round off and no is for 
                                        how many digits you want after round off */

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));// this is en-IN for indian standards
//if not used this than by default it uses the us standards

//++++++++++++++ MATHS +++++++++++++=

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());//this gives value btw 0 to 1
console.log((Math.random()*10) + 1);//this gives 1 to 10 here the + 1 is for if 0.0 there
console.log(Math.floor(Math.random()*10) + 1);//used the floor for whole number
// here the min max is used for the specific range or boundary like in dice it is 1 to 6
const min = 10
const max = 20
// here it gives value btw 10 to 20 (10 n 20 included)
console.log(Math.floor(Math.random() * (max - min + 1)) + min)