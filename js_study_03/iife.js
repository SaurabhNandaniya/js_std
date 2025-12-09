// Immediately Invoked Function Expressions (IIFE)

(function chai() {
    // this named iife jenu name hoy ene kevai baki simple iife
    console.log("DB connected");
})();

//global scope na pollution thi bachava ane hata va mate iife use thay
// like mare direct e fun run thavu joie ane ema koi dakhal no devu joie etle iife use thay
// aane aavi rite lakhay ()() pelo cauns fun mate bijo immediately run mate
// ane khas semicolon nalhvu baki biju iife function run mate problm thase
((name/* aay paramete devanu hoy to*/) => {
    // aa simple iife 6e aanu nam nathi etle
    console.log(`db connect two ${name}`);
})("saurabh"/* aay pn je argument hoy e devanu */); 