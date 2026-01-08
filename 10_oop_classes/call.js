function setUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    // setUsername(username)//aavu karie to aane to call j no gyo aa khali refrence didhu
    // matlab ke username set j nai thay aa sadi rite aava execution context ma ena mate niche mujab
    // aama joya jevy 6e ek ke called no ouput aavse upar mujab karso to 
   setUsername.call(this,username) 
   //.call karie to e execution context 6e ene hold karine rakhe java no dey 
   //ane aa this 6e e je call karavu 6e ena curent context ma username kon 6e e aape matlab aa this use kare ena valo vayo jay etle
   
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);