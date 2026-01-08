// let myName = "Saurabh"
// console.log(myName.length);
// console.log(myName.trueLength);// mare avi method banavi mare trim use nathi karvu tooo

// have aapde direct koi pn string hoy array hoy emaj aapde method add karvi 6e like universal type
// badha string ma ke array ma ene use kari sakie


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.saySaurabh = function(){
    console.log("Saurabh is present everywhere in all objects vu hahahahahahaha");
}
// heroPower.saySaurabh()
// myHeros.saySaurabh()
// aama aapde joyu ke aapde direct j Object prototype ma method add kari  etle e badha ma aavi jay 
// kem ke object is baap of all array function string and etc
// have aapde jo array ma methos add kari to su e ena baap pase jase ???

Array.prototype.sayPapa = function(){   
    console.log("Papa is present in all arrays");
}

// myHeros.sayPapa()
// heroPower.getSpiderPower()
// heroPower.sayPapa()
// etle kevay 6e ke dikra ne power male e baap no male ane ena bhayu jem ke string fun ene pn no male 


// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport// TASupport ni andar teachingSupport na badha properties chali jase
}
Teacher.__proto__ = User// teacher ni andar user na badha properties chali jase



// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)
// teachingSupport ni andar teacher na badha properties chali jase

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    // aaya khali this 6e etle je string call karse e aavse matlab e string no refrence ley 6e 
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()
