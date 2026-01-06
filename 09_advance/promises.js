const promiseOne = new Promise(function(resolve, reject){
    // do db calls,cruptography , networkcall
    // asyync calls
    setTimeout(function(){
        console.log('async task is complete');
        resolve()
        //   .then valu chalavu hoy to resolve call karvu pade
    }, 1000)
});

promiseOne.then(function(){
    console.log('Promise is consumed');
})
// upar valu 6e e variable ma store thay ne thay 6e ena vagar pn thay

// have promise ne store karya vagar\

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('async task 2 is complete');
        resolve()
    }, 1000)
}).then(function(){
    console.log('Promise two is consumed');
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('async task 3 is there');
        resolve({username: 'saurabh', password: '123'})
        //here you also paass the data in resolve mostly it is object only
    }, 1000)
});

promiseThree.then(function(user){
    console.log(user);
})

// have reject ni vat karie

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username: 'Gaurang', password: '123'})
        } else {
            reject('sorry error is there')
        }
    }, 1000)
});

promiseFour.then((user) => {
    console.log(user);
    return user.username;
// aaya username ne return karie to next then ma aavi jase
}).then((username) => {
    console.log(username);
}).catch((error) => {
    console.log(error);
    // catch ma reject no message avse je reject ma aapyu 6e
}).finally(() => console.log('I will execute always'))
// finally always execute thay 6e chahe resolve thay ke reject thay

// async await thi promise ne kem handle karie
// aama catch and finally no use nathi 
// matlab aama try and catch no use thay 6e aana this error handle thay 6e

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username: 'javascript', password: '123'})
        } else {
            reject('javascript error is there')
        }
    }, 1000)
});

async function consumePromise(){
    try {
        const user = await promiseFive;
        // aaya promiseFive() nathi karyu kem ke e function nathi e promise 6e ane object hoy e
        console.log(user);
    } catch(error) {
        console.log(error);
    }
}
consumePromise();

// have fetch hare async await thi karie

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         // const response = await fetch('https://jsonplaceholder.typicode.com/userzzz')
//         // aaya url ma game e add karie to error aavse
//         // fetch pn promise return kare 6e
//         const data = await response.json()
//         // aaya pn await lakhvu pade kem ke e pn promise return kare 6e ema pn var lagi sake 6e
//         // await no lakho to no pn aave json ma badlayane data ni andar
//         console.log(data);
//     } catch (error) {
//         console.log("E: edrftgyhujhytgfrdewssedrftgy", error.message);
//     }
// }

// getAllUsers()

// fetch('9')
// aaya fetch ma tame comma karine object pn pass kari sako 6e je ma method,headers,body vagere specify kari sako 6e
fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {

    // if (!response.ok) {// a vastu 6e ne page ma error handle karva mate
    //     // force error
    //     throw new Error(`HTTP Error! Status: ${response.status}`);
    // }

    // response ma json data nathi e ma badhu data hoy 6e
    // json data mate response.json() karvu pade
    return response.json()
    // aaya return karie to next then ma data aavi jase
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log("this is error--------------------",error))

/*aama ek joya jevu 6e jyare tame aa run karavo 6o tyrare suathi pela aa upara vala etle ke api vala
nu output aave pacchi bija badha async await ne bija promise nu aave 6e ekvar run karavine jojo
janya jevy 6e e....*/

// promise.all
// yes this is also available, kuch reading aap b kro.


