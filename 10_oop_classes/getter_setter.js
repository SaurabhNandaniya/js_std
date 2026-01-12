class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }
    
// get lakho to set lakvuj pade baki to error aavse

    get password(){// aaya nam property nu hoy ej aapvanu jem ke upar password 6e to aaya password em
        //get etle jyare password koi print karavse athava koi jose tyare ene aa vali value dekhase
        // aaya je karie 6e e dekhase
        // anee haa aaya this.password nai hale navu nam aapvu pade etle extra nam mate _ karo 6e
        return `${this._password}hitesh`
    }

    set password(value){//aaya value levi pade 6e je value aapvama aavse e mate
        // set etle jyare aa value kyay pn store thase tyare aa vadi thase etle memory stack ma ne e badha ma 
// example e m lai sakay ke jyare koine dekhadvi alg hoy original karta ane backend ma store thay tyare
// original athava je tamare aapvi hoy e store thay 6e e pramane nu 6e aama 
        this._password = value
    }
    get email(){

        return this._email.toUpperCase()
//this.email rakhie to infinite loop ma jai jase karan ke aa get j call thase
// ane aa error aavse maximum call stack size exceeded
    }
    set email(value){
        this._email = value 
        // set ma return nathi lakhvanu karan ke set ma value store karvi hoy 6e
        // ane get ma aavse 6e je value dekhavvi hoy 6e
    }

}

const hitesh = new User("h@hitesh.ai", "abc")
console.log(hitesh.email);
console.log(hitesh.password);