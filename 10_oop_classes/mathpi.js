const descripter = Object.getOwnPropertyDescriptor(Math, "PI")
// console.log(Object.getOwnPropertyDescriptors(Math));

// console.log(descripter);

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function() {
        console.log(`Your ${this.name} has been ordered`);
    }
}

// console.log(Object.getOwnPropertyDescriptor(chai))//undefinesd aavse aapde properti nathi aapi etle
console.log(Object.getOwnPropertyDescriptor(chai,'price'));

// Object.defineProperty(chai, 'price', {
//     writable: false,
//     configurable: false,
//     enumerable: false,
//     // value: 300
// })
// console.log(Object.getOwnPropertyDescriptor(chai,'price'));


for (let [key, value] of Object.entries(chai)) {
    // khali chai no hale object.entries karie to aapde key ane value male
    if(typeof value !== 'function'){

        console.log(`${key} : ${value}`);
        // console.log(`${element}`);
    }
        
    
}