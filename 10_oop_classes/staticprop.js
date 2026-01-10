class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }
    // acces nathi devo etle static lakhyu
    static createId(){
        return `123`
    }
}

const hitesh = new User("hitesh")
// console.log(hitesh.createId()); // aam karsu to error aavse static lakhu etle
// console.log(User.createId()); // aavu karvu pade static method ne call karva mate class name thi

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
iphone.logMe();
// console.log(iphone.createId()); 


