/*function ramusomu(){
    return new Promise(function(){
     setTimeout(function(){
        if(mattikitta raja)
    })
}
function miniAni(){
    console.log("odi poiru thambi vanthudatha")
}
ramusomu("hello ramu and somu",miniAni)
function display(s) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log(s);
            resolve('completed');
            //reject('function incomplete');
        }, 2000);
    });
}

display('hey').then(function(status) {
    if (status === 'completed')
     { return display('hi'); }
}).then(function(status) {
    if (status === 'completed') {
        return display('hola');
    }
});
*/
//promise


function hasFedVirtualPet() {
  // Simulate whether the user has fed their virtual pet
  return Math.random() < 0.5;
}

function login() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (hasFedVirtualPet()) {
        resolve("Your virtual pet is well-fed and happy!");
      } else {
        reject("Oops! It seems like your virtual pet is hungry.");
      }
    }, 1000);
  });
}

login()
  .then(function (message) {
    console.log(message);
  })
  .catch(function (message) {
    console.log(message);
  });