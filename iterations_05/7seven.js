const muNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = muNums.map( (num) => { return num+10} )
// const newNums = muNums.map( (num) => num+10 )
// const newNums = [];
// muNums.forEach(num => {
//   newNums.push(num + 10);
// });

// chaining of map and filtert and etc
const newNums = muNums
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)//filter check condition

console.log(newNums);
