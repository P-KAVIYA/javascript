// Assignment operator
var a=10;       //semicolon is not mandatory in scripting languages
console.log("Assignment Operator Output:",a)

//---------------------------------------------------------------------------------------------------------

//Arithmetic operator
//three oprands is required ir we are storing it in a variable

//1)ADDITION
var aA='hello'
var bA='everyone'
console.log("Arithmetic operator addition output: ",aA+bA)

var aA=60
var bA=20
console.log("Arithmetic operator addition output: ",aA+bA)

//to see data type...
console.log(typeof(aA))


// 2)SUBTRACTION

var aA=60
var bA=20
console.log("Arithmetic operator subtraction output :",bA-aA)

// MULTIPLICATION

var aA=60
var bA=20
console.log("Arithmetic operator multiplication output: ",aA*bA)

// DIVISION

var aA=60
var bA=0
console.log("Arithmetic operator dividion output :",aA/bA)

var aA=60
var bA=20
console.log("Arithmetic operator division output: ",aA/bA)

// MODULUS
 
var aA=60
var bA=20
console.log("Arithmetic operator modulus output ",aA%bA)

// LOGICAL OPERATORS-->&&,||,!

var aA=30
var bA=20
var cA=0

console.log("logical operator &&:",aA&&bA)
//check first condition if it is true(not zero) then check second condition and print second number
//if false occur then and will stop there itself and return 0
console.log("logical operator &&:",10&&30)
console.log("logical operator &&:",10&&0)
console.log("logical operator &&:",0&&30)
console.log("logical operator &&:",30&&10)


//if one condition is true(value) return that,if both true then return first
console.log("logical operator ||:",aA||bA)


console.log("logical operator !:",!aA)
console.log("logical operator !:",!cA)

// !10=false  !0=true  !-10=false(any no other than zero will cnsider a false even if it is negative)


console.log(10||20)//==>10 becoz here first itself true
console.log(100||20&&0)
console.log((100||20)&&0)//==>hold three operan but becoz of bracket there is two operations
console.log(0&&(100||20))

