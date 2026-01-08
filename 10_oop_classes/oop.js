// object literal
const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        console.log("Got user details from database");
        // console.log(this);//this gives current context 
        console.log(`Username: ${this.username}`);//{username} ane {user.username} try it
        // aaya this etle current context ni vat hale 6e aapde aaya ne aaya username joye to
        // this lakhvu pade aaya pachhi user.username karie to setting no aave 1 var try kar
        // have aava user nam na bija hoy to setting vikhay jay etle 
    }

}

// console.log(user.username)
// console.log(user.getUserDetails());
// console.log(this);


function User(username, loginCount, isLoggedIn){
    // aaya this name etle current object ne indicate kare 6e
    // ane same name etle ke badha mostly common practice 6e
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }
    // return karie to object return thay 6e matlab pass thay 6e
    return this// aa lakho ke no lakho e farak nathi pade karan ke by default return this j thay 6e
}

// const userOne = User("hitesh", 12, true)
// const userTwo = User("ChaiAurCode", 11, false)
// console.log(userOne);
// userone ma pn aa usertwo ni value aavi jase karan ke aapde new nathi lakhyu ane overwrite thay 6e
// console.log(userTwo);
const userOne = new User("hitesh", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)


console.log(userOne);
console.log(userOne.constructor);// aa aapde batave 6e ke aa object no constructor su 6e
// aa new keyword na lidhe constructor call thay ane 
// aa constructor ane new math ek har vakhte ek navo instance ek navi copy banavine aape tukma
// console.log(userTwo);