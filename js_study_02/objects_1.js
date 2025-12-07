// const tinderUser = new Object()//this is for singleton obj
const tinderUser = {}// this is for non singleton obj

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);
//jo aya vachhe thi full name hoy ke no hoy doubt hoy to tya teni pachhal ? laki sakay
// like if else nakhi sakay hoy ke no hoy eno

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
const obj3 = Object.assign({},obj1, obj2, obj4)
// aya {} aa target ma store thay etle khali object ma store thay 6e em
// baki e no lakho to obj1 ma badhu vayu jay as result ane obj 3 mato jayaj obvious
// console.log(obj3);
// console.log(obj1);// jyare tame {} aa no lagado hare to as a target aam pn aakha 3 obj aavi jay
// const obj3 = {...obj1, ...obj2}// baki aa 6ej spread valu kai ghate nai 


const users = [// aan obj no array kevay 
    {
        id: 1,
        email: "hello@gmail.com"
    },
    {
        id: 1,
        email: "hfghj@gmail.com"
    },
    {
        id: 1,
        email: "oyyy@gmail.com"
    },
]

// users[1].email// tame aam pn acces kari sako 6o aary na object ne 
// console.log(users[1].email);

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));// aa keys no array dese
// console.log(Object.values(tinderUser));// ane aa same value no array dese
// console.log(Object.entries(tinderUser));// ane aa key value ni pair no array dese

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));// aa check kare 6e ke nai em


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor// har vakhte aavu no lakvu pade etle niche vadu banavi sako 
// ane aa niche vada ne tame tamari rite nam pn aapi sako like nanu nam
const {courseInstructor: instructor} = course// this is de structuring

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }//this is for apis like it is in json array

[
    {},
    {},
    {}
]
