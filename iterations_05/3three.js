// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map);
// this is interesting loop in map
// sadi loop ma aa locho aave etle for of use thay
//Maps do not use numeric indexes,
//so you must convert them into an array first:
/*
const entries = Array.from(map);

for (let i = 0; i < entries.length; i++) {
    const [key, value] = entries[i];
    console.log(key, value);
}
*/
for (const [key, value] of map) {// map ma aa rite key ane value melavi shakay
    // console.log(key, ':-', value);
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}
// object iterable nathi ena biji rite thay atyare aam khali map j iterable 6e 
// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }
