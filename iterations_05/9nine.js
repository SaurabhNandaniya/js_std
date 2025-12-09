const nums = [1,2,3,4]

const totalNums = nums.reduce( (acc, currval) => (acc+currval),0)
console.log(totalNums);

const shopCart = [
    {
        productName: "js",
        price : 100
    },
    {
        productName: "py",
        price : 200
    },
    {
        productName: "cpp",
        price : 300
    },
    {
        productName: "ruby",
        price : 500
    },
    {
        productName: "java",
        price : 700
    },
]

const totalprice = shopCart.reduce( (acc, item) => (acc + item.price),0)

console.log(totalprice)