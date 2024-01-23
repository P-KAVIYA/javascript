// //callback

// function ramuSomu(welcomeMessage, callback) { //instead of call back we can use another terms like thambipoiru...
//     setTimeout(function () {
//         console.log(welcomeMessage);
//         callback();
//     }, 2000);//1hr-->3600000
// }
// function miniAni() {
//     console.log("Don't join here bro!!");
// }
// ramuSomu("Hello Ramu and Somu\nwelcome to kongu college", miniAni);

// // ex2----
// // Form Submission Example  3 fn used
// function submitForm(buttonClick,dataBase){
//     setTimeout(function(){
//         console.log(buttonClick) //functionality
//         dataBase();
//     },2000) //1s=1000ms
// }
// function dataBase(){
//     console.log("Form Submited Successfully")
// }
// submitForm("Form submit button clciked",dataBase)


// ex3----login
function signUp(clicked,homePage){
    setTimeout(function(){
        console.log(clicked)
        homePage();
    },1000)
}
function homePage(){
    console.log("Welcome to our website")
}
signUp("Thank you for your registration",homePage)
