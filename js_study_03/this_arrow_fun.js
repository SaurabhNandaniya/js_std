const user = {
    username: "saurabh",
    age: 21,
    welcomeMessage: function() {
        console.log(`${this.username}, welcome to shop `);
        // console.log(this);//thi sgives its scopes object like in output it gives whole obj
        
    }
}
// console.log(user.welcomeMessage());//this gives extra undefined for two console logs i guess
// user.username = "gaurang"
// user.welcomeMessage()
// console.log(this);// this gives empty object or global object is empty
//basically this talk about tyhe current context
// while in browser it gives windows as a main global object and its events etc..

// have function ma this use kariye to no thay niche mujab

function helo()
{
    let username = "saurabh"//let ke const hare function ma undefine dese
    // username = "saurabh"//jo emnam declare karo let ke const vagar to hale 
    console.log(this.username);// aa undefine dese kem ke this function mate nathi opbj mate je 6e 
    // aa badhu hal purtu 6e agal jata kaik navu aavi sake

    // console.log(this);// avdu aa bov motu output dese badha environment me badhu
    
}
// helo()

// arroe function mate function shabd kadhi ne tya => aavu kari devanu etle e tamaru arrow fun..

const chai = () => {
    let username = "saurabh "
    console.log(this);
    console.log(this.username);
}
// chai()// aaam on same j aavse empty ane undefined

// const addTwo = (num1,num2) => {
//     return num1 + num2
// }
// const addTwo = (num1,num2) => num1 + num2
// const addTwo = (num1,num2) => (num1 + num2)
// jo curly braces use kare to return lakhvu pade ene explicit kevay tukma
// baki gol bracket pn hale 
// this is implicit return you dont have to write return and curly braces for that on line 
// have object hoy to tamare paranthesis nakhvaj pade baki undefine aave 
const addTwo = (num1,num2) => ({username : " saurabh"})

console.log(addTwo(2,7));
