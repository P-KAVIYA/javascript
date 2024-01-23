//ES6->ECMA Script 6 standard
//1. var,let,const===>refer variable.js

/* 2.Arrow function

var fun=()=>{  //should start with let,const,var

    console.log("hello")
}
fun()*/

/* destructuring operator  //we have to  use square bracket

var arr=[20,30,40,50,60]
var[a,b,c,d,e]=arr
console.log(a,b,c,d,e)*/

/* 4.Spread operator  
var arr=[10,20,30,40,50]
var array=[...arr,60,70]
console.log(array)
*/





//Promise
var isLocationValid=(loc)=> {
  var validLocation = "namakkal";
  return loc === validLocation;
}
var location=()=> {
  return new Promise((resolve, reject)=>{
    setTimeout(function () {
      var loc = "namakkal";
      console.log(loc);
      if (isLocationValid(loc)) {
        resolve("Location found");
      } else {
        reject("Location not found");
      }
    }, 2000);
  });
}
location()
  .then((response)=> {
    console.log(response);
  })
  .catch((errorMessage)=> {
    console.log(errorMessage);
  });

//Callback   //   var fun=()=>{ 
var database=()=>{
  console.log("Form submitted successfully..!!")
}
var submitForm=(buttonClick,db)=>{ // function definition
  setTimeout(()=>{
   console.log(buttonClick)
       db()
  },2000)
}
submitForm("Form submit button clicked",database) // Function calling

//Async await
async function asAw() {
  var promise = new Promise(
      function (response) {
          setTimeout(function () {
              //console.log(response)
              response("Example for async/Await");
          }, 1000)
      }
  );
  console.log(await promise);
}
asAw()