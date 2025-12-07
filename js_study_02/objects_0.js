// singleton
// Object.create this create the singleton object

// object literals

const mySym = Symbol("key1")//symobol declarations
// console.log(mySym);
// console.log(typeof mySym);


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",
    //aaya object ma symbol ne leva mate square bracket leva pade baki E ene string tarike ley
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
// console.log(JsUser);

// console.log(JsUser.email)// aam pn hale .(dot) karine pn jyare
// console.log(JsUser["email"])// key nu nam string ma hase tyare . dot karine no hale
// console.log(JsUser["full name"])// tyare tamare object mate square bracket karvaj padse 
// console.log(JsUser[mySym])// ane haa symbol mate pn karva pade square bracket

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)// aa 6e ne freeze kari dey cahnge karva no dey object ne
JsUser.email = "hitesh@microsoft.com"// aa lakhay pn change no thay
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());