const user = {
    _email: 'hi@123.com',
    _password: '12345',

    get email() {
        return this._email.toUpperCase();
    },

    set email(value) {
        this._email = value;
    },
}

const user1 = Object.create(user);
console.log(user1._email);
console.log(user1.email);// aama get ste valo email. aavse kem ke user1 ma email property nathi to prototype ma jase ane tya thi get call thase
