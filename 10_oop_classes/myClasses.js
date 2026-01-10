class user {
    constructor(username, email, password){
        // aaya aa value assign karva mate aa rite alg thi aapda hath ma control aavi jay 
        // jyare apde class no use karie tyare aam constructor lakhine that assign 
        this.username = username
        this.email = email
        this.password = password
    }

    encryptPass(){
        return `${this.password}abc`;//try everything
        // return console.log(`${this.password}abc`)
        // console.log(`${this.password}abc`)
        
    }
    changeusername(){
        return `${this.username.toUpperCase()}`;
    }
}

const user1 = new user("user1", "user1@.com", "123"); 

console.log(user1.encryptPass());
console.log(user1.changeusername());

// behind the scene
// jo class no hot aapni pase to su karet aapde e joiye

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}
// aapd e method ne prototype ma add kari alg thi 
User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}


const tea = new User("tea", "tea@gmail.com", "123")

console.log(tea.encryptPassword());
console.log(tea.changeUsername());