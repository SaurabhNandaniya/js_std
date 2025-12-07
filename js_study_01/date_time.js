let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toLocaleTimeString());
// console.log(typeof myDate);//object 

// let myCreatedDate = new Date(2025, 11, 10)
// myCreatedDate = new Date(2025, 11, 10, 12, 2, 90)
// myCreatedDate = new Date("2025-03-23")
myCreatedDate = new Date("01-23-2034")
// console.log(myCreatedDate.toLocaleString());

let timeStamp = Date.now()
// console.log(timeStamp);
// console.log(myCreatedDate.getTime());

// console.log(Date.now());// this in mili second
// console.log(Math.floor(Date.now()/1000));// this in second

let newDate = new Date()
// console.log(newDate.getDate());
// console.log(newDate.getMonth() + 1);//months start with the 0
// we can print sepearte dat month year and time with 
// string interpolation with below
// console.log(`the date is ${newDate.getDate()} and the month is ${newDate.getMonth()+1}.`);

console.log(newDate.toLocaleString('default', {
    weekday: "long",
    minute : "2-digit"//control space to get the other functions
}))