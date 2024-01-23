console.log(a)     //ReferenceError: a is not defined


console.log(a) 
var a=10           //undefined

var b
console.log(b)     //undefined

console.log(a)
let a              //ReferenceError: Cannot access 'a' before initialization

let a
console.log(a)     //ReferenceError: a is not defined


//Functional Hoisting 
fun(5,10)
function fun(a,b)
{
    for(i=a;i<=b;i++){
        if(i%2==0)
        {
            console.log(i+" is an even no")
        }
        else
        {
            console.log(i+" is an odd no")
        }
    }
}


//frnd
konguClg(5,10)
function konguClg(){
    console.log("Function With Argument and without return type")
    for(i=a;i<b;i++){
        if(i%2==0){
            console.log("Even Number",i)
        }
        else{
            console.log("Odd Number",i)
        }
    }
}
konguClg(5,10)