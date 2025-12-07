// array

// const myArr = [0, 1, 2, 3, 4, 5]
// const myHeors = ["s", "na",1,2,true]//array can be mixed data types also

// const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)//this can add 9 at the start of the array
// myArr.shift()//this can remove the first elem.
// console.log(myArr);

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));
// console.log(myArr.indexOf(12));//this gives -1 cause there is no exist of 12 index


// const newArr = myArr.join()//this converts the array into comma , separated string

// console.log(myArr);
// console.log( newArr);


/* slice 
slice (1,4) so it slice 1 2 3 elem not include the 4 and dont changes the original one
like it make the sub array type
*/

/*splice
splice (1,4) so it splice 1 2 3 4 it include the 4 and changes the original one
cut it from 0,5 to 8 or whatever the size like it remove that particular part
*/
// console.log("A ", myArr);

// const myn1 = myArr.slice(1, 3)

// console.log(myn1);
// console.log("B ", myArr);


// const myn2 = myArr.splice(1, 3)//here it changes the original one cut it from 4 to rest..
// console.log("C ", myArr);
// console.log(myn2);

// -------------------------------------------------------------------------------------------------

const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)
//this push the whole array as single elem in marvl_hero. array having an element as a array{2d arr}

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)//these can merge it and store in other arr
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]//this is a spread out operator
// there is no limit to this it can merge the more tham twice array
//it like drop the glass and it spread out likewise drop the array and spread out
// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
console.log(another_array);

const real_another_array = another_array.flat(Infinity)
//aa badhane ekaj array ma lavi dey array no array nai badha ekmaj
// ema depth devani hoy  1 2 3 .. infinity jetla subarray na array ne tamare merge karva eni
console.log(real_another_array);



console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))// aa string ne array ma fervi nakhe
console.log(Array.from({name: "hitesh"})) // atyare aa to empty array aap baki
//aane kevu pade ke value no banavo ke key no array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));//aa of 6ene bdhane array ma kri nakhe jetla hoy etla