
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage())


function calculatecartprice(val1,val2, ...num1) {//here this ... is like rest opreator not spread operator
    // aay val1 ane val2 ma peli 2 value vai jay bakini array ma vai jay a rest operator hare
    return num1
}

// console.log(calculatecartprice(10,20,30,40,50));

const user = {
    username: "saurabh",
    age: 21,
}  

function handleobj(anyobj) {
    console.log(`the username is ${anyobj.username} and age is ${anyobj.age}`);
    
}

handleobj(user);
handleobj({
    username: "sam",
    age: 30,
})

const arr = [22,445,32,345,22345]

function arrsecondvalue(getarray) {
    return getarray[2]
}
console.log(arrsecondvalue(arr));
console.log(arrsecondvalue([1,2,3,4,5]));
