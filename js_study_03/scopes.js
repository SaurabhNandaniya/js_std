//var c = 300

//note browser ma global scope thody alg hoy 6e
//the global scope is attached to the window object. in browser


let a = 300
if (true) {
    let a = 10
    const b = 20
    // var c = 30
    // console.log("INNER: ", a);// aaya block scope ma andar ni valuej aavse ane bar bahar vada ni
    
}
// var ma ej vandho aave ke e block scope ke global scope nu palan nathi karto etle var no use
// nathi thato tame bar c ni value 300 6e to pachhi e badlavi no joie pn aay badlay 6e e pn 
//block scope na var na lidhe


// console.log(a);
// console.log(b);
// console.log(c);





function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}
// two()// this is undefined cause we are acceing outside of it scope
// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))
//aay tame pela call karavo to hale pn.... jyare aa rite banavu hoy function tyarej
function addone(num){
    return num + 1
}


// aaya error avse jyare call karavso tyare jyare aa rite decalre karu hase functions tyare
addTwo(5)//aa variable ma host thayelu 6e etle
const addTwo = function(num){//here the variable addtwo is holding the functions we call expression
    return num + 2
}