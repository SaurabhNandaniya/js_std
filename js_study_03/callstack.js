// runt his in browser inspect and see call stack and executions phase 
// this is in source=>snippets and here you go 
function one() {
    console.log("one")
    two()
}
function two() {
    console.log("two")
    three()
}
function three() {
    console.log("three")
}
// one()
// two()
// three()

one()