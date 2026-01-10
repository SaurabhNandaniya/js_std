class user {
    constructor(username){
        this.username = username
    }

    logMe() {
        console.log(`Hello ${this.username}`)
    }
}

class Teacher extends user {
    constructor(username,email,password){
        super(username)//here inhertance works after we use super to use username here 
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`Course added by ${this.username}`)
    }
}

const teacher1 = new Teacher("teacher1", "teacher1@.com", "123");
const teacher2 = new user("teacher2");

teacher2.logMe();
teacher1.logMe();
teacher1.addCourse();

console.log(teacher1 instanceof Teacher);
console.log(teacher1 instanceof user);
console.log(teacher1 === Teacher);
