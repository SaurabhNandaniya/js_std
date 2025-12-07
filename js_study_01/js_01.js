const accountId = 1243245
let accountName = "Saurabh"//this should ne re declared
var accountEmail ="saurabh@gmail.com"
accountCity = "Ahmedabad" // this also not preferable to use in js 
let stateOf
let accountState =""//let cant be re declared and 
// accountId = 4567 // we cant change the const value
/*
we simple onl use const and let var have issue with the scope like it changes all the
variable with it 
*/
accountName = "hello"
accountEmail = "@1332"
accountCity = "loej"
console.log(accountId);
console.table([accountName, accountEmail, accountCity, stateOf, accountState])