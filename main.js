//function declaration hositing

function gameplay() {
  console.log('hello');
}

gameplay();

// Greetings Player Div add input from user to get name

document.body.onload = greetDiv;

function greetDiv() {
  const newDiv = document.createElement("div");
  const greetText = document.createTextNode("Greetings Player");
  newDiv.appendChild(greetText);
  const createdDiv = document.getElementById('helloDiv');
  document.body.insertBefore(greetText, createdDiv);
}

//
const cellPlay = function (){


}

// function sayHi(a) {
//   var greeting = "Greetings " + a ;
//   return greeting;
// }
// console.log(sayHi("Gabab"));
//

var testExample = function (a){
  var greeting = "Greetings " + a;
  return greeting;

}
var a = "gaba";
console.log(testExample(a));

// const greetPlayer = function(name){
//   console.log(`good move ${name}`);
//
// };
//
// greetPlayer('gabi');


// function expression - storing the function in a variable to be evoked later -remember no hoisting


const clickPay = function(x){
  console.log(`good move ${x}`);

};

clickPay('o');
